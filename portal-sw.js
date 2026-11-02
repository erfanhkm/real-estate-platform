/* Portal service worker — portal upgrade system 8 (2026-11-01).
   Registered by the portal page only, at root scope, but the fetch
   handler ONLY touches: the portal document itself, the PWA assets,
   and the advisor-api admin GET endpoints the portal calls. Every
   other request falls through to the network untouched, so the public
   site is unaffected.
   IMPORTANT (December launch): the site-wide PWA must MERGE into this
   worker — one registration at root scope — never register a second
   service worker alongside it.
   Strategy: network-first. Successful portal-document and admin-GET
   responses are cached with an x-pu-cached-at stamp; when the network
   fails, the cached copy is served and the portal shows its
   "offline — showing saved data from HH:MM" chip. */
var PU_CACHE = 'portal-v1';
var PORTAL_PATH = '/portal-9f3k7x2q.html';

self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });

self.addEventListener('fetch', function (e) {
  var url;
  try { url = new URL(e.request.url); } catch (err) { return; }
  var isPortalDoc = url.pathname === PORTAL_PATH;
  var isAsset = url.pathname === '/portal-manifest.webmanifest' || url.pathname.indexOf('/portal-icon-') === 0;
  var isAdminGet = e.request.method === 'GET' && url.pathname.indexOf('/api/admin/') === 0;
  if (e.request.method !== 'GET' || (!isPortalDoc && !isAsset && !isAdminGet)) return; // network default
  e.respondWith((async function () {
    try {
      var res = await fetch(e.request);
      if (res && res.ok && (isPortalDoc || isAdminGet)) {
        try {
          var cache = await caches.open(PU_CACHE);
          var h = new Headers(res.headers);
          h.set('x-pu-cached-at', String(Date.now()));
          var stamped = new Response(await res.clone().blob(), { status: res.status, statusText: res.statusText, headers: h });
          cache.put(e.request, stamped);
        } catch (err) {}
      }
      return res;
    } catch (err) {
      var cache2 = await caches.open(PU_CACHE);
      var hit = await cache2.match(e.request);
      if (hit) return hit;
      throw err;
    }
  })());
});

self.addEventListener('push', function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) {}
  e.waitUntil(self.registration.showNotification(d.title || 'Site Admin', {
    body: d.body || '',
    icon: '/portal-icon-192.png',
    badge: '/portal-icon-192.png',
    data: { url: d.url || PORTAL_PATH }
  }));
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var target = (e.notification.data && e.notification.data.url) || PORTAL_PATH;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].url.indexOf('portal-') !== -1) { list[i].focus(); if ('navigate' in list[i]) list[i].navigate(target); return; }
    }
    return self.clients.openWindow(target);
  }));
});
