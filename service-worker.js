const CACHE_NAME = 'sun-ground-shell-v29';
const APP_FILES = [
  './', './index.html', './styles.css', './styles-game.css', './styles-game.css?v=20261101-14', './app.js', './app.js?v=20261101-9', './manifest.webmanifest',
  './sg-app-icon.svg', './sg-app-icon-192.svg', './exotic-automatic-cover.jpg',
  './assets/pixel-desert-panorama.png', './assets/sun-ground-sprite-sheet.png', './assets/pixel-game-sprites.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith('sun-ground-shell-') && key !== CACHE_NAME).map(key => caches.delete(key))
  )));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  const url = new URL(request.url);
  const updateOften = request.mode === 'navigate' || /\/(?:index\.html|app\.js|styles\.css)$/.test(url.pathname);
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    const store = response => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    };
    if (updateOften) {
      try { return store(await fetch(request)); }
      catch { return cached || Response.error(); }
    }
    return cached || store(await fetch(request));
  })());
});








