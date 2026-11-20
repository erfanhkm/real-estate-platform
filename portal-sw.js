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
   network-first with a cache fallback. Cross-origin requests are NEVER intercepted or cached.
   Same-origin /api/admin/ GETs ARE handled — by the PORTAL branch
   above (network-first, cached copy on network failure, stamped
   x-pu-cached-at); all other /api/ paths are never cached.
   (Fix SB-3, F-111: the previous wording claimed every advisor-api
   response was never intercepted, contradicting the isAdminGet
   branch below; the code was right, the comment was wrong.)
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
   this file. The literal below is only the pre-stamp placeholder.
   Fix SB-0 (F-041): PORTAL_PATH is no longer a literal in this
   public file — as shipped it published the portal's unlisted
   filename to every visitor. The portal document now teaches the
   worker its path at runtime (an "eh-portal-path" message on every
   portal load); the worker keeps it in memory and in a small
   "sw-meta-v1" cache so it survives restarts. Until the path is
   learned, portal-document handling is skipped and requests take
   the site branch — the only cost is the portal shell's
   stale-while-revalidate on a first-ever load. Push defaults and
   notification clicks resolve the learned path asynchronously
   before falling back. */
var PU_CACHE = 'portal-v38'; // bumped 2026-11-20 (Pack PORTAL-BRAINDOOR): the Protection page gains the Brain door provisioning card — per-consumer Brain door secrets are minted worker-side and shown exactly once in place (POST /api/admin/eb/braindoor/provision; status from GET /api/admin/eb/braindoor/status, booleans + mint timestamps only) — warm shells must retire on activate // bumped 2026-11-19 (Pack PORTAL-PROBE-BUTTON): the Protection page gains the Brain leg probe card — one tap forces each of the four Executive Brain legs via POST /api/admin/eb/probe-legs and renders the per-leg verdicts in place — warm shells must retire on activate // bumped 2026-11-15 (Pack EB-8 IT Support): the portal gains the IT Support page (owner-only EB-8 chat, security officer view, golden state, drills, graduated autonomy) — warm shells must retire on activate // bumped 2026-11-14 (Pack TelephonyClick2Call, rebase): the CRM person panel gains the click-to-call Call button — the worker rings the owner's cell first and bridges to the client only after he answers; warm shells must retire on activate // bumped 2026-11-14 (Pack TelephonyVoicemail, Smarter-first rebase QC §6e): the Calls workspace renders voicemail rows with the 📩 badge and the language-tagged collapsible panel fed by the on-demand call detail; warm shells must retire on activate // bumped 2026-11-14 (UsageAlertNative): Maintenance usage box gains the automatic-watchdog status line (native hourly :07 watchdog replaces the external Muse usage check); warm shells must retire on activate // bumped 2026-11-13 (System A Lead Engine, rebased onto the PortalAcademyTilesInviteFix portal generation): the Leads page gains the Lead Sources card (counts by stored source, lead-magnet captures broken out by magnet tag) and PU_SOURCES gains 'leadmagnet'; the worker adds /api/market/report-request + /api/privacy/delete-valuation and the site gains the 90 city market pages + the city-market bundle; warm shells must retire on activate // bumped 2026-11-13 (PortalAcademyTilesInviteFix): rebased onto the TelephonySmarter portal generation - the Academy tab count tiles and the Copy invite link are fixed (worker: academyAuditScan per-get guard + match limits 10/25, academy-scope bridge-first authed(); portal: invite timeoutMs 30000, gold invite box also on clipboard rejection); warm shells must retire on activate // bumped 2026-11-13 (TelephonySmarter): rebased onto the PortalUsageLeads portal generation — the Calls workspace gains call transcription + AI summary (site-pool Whisper via the ai-chat brain-audio leg, gated on the owner's Transcribe tick in cfg:calls), the collapsible Summary & transcript section (one-line previews only; full text fetched on expand), missed-call recovery tasks with owner-approval drafts (never auto-sent) and deterministic callback-time extraction; warm shells must retire on activate // bumped 2026-11-13 (PortalUsageLeads, rebased onto the SystemDealsCMA portal generation): Maintenance gains the two split usage sections (site + Academy) and the Pipeline gains temperature chips with clickable Today counts; warm shells must retire on activate // bumped 2026-11-13 (Pack SystemDealsCMA, rebased onto the SystemListingMedia portal generation): the portal gains the Deals workspace (deals board + Today deadline strip) and the CMA builder; warm shells must retire on activate // bumped 2026-11-13 (Pack SystemListingMedia, rebased onto the SystemPastClients portal generation): the Listings workspace gains the per-listing Campaign builder (asset pack drafts + tour-video script/credit estimate) and the site gains the 110 cinematic presentation pages + the R2991004 tour video; warm shells must retire on activate // bumped 2026-11-13 (SystemPastClients, rebased onto the TelephonyStronger portal generation): the Others menu gains the Past clients page (Past-Client Club view + add form) reading GET /api/admin/past-clients, so warm shells must retire on activate // bumped 2026-11-12 (TelephonyStronger, rebased onto the Preciser generation): the Calls workspace gains the guardian warning banner, screened-call chips and per-message delivery states // bumped 2026-11-12 (PortalWhatsApp): the Calls workspace gains WhatsApp threads (list + thread view + AI draft box + template picker) under the 24h-window law — built on top of PortalCallsConfig (v20, already in this base); if another pack lands in between, re-stamp to max(existing)+1 at apply time // bumped 2026-11-12 (PortalCallsConfig): the Calls workspace gains the Calls setup (Twilio) provision card for cfg:calls — portal-only delta; the card saves/clears through POST /api/admin/config {key:'calls'} and reads status only from the {configured} existence probe, so warm shells must retire on activate // bumped 2026-11-12 (Pack CallTagOutcome): the push handler forwards the pop's outcome actions (clamped to Notification.maxActions) and action clicks POST {subId, callId, outcome} to /api/calls/outcome; the two handler edits were spliced onto the LIVE SW per APPLY.md (never the v15 candidate file) // bumped 2026-11-12 (PortalAddLead): the Leads page gains the manual Add lead card (form + duplicate-profile offer) wired to POST /api/admin/leads // bumped 2026-11-12 (B2Probe): the B2 card gains a Test read button wired to GET /api/admin/academy/b2-status?probe=1 — one real signed read with the stored key, its verdict (upstream status + S3 error code/message) rendered inline in the card // bumped 2026-11-12 (B2ClearInlineConfirm): the B2 Replace button uses an inline two-step arm instead of a native confirm() dialog (the automated browser auto-dismisses native dialogs, which silently blocked the clear) // bumped 2026-11-12 (ModelSwap+B2Clear): Academy Tutor card provisions the live provider models (Groq openai/gpt-oss-120b, Gemini gemini-3.5-flash — the retired llama-3.3-70b-versatile / gemini-2.0-flash are gone) and the B2 card gains a Replace stored key button wired to POST /api/admin/academy/b2-clear // bumped 2026-11-12 (InviteLinkShow): the Academy Copy-invite-link action also renders the invite link in an on-page box (acInviteLinkBox) so the link is visible/copyable without clipboard access // bumped 2026-11-12 (Pack AcademyStampFull + AcademyStudentsListFix deploy): portal document gains the student Name field (add-student form + list) for name-aware booklet watermarking; v12 retired on activate by the portal-* sweep below // bumped 2026-11-11 (Pack AcademyFixC): Academy tab — debounced list-only search with a sequence guard, full-coverage Expiring filter (14-day window aligned with the overview count), worker-aligned extend base, resend-invite wired to mail status; v10 retired on activate by the portal-* sweep below // bumped 2026-11-11 (Pack PNA-Fix): session-verified boot, Spanish client documents, listing viewings warnings; v9 retired on activate by the portal-* sweep below // bumped 2026-11-11 (Pack Tutor2): ship the Academy-tab Tutor card portal document fresh on first open; v8 retired on activate by the portal-* sweep below // bumped 2026-11-11 (B2KeyId, B2 pack §15): ship the B2-card keyId-field portal document fresh on first open; v7 retired on activate by the portal-* sweep below // bumped 2026-11-10 (PortalDeepScan): ship the §5-D push-retry-cap portal document fresh on first open; v6 retired on activate by the portal-* sweep below // bumped 2026-11-10 (Pack StripeReplace, Stripe pack §20): purge the portal-v5 shell cache — it can still hold the pre-flip portal document (Academy tab pointed at the site worker, whose poisoned cfg:stripe record hid the Stripe paste form behind Configured ticks); v6 starts empty, so the first open network-fetches the current document. Earlier: v5 purged the pre-Stripe portal-v4 shell (Pack StripePage SW fix — Pack Speed F2 stale-while-revalidate kept serving it after the StripePage deploy)
var SITE_CACHE = 'site-7c5abd062f71'; // PRE-STAMP PLACEHOLDER (Pack PL2e): stamp-assets.mjs replaces this value in the staged deploy copy with the content-derived cache name ('site-' + set hash); the manual bump discipline is retired. History of the hand-bumped values: v8: Pack PL2d — I18N9b merge-loop fix changed bundle-shared.js bytes. v7: Pack PL — hb_call overlay changed bundle-shared.js bytes; first bump under the verify-tree --check-sw rule. v6: Pack APP2 static-put waitUntil
var PORTAL_PATH = ''; // Fix SB-0 (F-041): learned at runtime from the portal document — never a literal in this public file (see the header note)
var PORTAL_META_CACHE = 'sw-meta-v1';
async function learnPortalPath(p) {
  if (!p || p.charAt(0) !== '/') return;
  PORTAL_PATH = p;
  try { var c = await caches.open(PORTAL_META_CACHE); await c.put('/__portal_path', new Response(p, { headers: { 'Content-Type': 'text/plain' } })); } catch (err) {}
}
async function portalPath() {
  if (PORTAL_PATH) return PORTAL_PATH;
  try { var c = await caches.open(PORTAL_META_CACHE); var r = await c.match('/__portal_path'); if (r) PORTAL_PATH = await r.text(); } catch (err) {}
  return PORTAL_PATH;
}
self.addEventListener('message', function (e) {
  var d = e.data || {};
  if (d.type === 'eh-portal-path') { try { e.waitUntil(learnPortalPath(String(d.path || ''))); } catch (err) {} }
});

self.addEventListener('install', function (e) { self.skipWaiting(); });
var SITE_MAX_ENTRIES = 400;
async function trimSiteCache(cache) { try { var ks = await cache.keys(); if (ks.length > SITE_MAX_ENTRIES) { for (var i = 0; i < ks.length - SITE_MAX_ENTRIES; i++) await cache.delete(ks[i]); } } catch (err) {} }
self.addEventListener('activate', function (e) {
  e.waitUntil((async function () {
    try { if (self.registration.navigationPreload) await self.registration.navigationPreload.enable(); } catch (err) {}
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
  if (!PORTAL_PATH) { try { portalPath(); } catch (err) {} } // Fix SB-0: warm the learned portal path
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
    var hashed = /\.[a-f0-9]{8}\.[^.]+$/i.test(url.pathname);
    e.respondWith((async function () {
      var scache = await caches.open(SITE_CACHE);
      var sHit = await scache.match(e.request);
      if (hashed) {
        if (sHit) return sHit;
        var sres = await fetch(e.request);
        if (sres && sres.ok) { try { e.waitUntil(scache.put(e.request, sres.clone()).then(function () { return trimSiteCache(scache); }).catch(function () {})); } catch (err) {} }
        return sres;
      }
      // unhashed static: stale-while-revalidate (never silently stale)
      var fres = fetch(e.request).then(async function (r) { if (r && r.ok) { try { await scache.put(e.request, r.clone()); await trimSiteCache(scache); } catch (err) {} } return r; }).catch(function () { return null; });
      if (sHit) { e.waitUntil(fres); return sHit; }
      var nr = await fres;
      if (nr) return nr;
      throw new Error('offline and uncached: ' + url.pathname);
    })());
    return;
  }
  if (isPage) {
    e.respondWith((async function () {
      var pcache = await caches.open(SITE_CACHE);
      try {
        var pres = null;
        try { if (e.preloadResponse) pres = await e.preloadResponse; } catch (err) {}
        if (!pres) pres = await fetch(e.request);
        if (pres && pres.ok) { try { await pcache.put(e.request, pres.clone()); await trimSiteCache(pcache); } catch (err) {} } // Fix-pass D2: trim on the page path too — pre-fix only the static branch trimmed, so navigation puts could grow SITE_CACHE past the bound unbounded
        return pres;
      } catch (err) {
        var phit = await pcache.match(e.request);
        if (phit) return phit;
        // Pack APP (APP-01 H1): the home-page fallback answers a failed
        // NAVIGATION only — a failed subresource .html fetch must fail
        // as itself, never silently return the home page's markup.
        // Fix SB-3 (F-111): the fallback is language-aware — a /fa-…
        // navigation falls back to the cached FA home page, not the
        // English '/' (the old code served English to every language).
        if (e.request.mode === 'navigate') {
          var lm = /^\/(fa|hi|zh|es)-/.exec(url.pathname);
          if (lm) { var lh = await pcache.match('/' + lm[1] + '-index.html'); if (lh) return lh; }
          var home = await pcache.match('/');
          if (home) return home;
          var ih = await pcache.match('/index.html');
          if (ih) return ih;
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
  e.waitUntil((async function () {
    if (!d.url && !PORTAL_PATH) { try { opts.data.url = (await portalPath()) || '/'; } catch (err) { opts.data.url = '/'; } }
    await self.registration.showNotification(d.title || 'Site Admin', opts);
  })());
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
  e.waitUntil((async function () { if (!target) { try { target = (await portalPath()) || '/'; } catch (err) { target = '/'; } } return self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].url.indexOf('portal-') !== -1) { list[i].focus(); if ('navigate' in list[i]) list[i].navigate(target); return; }
    }
    return self.clients.openWindow(target);
  }); })());
});

/* Fix Pack SB-3 (F-066/F-111/F-112) — site-branch hardening:
 * - navigationPreload enabled on activate (preloadResponse used by
 *   the page branch).
 * - Cache-first ONLY for content-hashed URLs (basename carries
 *   .<8 hex>.): SITE_CACHE is derived at stamp time from the sha256
 *   of every content-hashed asset in the deploy tree, so the cache
 *   name changes iff any cache-firsted byte changes — closing the
 *   frozen-name staleness class (SB-1+SB-2 changed bundle bytes
 *   under frozen names while the old derivation was never re-run).
 * - Unhashed statics (photos/, fonts.css, vendor/) are
 *   stale-while-revalidate, never cache-first: they cannot go
 *   silently stale.
 * - SITE cache is bounded (SITE_MAX_ENTRIES, oldest-first trim after
 *   puts on BOTH the static and page branches — fix-pass D2).
 * - Offline navigation fallback is language-aware: /fa-… pages fall
 *   back to /fa-index.html, etc.; only EN falls back to '/'.
 * - Activate deletes every site-* cache != SITE_CACHE (including
 *   the previously-live 'site-1c6d3d221450') and portal-* != PU_CACHE. */
