#!/usr/bin/env node
// ============================================================================
// ROMA BOUNDARY CHECK
// ============================================================================
//
// Fails the build if Roma's dev modified files outside the allowed paths.
// Runs in CI on Roma's fork. On upstream (texterok/main) it's a no-op
// because UPSTREAM_REF resolves to the same commit.
//
// Allowed paths (Roma may edit):
//   src/tours/*/data.ts
//   src/tours/*/landing-copy.ts
//   src/tours/*/manifest.ts        (ONLY enabledForRoma flag — checked separately)
//   src/content/roma/**            (future: Roma's own static content)
//   ROMA-DEV-README.md             (his own README)
//   public/roma/**                 (future: Roma's static assets like favicons)
//
// Blocked paths (Ivan owns — Roma changes there will be reverted on next pull):
//   everything else under src/
//   package.json, package-lock.json
//   next.config.ts
//   *.css (except inside src/tours/<slug>/*.css if a tour adds one)
//
// How to bypass legitimately:
//   Talk to Ivan, he adds the change upstream. Don't edit blocked files
//   in roma/main directly.
// ============================================================================

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

const UPSTREAM_REF = process.env.UPSTREAM_REF || "upstream/main";
const HEAD_REF = process.env.HEAD_REF || "HEAD";

const ALLOWED_PATTERNS = [
  /^src\/tours\/[a-z0-9-]+\/data\.ts$/,
  /^src\/tours\/[a-z0-9-]+\/landing-copy\.ts$/,
  /^src\/tours\/[a-z0-9-]+\/manifest\.ts$/, // checked separately for fields
  /^src\/content\/roma\//,
  /^public\/roma\//,
  /^ROMA-DEV-README\.md$/,
  /^\.gitignore$/, // Roma may add their local ignores
];

const MANIFEST_REGEX = /^src\/tours\/[a-z0-9-]+\/manifest\.ts$/;

/**
 * In manifest.ts files, only these properties may differ from upstream:
 */
const MANIFEST_ALLOWED_DIFF_KEYS = new Set(["enabledForRoma"]);

function isAllowed(path) {
  return ALLOWED_PATTERNS.some((re) => re.test(path));
}

function checkUpstreamAvailable() {
  try {
    execSync(`git rev-parse --verify ${UPSTREAM_REF}`, { stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

function getChangedFiles() {
  const out = execSync(`git diff --name-only ${UPSTREAM_REF}..${HEAD_REF}`, {
    encoding: "utf-8",
  });
  return out
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function checkManifestDelta(path) {
  // Compare only enabledForRoma vs upstream. If anything else differs, fail.
  try {
    const upstreamContent = execSync(`git show ${UPSTREAM_REF}:${path}`, {
      encoding: "utf-8",
    });
    const localContent = execSync(`git show ${HEAD_REF}:${path}`, {
      encoding: "utf-8",
    });
    if (upstreamContent === localContent) return null;

    // Normalize by replacing the enabledForRoma value, then compare.
    const normalize = (s) =>
      s.replace(/enabledForRoma:\s*(true|false)/, "enabledForRoma: <ROMA>");
    if (normalize(upstreamContent) === normalize(localContent)) return null;

    return `${path}: manifest modified beyond the enabledForRoma flag. Other manifest fields are Ivan's zone — talk to Ivan instead of editing here.`;
  } catch (err) {
    return `${path}: could not diff against ${UPSTREAM_REF} (${err.message})`;
  }
}

function main() {
  if (!checkUpstreamAvailable()) {
    console.log(
      `[boundary-check] No '${UPSTREAM_REF}' ref available. ` +
        `Skipping check — this is normal on upstream itself or first clone.`,
    );
    console.log(
      `[boundary-check] To enable: 'git remote add upstream <ivan-repo-url>' ` +
        `and 'git fetch upstream'.`,
    );
    process.exit(0);
  }

  const changed = getChangedFiles();
  if (changed.length === 0) {
    console.log("[boundary-check] No changes vs upstream. OK.");
    process.exit(0);
  }

  const violations = [];
  for (const path of changed) {
    if (!isAllowed(path)) {
      violations.push(
        `${path}: outside Roma's allowed zone (only src/tours/<slug>/{data,landing-copy}.ts, manifest.ts flag, src/content/roma/, public/roma/, ROMA-DEV-README.md are editable here).`,
      );
      continue;
    }
    if (MANIFEST_REGEX.test(path)) {
      const issue = checkManifestDelta(path);
      if (issue) violations.push(issue);
    }
  }

  if (violations.length > 0) {
    console.error(
      `\n[boundary-check] FAIL — ${violations.length} file(s) outside Roma's zone:\n`,
    );
    for (const v of violations) console.error(`  - ${v}`);
    console.error(
      `\nFix: revert those changes, or move them upstream (ask Ivan).\n` +
        `For details on zones, see ROMA-DEV-README.md → "Что можно править".\n`,
    );
    process.exit(1);
  }

  console.log(
    `[boundary-check] OK — ${changed.length} file(s) changed, all within Roma's zone.`,
  );
  for (const f of changed) console.log(`  + ${f}`);
}

main();
