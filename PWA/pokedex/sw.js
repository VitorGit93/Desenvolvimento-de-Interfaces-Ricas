const urlsToCache = ["/", "/css/styles.css"];
self.addEventListener("install", event => {
   event.waitUntil(
      caches.open("pokedex-assets")
      .then(cache => {
         return cache.addAll(urlsToCache);
      })
   )
})

self.addEventListener("fetch", (event) => {
  console.log(`URL requested: ${event.request.url}`);
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // It can update the cache to serve updated content on the next request
      return cachedResponse || fetch(event.request);
    })
  );
});