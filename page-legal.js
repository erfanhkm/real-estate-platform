/* Fix SB-0: chrome behaviour for the standalone legal pages
 * (privacy / terms x 5 languages). These pages ship no page bundle;
 * this small script covers the header tools menu, the language
 * select (which navigates to the same page in the chosen language —
 * each legal page exists as its own file per language) and service
 * worker registration, mirroring the bundles' behaviour. */
(function () {
  var lang = (document.documentElement.getAttribute("lang") || "en").slice(0, 2);
  var sel = document.getElementById("langSel");
  if (sel) {
    try { sel.value = lang; } catch (e) {}
    sel.addEventListener("change", function () {
      var target = sel.value;
      if (!target || target === lang) return;
      var base = location.pathname.split("/").pop() || "";
      base = base.replace(/^(fa|hi|zh|es)-/, "");
      location.href = (target === "en" ? base : target + "-" + base);
    });
  }
  var toolsBtn = document.getElementById("toolsBtn"), toolsList = document.getElementById("toolsList");
  if (toolsBtn && toolsList) {
    var closeTools = function () { toolsList.classList.remove("open"); toolsBtn.setAttribute("aria-expanded", "false"); };
    toolsBtn.addEventListener("click", function (e) { e.stopPropagation(); var open = toolsList.classList.toggle("open"); toolsBtn.setAttribute("aria-expanded", open ? "true" : "false"); });
    document.addEventListener("click", function (e) { var m = document.getElementById("toolsMenu"); if (m && !m.contains(e.target)) closeTools(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && toolsList.classList.contains("open")) closeTools(); });
    toolsList.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeTools); });
  }
  if ("serviceWorker" in navigator) {
    try { navigator.serviceWorker.register("/portal-sw.js").catch(function () {}); } catch (e) {}
  }
})();
