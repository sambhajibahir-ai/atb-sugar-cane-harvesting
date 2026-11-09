// Sugarcane Harvester P&L - Bulletproof Offline Service Worker
const CACHE_NAME = 'harvester-pwa-v3';

// Core assets to pre-cache immediately upon install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  './index.html',
  '/manifest.json',
  './manifest.json',
  '/icon-192.svg',
  '/icon-512.svg',
  'https://cdn.tailwindcss.com'
];

// 1. INSTALL EVENT: Pre-cache all essential offline shell files individually
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const asset of PRECACHE_ASSETS) {
        try {
          const response = await fetch(asset, { cache: 'reload' });
          if (response && (response.ok || response.type === 'opaque')) {
            await cache.put(asset, response);
          }
        } catch (err) {
          console.warn('[SW] Could not pre-cache asset:', asset, err);
        }
      }
    })
  );
});

// 2. ACTIVATE EVENT: Clear old caches & take control of all clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. FETCH EVENT: 100% Offline Resilience (Never return undefined!)
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isNavigate = event.request.mode === 'navigate' || 
                     event.request.destination === 'document' ||
                     (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html'));

  // A. NAVIGATION REQUESTS (Opening the app, refreshing, launching PWA from Home Screen)
  if (isNavigate) {
    event.respondWith(
      (async () => {
        // Step 1: Check cache first for instant offline startup
        const cached = await caches.match(event.request) ||
                       await caches.match('/index.html') ||
                       await caches.match('/') ||
                       await caches.match('./index.html');

        if (cached) {
          // In the background, fetch fresh copy from network if online
          fetch(event.request).then(async (networkResponse) => {
            if (networkResponse && networkResponse.ok) {
              const cache = await caches.open(CACHE_NAME);
              cache.put(event.request, networkResponse.clone());
              cache.put('/index.html', networkResponse.clone());
              cache.put('/', networkResponse);
            }
          }).catch(() => {/* Offline: silence network error */});

          return cached;
        }

        // Step 2: If not in cache yet, fetch from network and store in cache
        try {
          const networkResponse = await fetch(event.request);
          if (networkResponse && networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(event.request, networkResponse.clone());
            cache.put('/index.html', networkResponse.clone());
            cache.put('/', networkResponse.clone());
          }
          return networkResponse;
        } catch (netErr) {
          // Step 3: Network failed (Phone is offline) - fallback to cached index.html
          const fallback = await caches.match('/index.html') || 
                           await caches.match('/') || 
                           await caches.match('./index.html');
          if (fallback) return fallback;

          // Ultimate fallback (never let respondWith resolve to undefined!)
          return new Response(
            `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Offline</title></head><body style="background:#0f172a;color:#fff;font-family:sans-serif;padding:20px;text-align:center;"><h2>🌾 ऊस तोडणी हिशोब ॲप</h2><p>कृपया एकदा इंटरनेट चालू करून ॲप उघडा जेणेकरून ते कायमचे सेव्ह होईल.</p><button onclick="location.reload()" style="padding:10px 20px;background:#10b981;color:#fff;border:none;border-radius:8px;font-weight:bold;margin-top:15px;">पुन्हा प्रयत्न करा (Reload)</button></body></html>`,
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        }
      })()
    );
    return;
  }

  // B. STATIC ASSETS (Tailwind CDN, SVGs, Manifest, Icons)
  event.respondWith(
    (async () => {
      // 1. Try cache first
      const cached = await caches.match(event.request, { ignoreSearch: true });
      if (cached) return cached;

      // 2. Fetch from network and cache
      try {
        const networkResponse = await fetch(event.request);
        if (networkResponse && (networkResponse.ok || networkResponse.type === 'opaque')) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      } catch (err) {
        // If offline and not in cache, return a benign empty response instead of failing
        return new Response('', { status: 408, statusText: 'Offline Asset Unavailable' });
      }
    })()
  );
});
