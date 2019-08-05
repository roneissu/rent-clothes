export function register(){
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('/rent-clothes/sw.js')
            .then(function (registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(function (err) {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
}
