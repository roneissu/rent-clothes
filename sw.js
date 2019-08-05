const CACHE_NAME = 'rent-clothes';

const urlsToCache = [
    './'
    // './favicon.ico',
    // './index.html',
    // './sw.js',
    // './static/js/2.c2695c00.chunk.js',
    // './static/js/2.c2695c00.chunk.js.map',
    // './static/js/main.027c9cc8.chunk.js',
    // './static/js/main.027c9cc8.chunk.js.map',
    // './static/js/runtime~main.a64c2cb9.js',
    // './static/js/runtime~main.a64c2cb9.js.map',
    // './static/css/main.1c933296.chunk.css',
    // './static/css/main.1c933296.chunk.css.map',
    // './icons/',
    // './icons/icon-72x72.png',
    // './icons/icon-96x96.png',
    // './icons/icon-128x128.png',
    // './icons/icon-144x144.png',
    // './icons/icon-152x152.png',
    // './icons/icon-192x192.png',
    // './icons/icon-384x384.png',
    // './icons/icon-512x512.png',
    // './images/',
    // './images/calendario.png',
    // './images/lapis.png',
    // './images/vestido.png',
    // './images/seta_curva.svg'
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
