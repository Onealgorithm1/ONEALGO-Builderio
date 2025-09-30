// OneAlgorithm Service Worker - safer network-first strategy
// Bump cache name to force clients to fetch new assets on update
const CACHE_NAME = "onealgorithm-v4";
const STATIC_CACHE_URLS = ["/", "/index.html"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_CACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

// Utility: is same-origin
function isSameOrigin(url) {
  try {
    return new URL(url).origin === location.origin;
  } catch (e) {
    return false;
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== "GET") return;

  // Let cross-origin requests go to network (avoid opaque/no-cors issues)
  if (!isSameOrigin(request.url)) return;

  // Navigation (HTML pages) - network-first, fallback to cached index.html
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Optionally update the cached index.html for offline fallback
          if (response && response.status === 200) {
            const clone = response.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put("/index.html", clone));
          }
          return response;
        })
        .catch(() => caches.match("/index.html")),
    );
    return;
  }

  // For scripts, styles, images, fonts and common asset extensions use network-first then cache fallback
  const pathname = new URL(request.url).pathname;
  const assetExtRegex =
    /\.(js|mjs|css|png|jpg|jpeg|webp|svg|gif|woff2?|woff|ttf|map)$/i;
  if (
    assetExtRegex.test(pathname) ||
    ["script", "style", "image", "font"].includes(request.destination)
  ) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request)),
    );
    return;
  }

  // Default: perform a normal network fetch (do not intercept)
});

// Optional: listen for messages to trigger skipWaiting from the page
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
