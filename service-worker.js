const CACHE_NAME = "sayko-fitness-v4";

const FILES = [
    "./",
    "./index.html",
    "./manifest.json",
    "./1790471069347.jpg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
    );

    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            )
        )
    );

    self.clients.claim();
});

self.addEventListener("fetch", event => {

    if (event.request.mode === "navigate") {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const copy = response.clone();

                    caches.open(CACHE_NAME).then(cache => {
                        cache.put("./index.html", copy);
                    });

                    return response;
                })
                .catch(() => caches.match("./index.html"))
        );

        return;
    }

    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
