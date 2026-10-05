const CACHE_NAME = "sayko-fitness-v9";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",
    "./1790471069347.jpg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>
            cache.addAll(FILES_TO_CACHE)
        )
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.map(key => {
                    if(key !== CACHE_NAME){
                        return caches.delete(key);
                    }
                })
            )
        ).then(() =>
            self.clients.claim()
        )
    );
});

self.addEventListener("fetch", event => {

    if(
        event.request.mode === "navigate" ||
        event.request.destination === "document"
    ){

        event.respondWith(
            fetch(event.request)
            .then(response => {

                const copy =
                    response.clone();

                caches.open(CACHE_NAME)
                .then(cache =>
                    cache.put(
                        event.request,
                        copy
                    )
                );

                return response;

            })
            .catch(() =>
                caches.match(event.request)
            )
        );

        return;
    }

    event.respondWith(
        caches.match(event.request)
        .then(cached => {

            if(cached)
                return cached;

            return fetch(event.request)
            .then(response => {

                if(
                    response &&
                    response.status === 200 &&
                    response.type === "basic"
                ){

                    const copy =
                        response.clone();

                    caches.open(CACHE_NAME)
                    .then(cache =>
                        cache.put(
                            event.request,
                            copy
                        )
                    );

                }

                return response;

            });

        })
    );

});

self.addEventListener("message", event => {

    if(
        event.data === "SKIP_WAITING"
    ){

        self.skipWaiting();

    }

});
