self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/pwa-test/',
       '/pwa-test/index.html',
       '/pwa-test/index.js',
       '/pwa-test/style.css',
       '/pwa-test/images/fox1.jpg',
       '/pwa-test/images/fox2.jpg',
       '/pwa-test/images/fox3.jpg',
       '/pwa-test/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
