const CACHE_NAME = 'aluguel-de-roupas';
const pub = process.env.PUBLIC_URL;

const urlsToCache = [
    pub + '/',
    '/static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/1.chunk.js',
    '/static/js/0.chunk.js',
    pub + '/favicon.ico',
    '/css/main.0df1030a.chunk.css',
    '/css/main.0df1030a.chunk.css.map',
    pub + '/icons/icon-144x144.png',
    pub + '/icons/icon-512x512.png',
    pub + '/images/calendario.png',
    pub + '/images/lapis.png',
    pub + '/images/vestido.png',
    pub + '/images/seta_curva.svg'
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
