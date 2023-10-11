if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
            console.error('Service Worker registration failed:', error);
        });
}

navigator.serviceWorker.addEventListener('controllerchange', function() {
    console.log('Service Worker is now controlling the page.');
    window.location.reload();
});

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log('Fetched data:', data))
    .catch(error => console.error('Fetch error:', error));
