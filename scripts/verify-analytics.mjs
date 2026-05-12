#!/usr/bin/env node
// Verifies that the Fintablo Analyst counter is loaded on every built page
// under out/. Runs as a postbuild step so any new page (any new
// src/app/**/page.tsx) is automatically checked. CI build fails if even one
// page is missing the counter.
//
// Why this exists: the project rule says "every page must have the counter".
// Putting the counter in root layout.tsx is necessary but not sufficient — a
// future contributor could create an alternate layout, override head, or
// otherwise break inheritance. This test catches that at build time.
//
// How it works:
// 1. Walk out/**/*.html (skip out/_next/ and out/fonts/).
// 2. For each page, parse all <script src="..."> chunks referenced from
//    that page's HTML.
// 3. Read each referenced chunk file; require that the union of those
//    chunks contains both markers (analyst URL + apiKey).
// We must look in chunks rather than inline HTML because next/script with
// strategy="afterInteractive" stores the loader body inside a chunk and
// references it from the page bundle — the inline HTML does not contain the
// marker string.

import { readFile, readdir, stat } from "node:fs/promises";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "out");
const REQUIRED_MARKERS = [
  "analyst.fintablo.ru",
  "apiKey-PeblK5cQmecxkFlCLYC4KrNneo0BiluLLd7lx3lie6bQABFw",
];
const EXEMPT = new Set([
  // Add relative paths under out/ here if a page must not load analytics.
  // Each entry must have a comment justifying the exemption.
]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "_next" || entry.name === "fonts") continue;
      yield* walk(path);
    } else if (entry.isFile() && path.endsWith(".html")) {
      yield path;
    }
  }
}

// Extract src and href values for scripts and preloaded scripts referenced
// from this HTML page. Next.js writes <script src="/.../_next/static/..."/>
// for entry chunks and <link rel="preload" as="script" href="..." /> for
// dependent chunks.
function extractChunkUrls(html) {
  const urls = new Set();
  const scriptRe = /<script[^>]+src="([^"]+\.js)"/g;
  const preloadRe = /<link[^>]+as=["']script["'][^>]+href="([^"]+\.js)"/g;
  let m;
  while ((m = scriptRe.exec(html)) !== null) urls.add(m[1]);
  while ((m = preloadRe.exec(html)) !== null) urls.add(m[1]);
  return [...urls];
}

// Map an HTML chunk URL like
// "/fintablo-product-tour-mvp/_next/static/chunks/foo.js" to a filesystem
// path under out/.
function chunkUrlToPath(url) {
  const nextIdx = url.indexOf("/_next/");
  if (nextIdx === -1) return null;
  return join(OUT_DIR, url.slice(nextIdx));
}

async function chunkContains(path, markers) {
  try {
    const body = await readFile(path, "utf-8");
    return markers.every((m) => body.includes(m));
  } catch {
    return false;
  }
}

async function chunkUnionContains(paths, markers) {
  // True if for every marker at least one chunk in paths contains it.
  const found = new Set();
  for (const p of paths) {
    try {
      const body = await readFile(p, "utf-8");
      for (const m of markers) {
        if (body.includes(m)) found.add(m);
      }
      if (found.size === markers.length) return true;
    } catch {
      // ignore unreadable chunk
    }
  }
  return found.size === markers.length;
}

async function main() {
  try {
    await stat(OUT_DIR);
  } catch {
    console.error(
      `[verify-analytics] out/ not found at ${OUT_DIR}. Run "next build" first.`,
    );
    process.exit(2);
  }

  const failures = [];
  let checked = 0;

  for await (const file of walk(OUT_DIR)) {
    const rel = relative(OUT_DIR, file);
    if (EXEMPT.has(rel)) continue;

    const html = await readFile(file, "utf-8");
    const chunkUrls = extractChunkUrls(html);
    const chunkPaths = chunkUrls.map(chunkUrlToPath).filter(Boolean);

    if (chunkPaths.length === 0) {
      failures.push({
        file: rel,
        reason: "no JS chunks referenced from this page",
      });
      checked += 1;
      continue;
    }

    const ok = await chunkUnionContains(chunkPaths, REQUIRED_MARKERS);
    if (!ok) {
      failures.push({
        file: rel,
        reason: `no chunk referenced from this page contains both markers (${REQUIRED_MARKERS.join(", ")})`,
      });
    }
    checked += 1;
  }

  if (failures.length > 0) {
    console.error(
      `\n[verify-analytics] FAIL — ${failures.length}/${checked} pages do not load the Fintablo Analyst counter:`,
    );
    for (const f of failures) {
      console.error(`  - ${f.file}  — ${f.reason}`);
    }
    console.error(
      `\nFix: ensure src/app/layout.tsx mounts <FintabloAnalystScript />.`,
    );
    console.error(
      `If a page legitimately must not have the counter, add it to the EXEMPT list in scripts/verify-analytics.mjs with an explicit comment.\n`,
    );
    process.exit(1);
  }

  console.log(
    `[verify-analytics] OK — ${checked} pages all load the Fintablo Analyst counter.`,
  );
}

main().catch((err) => {
  console.error("[verify-analytics] unexpected error", err);
  process.exit(2);
});
