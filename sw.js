const cacheName = 'calculadora-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/icon-192.png',
  '/icon-512.png'
];

// Instalación del service worker y caché de archivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
});

// Intercepta las solicitudes de red y usa la caché si está disponible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});