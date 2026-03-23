// Service Worker minimal para PWA sin cacheo
// El evento 'fetch' es necesario para que el navegador considere la web como instalable,
// pero simplemente dejamos que la petición siga su curso normal a la red.

self.addEventListener("install", event => {
    // Forzamos al SW a activarse inmediatamente
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    // Limpiamos cualquier caché antiguo que pudiera existir de versiones anteriores
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener("fetch", event => {
    // No hacemos nada, dejamos que el navegador maneje la petición normalmente (Network Only)
    // Esto cumple el requisito de tener un fetch handler para ser PWA sin cachear nada.
    return;
});