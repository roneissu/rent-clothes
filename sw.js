const CACHE_NAME = 'rent-clothes';

const urlsToCache = [
    '/rent-clothes/',
    '/rent-clothes/static/js/bundle.js',
    '/rent-clothes/static/js/main.chunk.js',
    '/rent-clothes/static/js/1.chunk.js',
    '/rent-clothes/static/js/0.chunk.js',
    '/rent-clothes/favicon.ico',
    '/rent-clothes/css/main.0df1030a.chunk.css',
    '/rent-clothes/css/main.0df1030a.chunk.css.map',
    '/rent-clothes/icons/icon-144x144.png',
    '/rent-clothes/icons/icon-512x512.png',
    '/rent-clothes/images/calendario.png',
    '/rent-clothes/images/lapis.png',
    '/rent-clothes/images/vestido.png',
    '/rent-clothes/images/seta_curva.svg'
];

this.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

this.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response){
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});
