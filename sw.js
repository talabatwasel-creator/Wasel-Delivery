const cacheName = 'wasel-cache-v1';
const filesToCache = [
  './index.html',
  './style.css',
  './atwi.jpg',
  './Mahatta.jpg',
  './Mahatta2.jpg',
  './abukhalil.jpg',
  './abukhalil2.jpg',
  './abukhalil3.jpg',
  './Talabat.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
