
const CACHE_NAME = "sayko-fitness-v39";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    for (const path of APP_SHELL) {
      try {
        const url = new URL(path, self.registration.scope);
        const response = await fetch(url, { cache: "reload" });

        if (response.ok) {
          await cache.put(url, response.clone());
        }
      } catch (error) {
        console.log("Cache failed:", path);
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

  if (
    request.mode === "navigate" ||
    request.destination === "document"
  ) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);

        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, response.clone());
        }

        return response;
      } catch (error) {
        const cache = await caches.open(CACHE_NAME);

        return (
          await cache.match(request, { ignoreSearch: true }) ||
          await cache.match(
            new URL("index.html", self.registration.scope).href
          ) ||
          await cache.match(self.registration.scope) ||
          new Response("البرنامج يحتاج فتحه بالإنترنت مرة واحدة لحفظ النسخة.", {
            status: 503,
            headers: {
              "Content-Type": "text/plain; charset=utf-8"
            }
          })
        );
      }
    })());

    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);

    if (cached) return cached;

    try {
      const response = await fetch(request);

      if (response.ok && response.type === "basic") {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }

      return response;
    } catch (error) {
      return new Response("الملف غير متاح بدون إنترنت.", {
        status: 503,
        headers: {
          "Content-Type": "text/plain; charset=utf-8"
        }
      });
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
