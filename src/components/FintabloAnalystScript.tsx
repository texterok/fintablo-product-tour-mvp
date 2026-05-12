"use client";

import Script from "next/script";

// Fintablo Analyst counter (analyst.fintablo.ru).
// Mounted globally via root layout — present on every public route.
// Key documented in project memory: counter is the default for all pages.
export function FintabloAnalystScript() {
  return (
    <Script
      id="fintablo-analyst-loader"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
!function() {function t(t, e){return function(){window.analystasync.push([t, arguments])}}
    if (typeof analyst == "undefined") {var e = document.createElement("script");e.type = "text/javascript", e.async = !0, e.src = "//analyst.fintablo.ru/jsapi/api.min.js", document.getElementsByTagName("head")[0].appendChild(e), window.analyst = {}, window.analystasync = [];for (var n = ["init", "track", "props", "ident"], a = 0; a < n.length; a++) analyst[n[a]] = t(n[a])}}(), analyst.init("apiKey-PeblK5cQmecxkFlCLYC4KrNneo0BiluLLd7lx3lie6bQABFw", {'sessionEvent': false, 'visitEvent': false, 'session': false});
        `.trim(),
      }}
    />
  );
}
