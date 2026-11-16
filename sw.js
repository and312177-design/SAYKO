
const CACHE_NAME = "sayko-fitness-v38";
const APP_SHELL = ["./", "./index.html", "./manifest.json"];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    await Promise.all(APP_SHELL.map(async path => {
      try {
        const url = new URL(path, self.registration.scope).href;
        const response = await fetch(url, { cache: "reload" });

        if (response && response.ok) {
          await cache.put(url, response.clone());
        }
      } catch (_) {
        // تجاهل الملفات غير المتاحة مؤقتًا
      }
    })());
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();

    await Promise.all(
      keys
        .filter(key =>
          key.startsWith("sayko-fitness-") &&
          key !== CACHE_NAME
        )
        .map(key => caches.delete(key))
    );

    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const scopeURL = new URL(self.registration.scope);

  if (url.origin !== scopeURL.origin) return;

  // صفحات الموقع
  if (
    request.mode === "navigate" ||
    request.destination === "document"
  ) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);

      try {
        const response = await fetch(request, {
          cache: "no-store"
        });

        if (response && response.ok) {
          await cache.put(request, response.clone());
        }

        return response;
      } catch (_) {
        const cached = await caches.match(request, {
          ignoreSearch: true
        });

        if (cached) return cached;

        const indexURL = new URL(
          "index.html",
          self.registration.scope
        ).href;

        const indexPage = await caches.match(indexURL, {
          ignoreSearch: true
        });

        if (indexPage) return indexPage;

        const rootPage = await caches.match(
          self.registration.scope,
          { ignoreSearch: true }
        );

        if (rootPage) return rootPage;

        return new Response(
          "افتح التطبيق بالإنترنت مرة واحدة أولاً حتى يتم حفظ النسخة للعمل دون اتصال.",
          {
            status: 503,
            headers: {
              "Content-Type": "text/plain; charset=utf-8"
            }
          }
        );
      }
    })());

    return;
  }

  // ملفات الموقع
  event.respondWith((async () => {
    const cached = await caches.match(request);

    if (cached) return cached;

    try {
      const response = await fetch(request);

      if (
        response &&
        response.ok &&
        response.type === "basic"
      ) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }

      return response;
    } catch (_) {
      return new Response(
        "هذا الملف لم يتم حفظه على الجهاز بعد.",
        {
          status: 503,
          headers: {
            "Content-Type": "text/plain; charset=utf-8"
          }
        }
      );
    }
  })());
});

self.addEventListener("message", event => {
  if (
    event.data === "SKIP_WAITING" ||
    event.data?.type === "SKIP_WAITING"
  ) {
    self.skipWaiting();
  }
});
