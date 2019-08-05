const CACHE_NAME = 'rent-clothes';

const urlsToCache = [
    '/',
    '/static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/1.chunk.js',
    '/static/js/0.chunk.js',
    '%PUBLIC_URL%/favicon.ico',
    '/css/main.0df1030a.chunk.css',
    '/css/main.0df1030a.chunk.css.map',
    '%PUBLIC_URL%/icons/icon-144x144.png',
    '%PUBLIC_URL%/icons/icon-512x512.png',
    '%PUBLIC_URL%/images/calendario.png',
    '%PUBLIC_URL%/images/lapis.png',
    '%PUBLIC_URL%/images/vestido.png',
    '%PUBLIC_URL%/images/seta_curva.svg'
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
