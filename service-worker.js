const CACHE_NAME = "sayko-fitness-v11";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",
    "./1790471069347.jpg"
];


/* ================================
   INSTALL
================================ */

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
        .then(cache => {

            return cache.addAll(FILES_TO_CACHE);

        })

    );

    /*
       مهم:
       لا نستخدم skipWaiting هنا.
       النسخة الجديدة ستنتظر حتى يضغط
       المستخدم على "تحديث الآن".
    */

});


/* ================================
   ACTIVATE
================================ */

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()
        .then(keys => {

            return Promise.all(

                keys.map(key => {

                    if(key !== CACHE_NAME){

                        return caches.delete(key);

                    }

                    return null;

                })

            );

        })
        .then(() => {

            return self.clients.claim();

        })

    );

});


/* ================================
   FETCH
================================ */

self.addEventListener("fetch", event => {

    /*
       صفحات HTML:
       نحاول الحصول على أحدث نسخة من السيرفر أولاً.
    */

    if(
        event.request.mode === "navigate" ||
        event.request.destination === "document"
    ){

        event.respondWith(

            fetch(event.request, {
                cache: "no-store"
            })

            .then(response => {

                const copy = response.clone();

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

                return caches.match(
                    event.request
                );

            })

        );

        return;

    }


    /*
       باقي الملفات:
       Cache First
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

                    const copy =
                        response.clone();

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


/* ================================
   UPDATE BUTTON
================================ */

self.addEventListener("message", event => {

    if(
        event.data === "SKIP_WAITING" ||
        (
            event.data &&
            event.data.type === "SKIP_WAITING"
        )
    ){

        self.skipWaiting();

    }

});
