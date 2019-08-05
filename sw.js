const CACHE_NAME = 'rent-clothes';

const urlsToCache = [
    './',
    './static/js/bundle.js',
    './static/js/main.chunk.js',
    './static/js/1.chunk.js',
    './static/js/0.chunk.js',
    './favicon.ico',
    // './css/main.0df1030a.chunk.css',
    // './css/main.0df1030a.chunk.css.map',
    './icons/icon-72x72.png',
    './icons/icon-96x96.png',
    './icons/icon-128x128.png',
    './icons/icon-144x144.png',
    './icons/icon-152x152.png',
    './icons/icon-192x192.png',
    './icons/icon-384x384.png',
    './icons/icon-512x512.png',
    './images/calendario.png',
    './images/lapis.png',
    './images/vestido.png',
    './images/seta_curva.svg'
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
