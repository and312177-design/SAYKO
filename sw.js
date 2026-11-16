const CACHE_NAME = "sayko-fitness-v37";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./1790471069347.jpg"
];

/* INSTALL */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );

  // يترك التحديث ينتظر موافقة المستخدم
});

/* ACTIVATE */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.map(key => {
          if (key.startsWith("sayko-fitness-") && key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      ))
      .then(() => self.clients.claim())
  );
});

/* FETCH */
self.addEventListener("fetch", event => {
  const request = event.request;

  // تجاهل الطلبات غير التابعة لنفس الموقع
  if (new URL(request.url).origin !== self.location.origin) {
    return;
  }

  // صفحات التطبيق: الشبكة أولاً ثم النسخة المحفوظة
  if (
    request.mode === "navigate" ||
    request.destination === "document"
  ) {
    event.respondWith(
      fetch(request, { cache: "no-store" })
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => {
          return (
            await caches.match(request) ||
            await caches.match("./index.html") ||
            new Response("الصفحة غير متاحة دون إنترنت. افتح التطبيق بالإنترنت مرة واحدة لتحميل الملفات.", {
              headers: { "Content-Type": "text/plain; charset=utf-8" }
            })
          );
        })
    );

    return;
  }

  // الملفات والصور والموارد: الكاش أولاً
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      return fetch(request).then(response => {
        if (response && response.ok && response.type === "basic") {
          const copy = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});

/* UPDATE NOW */
self.addEventListener("message", event => {
  if (
    event.data === "SKIP_WAITING" ||
    (event.data && event.data.type === "SKIP_WAITING")
  ) {
    self.skipWaiting();
  }
});
