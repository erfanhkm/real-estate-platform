/* learn-first-home.js — System BuyerEducation (2026-11-12).
 * Client logic for the public "Buying Your First Home in Canada/BC" path.
 * Progress lives ONLY in this browser (localStorage) — no account, no server.
 * All UI strings are baked into the pages by the builder (data-* attributes);
 * this file carries no copy of its own except the lead payload shape, which
 * mirrors bundle-page-contact.js exactly (same endpoint, same store), with
 * the education source tag the owner ordered: "education:first-buyer". */
(function () {
  "use strict";

  var STORE_KEY = "ehrealty.learn.fb.v1";
  var LEAD_URL = "https://advisor-api.erfanbillion.workers.dev/api/lead";
  var LEAD_SOURCE = "education:first-buyer";
  /* The stress-test floor — single-sourced from the site's own calculators
   * (bundle-page-affordability carries 5.25; the pack pin greps both). */
  var STRESS_FLOOR = 5.25;

  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      var s = raw ? JSON.parse(raw) : null;
      if (s && typeof s === "object") return { checks: s.checks || {}, done: s.done || {} };
    } catch (e) {}
    return { checks: {}, done: {} };
  }
  function save(state) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function qualifyingRate(contractRate) {
    var r = Number(contractRate);
    if (!isFinite(r) || r < 0) return null;
    return Math.max(r + 2, STRESS_FLOOR);
  }

  function buildLeadPayload(f) {
    return {
      name: f.name || "", intent: "buy", city: "", budget: "",
      email: f.email || "", phone: f.phone || "", message: f.message || "",
      source: LEAD_SOURCE, lang: f.lang || "en",
      turnstileToken: f.turnstileToken || "", hp: f.hp || ""
    };
  }

  function initChecks(state) {
    var boxes = document.querySelectorAll("input[data-edu-check]");
    boxes.forEach(function (b) {
      var id = b.getAttribute("data-edu-check");
      b.checked = !!state.checks[id];
      b.addEventListener("change", function () {
        if (b.checked) state.checks[id] = true; else delete state.checks[id];
        save(state); renderProgress(state);
      });
    });
  }

  function lessonCheckCount(state, n) {
    var total = 0, done = 0, boxes = document.querySelectorAll("input[data-edu-check]");
    boxes.forEach(function (b) {
      var id = b.getAttribute("data-edu-check");
      if (id.indexOf("l" + n + "-") === 0) { total++; if (state.checks[id]) done++; }
    });
    return { total: total, done: done };
  }

  function renderProgress(state) {
    document.querySelectorAll("[data-edu-lesson-card]").forEach(function (card) {
      var n = card.getAttribute("data-edu-lesson-card");
      var st = card.querySelector(".edu-status");
      var c = lessonCheckCount(state, n);
      var isDone = !!state.done[n];
      card.classList.toggle("is-done", isDone);
      card.classList.toggle("is-started", !isDone && c.done > 0);
      if (st) st.textContent = isDone ? st.getAttribute("data-st-done") : (c.done > 0 ? st.getAttribute("data-st-prog") : st.getAttribute("data-st-none"));
      var cnt = card.querySelector(".edu-count");
      if (cnt && c.total) cnt.textContent = c.done + "/" + c.total;
    });
    document.querySelectorAll("[data-edu-done-btn]").forEach(function (btn) {
      var n = btn.getAttribute("data-edu-done-btn");
      var on = !!state.done[n];
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      var lab = btn.querySelector(".edu-done-label");
      if (lab) lab.textContent = on ? lab.getAttribute("data-label-on") : lab.getAttribute("data-label-off");
    });
    var all = document.querySelector("[data-edu-progress-all]");
    if (all) {
      var d = 0; for (var k in state.done) if (state.done[k]) d++;
      all.textContent = d + "/6";
    }
  }

  function initDoneButtons(state) {
    document.querySelectorAll("[data-edu-done-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var n = btn.getAttribute("data-edu-done-btn");
        if (state.done[n]) delete state.done[n]; else state.done[n] = true;
        save(state); renderProgress(state);
      });
    });
  }

  function initQualCalc() {
    var input = document.getElementById("eduRate");
    var out = document.querySelector("[data-edu-qual]");
    if (!input || !out) return;
    function upd() {
      var q = qualifyingRate(input.value);
      out.textContent = (q === null || input.value === "") ? "—" : q.toFixed(2) + "%";
    }
    input.addEventListener("input", upd); upd();
  }

  function initLeadForms() {
    document.querySelectorAll("form[data-edu-lead]").forEach(function (form) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var status = form.querySelector("[data-edu-lead-status]");
        var tokenEl = form.querySelector('[name="cf-turnstile-response"]');
        var payload = buildLeadPayload({
          name: (form.querySelector('[name="name"]') || {}).value || "",
          email: (form.querySelector('[name="email"]') || {}).value || "",
          phone: (form.querySelector('[name="phone"]') || {}).value || "",
          message: (form.querySelector('[name="message"]') || {}).value || "",
          lang: form.getAttribute("data-edu-lang") || "en",
          turnstileToken: tokenEl ? tokenEl.value : "",
          hp: (form.querySelector('[name="hp"]') || {}).value || ""
        });
        fetch(LEAD_URL, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }).then(function (r) {
          if (status) status.textContent = r.ok ? form.getAttribute("data-msg-sent") : form.getAttribute("data-msg-error");
          if (r.ok) form.reset();
        }).catch(function () {
          if (status) status.textContent = form.getAttribute("data-msg-error");
        });
      });
    });
  }

  function initPrint() {
    document.querySelectorAll("[data-edu-print]").forEach(function (b) {
      b.addEventListener("click", function () { window.print(); });
    });
  }

  function init() {
    var state = load();
    initChecks(state); initDoneButtons(state); renderProgress(state);
    initQualCalc(); initLeadForms(); initPrint();
  }

  if (typeof window !== "undefined") {
    window.EH_LEARN = {
      STORE_KEY: STORE_KEY, LEAD_URL: LEAD_URL, LEAD_SOURCE: LEAD_SOURCE,
      STRESS_FLOOR: STRESS_FLOOR, load: load, save: save,
      qualifyingRate: qualifyingRate, buildLeadPayload: buildLeadPayload
    };
  }
  if (typeof document !== "undefined" && document.querySelector) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
  }
})();
