/* Portal + site service worker — portal upgrade system 8 (2026-11-01),
   extended with the site PWA (APP stage 1, 2026-11-02).
   Registered at root scope. There can only be ONE service worker at
   root scope, so the site-wide PWA MERGED into this worker (December
   checklist item) instead of registering a second one.
   PORTAL branch (unchanged behaviour): the fetch handler ONLY touches
   the portal document itself, the portal PWA assets, and the
   advisor-api admin GET endpoints the portal calls — network-first,
   successful responses cached with an x-pu-cached-at stamp; when the
   network fails, the cached copy is served and the portal shows its
   "offline — showing saved data from HH:MM" chip.
   SITE branch (public pages): same-origin GETs only. Static assets
   (css/js/images/fonts/manifest) are cache-first; HTML pages are
   network-first with a cache fallback. Cross-origin requests — every
   advisor-api response included — are NEVER intercepted or cached,
   and /api/ paths are never cached.
   Pack APP (APP-01 H1): cache-first is safe for the JS bundles because
   the build content-hashes their URLs (bundle-*.js?v=<md5-8>) — a
   changed bundle is a changed URL. Unversioned images/fonts can still
   go stale inside a cache version, so SITE_CACHE must be bumped in
   any deploy that changes an unversioned asset's bytes.
   Pack PL2e (2026-11-07): the ?v= stamps turned out stale for all 13
   bundles (later splices changed bytes without restamping), so the
   versioning moved INTO the filenames: stamp-assets.mjs emits every
   SW-cached asset as <name>.<sha256-8>.<ext> in the staged deploy
   tree (app/web-staged/) and rewrites every reference. SITE_CACHE is
   no longer hand-bumped — the stamper DERIVES it from the staged
   cached set's content hashes and writes it into the staged copy of
   this file. The literal below is only the pre-stamp placeholder. */
var PU_CACHE = 'portal-v10'; // bumped 2026-11-11 (Pack PNA-Fix): session-verified boot, Spanish client documents, listing viewings warnings; v9 retired on activate by the portal-* sweep below // bumped 2026-11-11 (Pack Tutor2): ship the Academy-tab Tutor card portal document fresh on first open; v8 retired on activate by the portal-* sweep below // bumped 2026-11-11 (B2KeyId, B2 pack §15): ship the B2-card keyId-field portal document fresh on first open; v7 retired on activate by the portal-* sweep below // bumped 2026-11-10 (PortalDeepScan): ship the §5-D push-retry-cap portal document fresh on first open; v6 retired on activate by the portal-* sweep below // bumped 2026-11-10 (Pack StripeReplace, Stripe pack §20): purge the portal-v5 shell cache — it can still hold the pre-flip portal document (Academy tab pointed at the site worker, whose poisoned cfg:stripe record hid the Stripe paste form behind Configured ticks); v6 starts empty, so the first open network-fetches the current document. Earlier: v5 purged the pre-Stripe portal-v4 shell (Pack StripePage SW fix — Pack Speed F2 stale-while-revalidate kept serving it after the StripePage deploy)
var SITE_CACHE = 'site-18661041924b'; // PRE-STAMP PLACEHOLDER (Pack PL2e): stamp-assets.mjs replaces this value in the staged deploy copy with the content-derived cache name ('site-' + set hash); the manual bump discipline is retired. History of the hand-bumped values: v8: Pack PL2d — I18N9b merge-loop fix changed bundle-shared.js bytes. v7: Pack PL — hb_call overlay changed bundle-shared.js bytes; first bump under the verify-tree --check-sw rule. v6: Pack APP2 static-put waitUntil
var PORTAL_PATH = '/portal-9f3k7x2q.html';

self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil((async function () {
    try {
      var keys = await caches.keys();
      await Promise.all(keys.map(function (k) {
        if (k.indexOf('site-') === 0 && k !== SITE_CACHE) return caches.delete(k);
        if (k.indexOf('portal-') === 0 && k !== PU_CACHE) return caches.delete(k); // 2026-11-10: retire stale portal shell caches on activate (portal-v4 held the pre-Stripe document)
      }));
    } catch (err) {}
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', function (e) {
  var url;
  try { url = new URL(e.request.url); } catch (err) { return; }
  if (e.request.method !== 'GET') return; // network default
  var isPortalDoc = url.pathname === PORTAL_PATH;
  var isAsset = url.pathname === '/portal-manifest.8cddc16b.webmanifest' || url.pathname.indexOf('/portal-icon-') === 0;
  var isAdminGet = url.pathname.indexOf('/api/admin/') === 0;
  if (isPortalDoc) {
    // Pack Speed F2 (2026-11-10): stale-while-revalidate for the portal
    // document — a cached shell renders instantly on repeat opens and the
    // network copy lands in the cache for the NEXT open; with no cache
    // entry, fall back to the network-first behaviour below. Admin GETs
    // keep network-first (next branch).
    e.respondWith((async function () {
      var pcache = await caches.open(PU_CACHE);
      var pHit = await pcache.match(e.request);
      if (pHit) {
        e.waitUntil((async function () {
          try {
            var nres = await fetch(e.request);
            if (nres && nres.ok) {
              var nh = new Headers(nres.headers);
              nh.set('x-pu-cached-at', String(Date.now()));
              var nstamped = new Response(await nres.blob(), { status: nres.status, statusText: nres.statusText, headers: nh });
              await pcache.put(e.request, nstamped);
            }
          } catch (err) {}
        })());
        return pHit;
      }
      try {
        var res = await fetch(e.request);
        if (res && res.ok) {
          try {
            var h = new Headers(res.headers);
            h.set('x-pu-cached-at', String(Date.now()));
            var stamped = new Response(await res.clone().blob(), { status: res.status, statusText: res.statusText, headers: h });
            await pcache.put(e.request, stamped);
          } catch (err) {}
        }
        return res;
      } catch (err) {
        var hit2 = await pcache.match(e.request);
        if (hit2) return hit2;
        throw err;
      }
    })());
    return;
  }
  if (isAsset || isAdminGet) {
    e.respondWith((async function () {
      try {
        var res = await fetch(e.request);
        if (res && res.ok && isAdminGet) {
          try {
            var cache = await caches.open(PU_CACHE);
            var h = new Headers(res.headers);
            h.set('x-pu-cached-at', String(Date.now()));
            var stamped = new Response(await res.clone().blob(), { status: res.status, statusText: res.statusText, headers: h });
            await cache.put(e.request, stamped);
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
    return;
  }
  // ---- site branch (public pages) ----
  if (url.origin !== self.location.origin) return; // cross-origin (advisor APIs, Turnstile): never intercepted
  if (url.pathname.indexOf('/api/') === 0) return; // API responses are never cached
  if (url.pathname.indexOf('/cdn-cgi/') === 0) return; // Pack APP (APP-01 low): platform plumbing (challenges, email-decode) is never cached
  var isStatic = /\.(?:css|js|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|webmanifest)$/i.test(url.pathname);
  var isPage = e.request.mode === 'navigate' || url.pathname === '/' || /\.html$/i.test(url.pathname);
  if (isStatic) {
    e.respondWith((async function () {
      var scache = await caches.open(SITE_CACHE);
      var sHit = await scache.match(e.request);
      if (sHit) return sHit;
      var sres = await fetch(e.request);
      if (sres && sres.ok) {
        // Pack APP2 (APP-01 low): the static branch's cache write no
        // longer delays the response — waitUntil keeps the worker
        // alive until the put lands, the same completion guarantee
        // the awaited put gave. The portal, install and page-branch
        // puts stay awaited: correctness paths, not first-load
        // latency paths.
        try { e.waitUntil(scache.put(e.request, sres.clone()).catch(function () {})); } catch (err) {}
      }
      return sres;
    })());
    return;
  }
  if (isPage) {
    e.respondWith((async function () {
      var pcache = await caches.open(SITE_CACHE);
      try {
        var pres = await fetch(e.request);
        if (pres && pres.ok) { try { await pcache.put(e.request, pres.clone()); } catch (err) {} }
        return pres;
      } catch (err) {
        var phit = await pcache.match(e.request);
        if (phit) return phit;
        // Pack APP (APP-01 H1): the home-page fallback answers a failed
        // NAVIGATION only — a failed subresource .html fetch must fail
        // as itself, never silently return the home page's markup.
        if (e.request.mode === 'navigate') {
          var home = await pcache.match('/');
          if (home) return home;
        }
        throw err;
      }
    })());
    return;
  }
});

self.addEventListener('push', function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) {}
  e.waitUntil(self.registration.showNotification(d.title || 'Site Admin', {
    body: d.body || '',
    icon: '/portal-icon-192.39a8f34b.png',
    badge: '/portal-icon-192.39a8f34b.png',
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
