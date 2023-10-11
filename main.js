str = "";

addEventListener("load", (event) => {Notification.requestPermission()});
async function sendMessage() {
    const registration = await navigator.serviceWorker.ready;
    await registration.sync.register('my-tag-name');
}

function register(){
    navigator.serviceWorker.register('./service-worker.js')
    .then(reg => console.log('SW registered!', reg))
    .catch(err => console.log('Boo!', err));
}

function stop(){
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) {
            registration.unregister();
        } 
    });
}

