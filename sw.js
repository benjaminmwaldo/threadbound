/**
 * Minimal offline/PWA service worker — no Workbox/build-time precache
 * manifest, just runtime caching, so it doesn't need to know Vite's hashed
 * asset filenames. Strategy: network-first for navigations (falls back to
 * the cached app shell when offline — the SPA's client-side router then
 * takes over from index.html, same trick GH Pages' 404.html redirect uses
 * for online deep-links), stale-while-revalidate for everything else
 * (serve the cached copy instantly, refresh it in the background).
 * Registered from main.jsx only in production builds.
 */
const CACHE = 'threadbound-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.add('.').catch(() => {})));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // leave Firebase/font/CDN requests alone

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          caches.open(CACHE).then((c) => c.put(req, res.clone()));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match(new URL('.', self.location).href)))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res.ok) caches.open(CACHE).then((c) => c.put(req, res.clone()));
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
