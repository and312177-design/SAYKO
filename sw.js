const CACHE_NAME = "sayko-offline-v1";
const APP_FILES = ["./", "./index.html", "./manifest.json"];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    for (const file of APP_FILES) {
      try {
        await cache.add(file);
      } catch (e) {
        console.log("Cache optional file skipped:", file);
      }
    }

    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();

    await Promise.all(
      keys
        .filter(k => k.startsWith("sayko-offline-") && k !== CACHE_NAME)
        .map(k => caches.delete(k))
    );

    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;

  // صفحات البرنامج
  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);

        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, response.clone());
          cache.put("./index.html", response.clone());
        }

        return response;

      } catch (e) {
        const cache = await caches.open(CACHE_NAME);

        return (
          await cache.match(request) ||
          await cache.match("./index.html") ||
          await cache.match("./")
        );
      }
    })());

    return;
  }

  // ملفات البرنامج والصور والموارد
  event.respondWith((async () => {
    const cached = await caches.match(request);

    if (cached) return cached;

    const response = await fetch(request);

    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }

    return response;
  })());
});

// استقبال أمر تحديث البرنامج
self.addEventListener("message", event => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
