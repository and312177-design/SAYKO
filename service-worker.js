const CACHE_NAME = "sayko-fitness-v7";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./1790471069347.jpg"
];

/* ================================
   تثبيت النسخة الجديدة
================================ */

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then(cache => {

        return cache.addAll(APP_FILES);

      })

      /*
       * مهم:
       * لا نستخدم self.skipWaiting() هنا
       * حتى يفضل التحديث منتظرًا
       * إلى أن يضغط المستخدم "تحديث الآن".
       */

  );

});


/* ================================
   تفعيل النسخة الجديدة
================================ */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys()

      .then(keys => {

        return Promise.all(

          keys

            .filter(key => key !== CACHE_NAME)

            .map(key => caches.delete(key))

        );

      })

      .then(() => {

        return self.clients.claim();

      })

  );

});


/* ================================
   تحميل الملفات
   الإنترنت أولاً
================================ */

self.addEventListener("fetch", event => {

  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(

    fetch(event.request)

      .then(response => {

        /*
         * نتأكد أن الاستجابة صالحة
         * قبل حفظها في الكاش.
         */

        if (
          response &&
          response.status === 200 &&
          response.type !== "opaque"
        ) {

          const copy = response.clone();

          caches.open(CACHE_NAME)

            .then(cache => {

              cache.put(event.request, copy);

            });

        }

        return response;

      })

      .catch(() => {

        /*
         * لو الإنترنت غير متاح،
         * نستخدم النسخة الموجودة في الكاش.
         */

        return caches.match(event.request);

      })

  );

});


/* ================================
   استقبال أوامر البرنامج
================================ */

self.addEventListener("message", event => {

  /*
   * عند الضغط على:
   * "تحديث الآن"
   */

  if (event.data === "SKIP_WAITING") {

    self.skipWaiting();

  }

});
