(function () {
  try {
    function reportError(payload) {
      try {
        var body = JSON.stringify(payload || {});
        try {
          if (navigator.sendBeacon) {
            var blob = new Blob([body], { type: "application/json" });
            navigator.sendBeacon("/.netlify/functions/api", blob);
          }
        } catch (e) {}
        fetch("/.netlify/functions/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: body,
        }).catch(function () {
          try {
            fetch("/api/log-js-error", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: body,
            }).catch(function () {});
          } catch (e) {}
        });
      } catch (e) {
        try {
          console.error("Error reporting failure", e);
        } catch (e) {}
      }
    }

    window.addEventListener("error", function (evt) {
      try {
        if (evt.message === "Script error." && !evt.filename) {
          return;
        }
        var isResourceError = evt.target && (evt.target.src || evt.target.href);
        var payload = {
          type: isResourceError ? "resource_error" : "error",
          message:
            evt.message ||
            (isResourceError ? "Resource load error" : "Script error"),
          filename:
            evt.filename ||
            (evt.target && (evt.target.src || evt.target.href)) ||
            null,
          lineno: evt.lineno || null,
          colno: evt.colno || null,
          stack: (evt.error && evt.error.stack) || null,
          href: location.href,
          userAgent: navigator.userAgent,
          time: Date.now(),
        };
        setTimeout(function () {
          reportError(payload);
        }, 0);
      } catch (e) {
        try {
          console.error("Error in error handler", e);
        } catch (e) {}
      }
    });

    window.addEventListener("unhandledrejection", function (evt) {
      try {
        var reason = evt.reason;
        var message =
          (reason && reason.message) || String(reason) || "unhandledrejection";
        var stack = (reason && reason.stack) || null;
        var payload = {
          type: "unhandledrejection",
          message: message,
          stack: stack,
          href: location.href,
          userAgent: navigator.userAgent,
          time: Date.now(),
        };
        setTimeout(function () {
          reportError(payload);
        }, 0);
      } catch (e) {
        try {
          console.error("Error in unhandledrejection handler", e);
        } catch (e) {}
      }
    });

    var saScriptId = "sa-dynamic-optimization";
    var saScriptUuid = "180b3689-4f9a-42e5-8fc5-f4b7c2217a7e";

    function loadSearchAtlasScript() {
      if (window.__saDynamicOptimizationLoading || document.getElementById(saScriptId)) {
        return;
      }

      window.__saDynamicOptimizationLoading = true;
      var script = document.createElement("script");
      script.id = saScriptId;
      script.type = "text/javascript";
      script.src = "https://dashboard.searchatlas.com/scripts/dynamic_optimization.js";
      script.defer = true;
      script.async = true;
      script.setAttribute("nowprocket", "");
      script.setAttribute("nitro-exclude", "");
      script.setAttribute("data-uuid", saScriptUuid);

      script.onload = function () {
        window.__saDynamicOptimizationLoaded = true;
      };
      script.onerror = function (event) {
        try {
          console.warn("SearchAtlas script failed to load", event);
        } catch (e) {}
      };

      document.head.appendChild(script);
    }

    if (document.readyState === "complete" || document.readyState === "interactive") {
      loadSearchAtlasScript();
    } else {
      document.addEventListener("DOMContentLoaded", loadSearchAtlasScript, {
        once: true,
      });
    }
  } catch (err) {
    console.error("Error inserting SearchAtlas script", err);
  }
})();
