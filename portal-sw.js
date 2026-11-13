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
var PU_CACHE = 'portal-v25'; // bumped 2026-11-13 (Pack SystemListingMedia, rebased onto the SystemPastClients portal generation): the Listings workspace gains the per-listing Campaign builder (asset pack drafts + tour-video script/credit estimate) and the site gains the 110 cinematic presentation pages + the R2991004 tour video; warm shells must retire on activate // bumped 2026-11-13 (SystemPastClients, rebased onto the TelephonyStronger portal generation): the Others menu gains the Past clients page (Past-Client Club view + add form) reading GET /api/admin/past-clients, so warm shells must retire on activate // bumped 2026-11-12 (TelephonyStronger, rebased onto the Preciser generation): the Calls workspace gains the guardian warning banner, screened-call chips and per-message delivery states // bumped 2026-11-12 (PortalWhatsApp): the Calls workspace gains WhatsApp threads (list + thread view + AI draft box + template picker) under the 24h-window law — built on top of PortalCallsConfig (v20, already in this base); if another pack lands in between, re-stamp to max(existing)+1 at apply time // bumped 2026-11-12 (PortalCallsConfig): the Calls workspace gains the Calls setup (Twilio) provision card for cfg:calls — portal-only delta; the card saves/clears through POST /api/admin/config {key:'calls'} and reads status only from the {configured} existence probe, so warm shells must retire on activate // bumped 2026-11-12 (Pack CallTagOutcome): the push handler forwards the pop's outcome actions (clamped to Notification.maxActions) and action clicks POST {subId, callId, outcome} to /api/calls/outcome; the two handler edits were spliced onto the LIVE SW per APPLY.md (never the v15 candidate file) // bumped 2026-11-12 (PortalAddLead): the Leads page gains the manual Add lead card (form + duplicate-profile offer) wired to POST /api/admin/leads // bumped 2026-11-12 (B2Probe): the B2 card gains a Test read button wired to GET /api/admin/academy/b2-status?probe=1 — one real signed read with the stored key, its verdict (upstream status + S3 error code/message) rendered inline in the card // bumped 2026-11-12 (B2ClearInlineConfirm): the B2 Replace button uses an inline two-step arm instead of a native confirm() dialog (the automated browser auto-dismisses native dialogs, which silently blocked the clear) // bumped 2026-11-12 (ModelSwap+B2Clear): Academy Tutor card provisions the live provider models (Groq openai/gpt-oss-120b, Gemini gemini-3.5-flash — the retired llama-3.3-70b-versatile / gemini-2.0-flash are gone) and the B2 card gains a Replace stored key button wired to POST /api/admin/academy/b2-clear // bumped 2026-11-12 (InviteLinkShow): the Academy Copy-invite-link action also renders the invite link in an on-page box (acInviteLinkBox) so the link is visible/copyable without clipboard access // bumped 2026-11-12 (Pack AcademyStampFull + AcademyStudentsListFix deploy): portal document gains the student Name field (add-student form + list) for name-aware booklet watermarking; v12 retired on activate by the portal-* sweep below // bumped 2026-11-11 (Pack AcademyFixC): Academy tab — debounced list-only search with a sequence guard, full-coverage Expiring filter (14-day window aligned with the overview count), worker-aligned extend base, resend-invite wired to mail status; v10 retired on activate by the portal-* sweep below // bumped 2026-11-11 (Pack PNA-Fix): session-verified boot, Spanish client documents, listing viewings warnings; v9 retired on activate by the portal-* sweep below // bumped 2026-11-11 (Pack Tutor2): ship the Academy-tab Tutor card portal document fresh on first open; v8 retired on activate by the portal-* sweep below // bumped 2026-11-11 (B2KeyId, B2 pack §15): ship the B2-card keyId-field portal document fresh on first open; v7 retired on activate by the portal-* sweep below // bumped 2026-11-10 (PortalDeepScan): ship the §5-D push-retry-cap portal document fresh on first open; v6 retired on activate by the portal-* sweep below // bumped 2026-11-10 (Pack StripeReplace, Stripe pack §20): purge the portal-v5 shell cache — it can still hold the pre-flip portal document (Academy tab pointed at the site worker, whose poisoned cfg:stripe record hid the Stripe paste form behind Configured ticks); v6 starts empty, so the first open network-fetches the current document. Earlier: v5 purged the pre-Stripe portal-v4 shell (Pack StripePage SW fix — Pack Speed F2 stale-while-revalidate kept serving it after the StripePage deploy)
var SITE_CACHE = 'site-669939eace1f'; // PRE-STAMP PLACEHOLDER (Pack PL2e): stamp-assets.mjs replaces this value in the staged deploy copy with the content-derived cache name ('site-' + set hash); the manual bump discipline is retired. History of the hand-bumped values: v8: Pack PL2d — I18N9b merge-loop fix changed bundle-shared.js bytes. v7: Pack PL — hb_call overlay changed bundle-shared.js bytes; first bump under the verify-tree --check-sw rule. v6: Pack APP2 static-put waitUntil
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
  var opts = {
    body: d.body || '',
    icon: '/portal-icon-192.39a8f34b.png',
    badge: '/portal-icon-192.39a8f34b.png',
    data: { url: d.url || PORTAL_PATH, callId: (d.data && d.data.callId) || '' }
  };
  // Pack CallTagOutcome ADD-2 (2026-11-12): forward the
  // payload's one-tap outcome actions where the platform
  // supports them. Chrome caps the VISIBLE actions at
  // Notification.maxActions (2 on desktop today); the payload
  // carries all three and the UA shows the first maxActions.
  // iOS web push exposes NO actions at all — the plain pop and
  // its portal deep link are the iPhone path.
  try {
    if (Array.isArray(d.actions) && d.actions.length) {
      var maxA = 2;
      try { if (self.Notification && Notification.maxActions > 0) maxA = Notification.maxActions; } catch (err) {}
      var acts = d.actions.slice(0, maxA).map(function (a) { return { action: String((a && a.action) || ''), title: String((a && (a.title || a.action)) || '') }; }).filter(function (a) { return !!a.action; });
      if (acts.length) opts.actions = acts;
    }
  } catch (err) {}
  e.waitUntil(self.registration.showNotification(d.title || 'Site Admin', opts));
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var data = e.notification.data || {};
  var target = data.url || PORTAL_PATH;
  // Pack CallTagOutcome ADD-2 (2026-11-12): an outcome ACTION
  // click files the outcome with the worker and does NOT open
  // the portal. The POST is authenticated by this device's own
  // push-subscription identity — subId = sha256(endpoint)[..24],
  // the same derivation the worker's subscribe route mints —
  // and the worker fails closed on anything else.
  if (e.action && data.callId) {
    e.waitUntil((async function () {
      try {
        var sub = await self.registration.pushManager.getSubscription();
        if (!sub || !sub.endpoint) return;
        var digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(sub.endpoint));
        var subId = Array.from(new Uint8Array(digest)).map(function (x) { return x.toString(16).padStart(2, '0'); }).join('').slice(0, 24);
        await fetch('https://advisor-api.erfanbillion.workers.dev/api/calls/outcome', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ subId: subId, callId: data.callId, outcome: e.action })
        });
      } catch (err) {}
    })());
    return;
  }
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].url.indexOf('portal-') !== -1) { list[i].focus(); if ('navigate' in list[i]) list[i].navigate(target); return; }
    }
    return self.clients.openWindow(target);
  }));
});
