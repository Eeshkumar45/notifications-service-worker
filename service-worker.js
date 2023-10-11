self.addEventListener("install", () => {
  console.log("install");
});

self.addEventListener("active", () => {
  console.log("active");
});

self.addEventListener("waiting", () => {
  console.log("waiting");
});
self.addEventListener("message", (event) => {
  console.log("message on service worker : " + event.data);
});

self.addEventListener("sync", (event) => {
  if (event.tag === "my-tag-name") {
    event.waitUntil(
        setInterval(()=>sendNotification(),5000)
    );
  }
});

var notificationCount=0;

function sendNotification(){
    notificationCount++;
    const notificationOptions = {
        body: 'This is a notification from your service worker.',
        icon: 'path-to-your-icon.png',
      };

    self.registration.showNotification(
        "Notification from Service Worker : "+notificationCount,
        notificationOptions
      )
}