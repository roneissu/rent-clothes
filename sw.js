const CACHE_NAME = 'rent-clothes';

const urlsToCache = [
    './',
    './favicon.ico',
    './index.html',
    './static',
    './static/js',
    './static/js/2.c2695c00.chunk.js',
    './static/js/2.c2695c00.chunk.js.map',
    './static/js/main.281031c3.chunk.js',
    './static/js/main.281031c3.chunk.js.map',
    './static/js/runtime~main.a64c2cb9.js',
    './static/js/runtime~main.a64c2cb9.js.map',
    './static/css',
    './static/css/main.1c933296.chunk.css',
    './static/css/main.1c933296.chunk.css.map'
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
