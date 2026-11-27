const CACHE_NAME = "sayko-offline-v1";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      for (const file of APP_FILES) {
        try {
          await cache.add(file);
        } catch (error) {
          console.log("تعذر تخزين:", file);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith("sayko-offline-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // تجاهل المواقع الخارجية
  if (url.origin !== self.location.origin) return;

  // فتح البرنامج والصفحات
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();

            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, copy);
              cache.put("./index.html", response.clone());
            });
          }

          return response;
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_NAME);

          return (
            await cache.match(request) ||
            await cache.match("./index.html") ||
            await cache.match("./")
          );
        })
    );

    return;
  }

  // الملفات المحفوظة: الصور والسكريبتات والستايل
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      return fetch(request).then(response => {
        if (response.ok) {
          const copy = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, copy);
          });
        }

        return response;
      });
    })
  );
});

// استقبال أمر تحديث البرنامج
self.addEventListener("message", event => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
