const CACHE_NAME = "sayko-fitness-v9";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",
    "./1790471069347.jpg"
];


/* ================= INSTALL ================= */

self.addEventListener("install", event => {

    /*
     * لا نستخدم skipWaiting هنا.
     * نخلي النسخة الجديدة تنتظر حتى يضغط المستخدم
     * على "تحديث الآن".
     */

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {

                return cache.addAll(FILES_TO_CACHE);

            })

    );

});


/* ================= ACTIVATE ================= */

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()
            .then(keys => {

                return Promise.all(

                    keys.map(key => {

                        if(key !== CACHE_NAME){

                            return caches.delete(key);

                        }

                    })

                );

            })

            .then(() => {

                return self.clients.claim();

            })

    );

});


/* ================= FETCH ================= */

self.addEventListener("fetch", event => {

    /*
     * للصفحات HTML:
     * نطلب النسخة الجديدة من الإنترنت أولًا
     * حتى يستطيع Service Worker اكتشاف التحديثات.
     */

    if(
        event.request.mode === "navigate" ||
        event.request.destination === "document"
    ){

        event.respondWith(

            fetch(event.request)
                .then(response => {

                    const copy=response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {

                            cache.put(
                                event.request,
                                copy
                            );

                        });

                    return response;

                })
                .catch(() => {

                    return caches.match(event.request);

                })

        );

        return;

    }


    /*
     * الملفات الأخرى:
     * نحاول الكاش أولًا، ثم الإنترنت.
     */

    event.respondWith(

        caches.match(event.request)
            .then(cached => {

                if(cached){

                    return cached;

                }

                return fetch(event.request)
                    .then(response => {

                        if(
                            response &&
                            response.status === 200 &&
                            response.type === "basic"
                        ){

                            const copy=response.clone();

                            caches.open(CACHE_NAME)
                                .then(cache => {

                                    cache.put(
                                        event.request,
                                        copy
                                    );

                                });

                        }

                        return response;

                    });

            })

    );

});


/* ================= UPDATE NOW ================= */

self.addEventListener("message", event => {

    if(event.data === "SKIP_WAITING"){

        self.skipWaiting();

    }

});
