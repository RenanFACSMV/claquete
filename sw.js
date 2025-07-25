const CACHE_NAME = 'claquete-digital-v1';
const urlsToCache = [
  '/claquete/',
  '/claquete/index.html',
  '/claquete/manifest.json',
  '/claquete/logo.svg'
];

// Install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      }
    )
  );
});
