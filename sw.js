self.addEventListener("install", e => {
    e.waitUntil(caches.open("my-cache").then(function(cache) {
        return cache.addAll(["./index.html","index.js"]);
    })
    );
});

this.addEventListener("activate", function(event) {
    console.log('Service Worker activate');
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            if(response) {
                return response;
            }
            console.log("fetch source");
        })
    );
});