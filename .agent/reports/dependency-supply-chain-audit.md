<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Dependency and supply-chain security audit

## Result

The current Astro dependency graph at `main` revision `5d09d93` contains no known
applicable High or Critical finding from the requested alert set. A clean install
with Node 24.14.0 and npm 11.6.2 resolved 759 lockfile package entries (668 packages
installed on macOS), and `npm audit --json` reported zero vulnerabilities at every
severity. The three requested package families still present are all beyond their
fixed ranges:

- `postcss@8.5.26` (fixes begin at 8.5.12 and 8.5.18);
- two copies of `js-yaml@4.3.1` (fix begins at 4.3.0);
- `sharp@0.35.3` using bundled libvips 8.18.3 (fix begins at sharp 0.35.0,
  and the upstream advisory recommends libvips 8.18.3).

All other requested packages are absent. No dependency or lockfile update was
needed. The workflows were hardened by pinning every action to an immutable commit,
adding High/Critical npm-audit enforcement, and verifying registry signatures.

## Baseline and method

- Source: clean `main`/`origin/main` at `5d09d93` (`v1.0.2`).
- Runtime: bundled Node 24.14.0 and npm 11.6.2, matching the Node 24 CI contract.
- Install: `npm ci`; the lockfile was unchanged.
- Graph evidence: targeted `npm ls --all`, direct lockfile enumeration, and runtime
  `sharp.versions` inspection.
- Registry evidence: all 759 package entries use `registry.npmjs.org`; every
  registry tarball has an integrity hash; `npm audit signatures` verified 666
  installed packages and 93 attestations. The two packages marked with install
  scripts are `esbuild@0.28.2` and optional `fsevents@2.3.3`.
- GitHub evidence: the repository Dependabot Alerts API returned zero records even
  with `state=all`, so alert disappearance was not used as evidence. The archived
  `site` lockfile at `999f35b` and GitHub Advisory Database ranges establish the old
  vulnerable paths. Dependabot PRs #7-#11 also confirm the retired `site` base.

## Historical Dependabot advisory regression checks

These five advisories are executable regression cases, not documentation-only
dispositions. `npm run security:advisories` regenerates the deterministic
machine-readable result at
`.agent/evidence/dependency-advisory-regressions.json`; `npm run
security:advisories:check` evaluates the current manifest, every matching lockfile
entry, and the installed `npm ls <package> --all` tree, then verifies that the
tracked artifact is current. Any affected version is reported as `REQUIRES FIX` and
causes a non-zero exit. The Critical `sanitize-html` check also searches repository
source and tooling for direct imports or references.

| Advisory | Package | Severity | Current resolved version(s) | Current dependency path(s) | Status | Evidence | Disposition |
|---|---|---|---|---|---|---|---|
| [GHSA-3g43-6gmg-66jw](https://github.com/advisories/GHSA-3g43-6gmg-66jw) | `axios` | High | none | none | `NOT PRESENT` | No manifest declaration; no lockfile entry; clean `npm ls axios --all` has no installed copy. Affected: `>=0.19.0 <0.31.1`, `>=1.0.0 <1.15.2`; fixed: 0.31.1/1.15.2. | Removed with the legacy graph; future direct, transitive, duplicate, and vulnerable copies are evaluated. |
| [GHSA-p92q-9vqr-4j8v](https://github.com/advisories/GHSA-p92q-9vqr-4j8v) | `axios` | High | none | none | `NOT PRESENT` | Same three independent current-graph checks. Affected: `<=0.31.1`, `>=1.0.0 <1.16.0`; fixed: 0.32.0/1.16.0. | Independent redirect credential-leak regression case; not collapsed into another Axios advisory. |
| [GHSA-hfxv-24rg-xrqf](https://github.com/advisories/GHSA-hfxv-24rg-xrqf) | `axios` | High | none | none | `NOT PRESENT` | Same three independent current-graph checks. Affected: `<=0.31.1`, `>=1.0.0 <1.16.0`; fixed: 0.32.0/1.16.0. | Independent cookie-name ReDoS regression case. |
| [GHSA-ph9p-34f9-6g65](https://github.com/advisories/GHSA-ph9p-34f9-6g65) | `tmp` | High | none | none | `NOT PRESENT` | No manifest declaration; no lockfile entry; clean `npm ls tmp --all` has no build, content, test, or tooling copy. Affected: `<0.2.6`; fixed: 0.2.6. | Removed with the legacy graph; future paths are evaluated rather than ignored. |
| [GHSA-rpr9-rxv7-x643](https://github.com/advisories/GHSA-rpr9-rxv7-x643) | `sanitize-html` | Critical | none | none | `NOT PRESENT` | No manifest declaration; no lockfile entry; clean `npm ls sanitize-html --all` has no installed copy; no direct source/tooling reference. Affected: exactly 2.17.3; fixed: 2.17.4. | Retained as a mandatory Critical regression record; graph or source reintroduction cannot silently disappear. |

The generated records additionally preserve `directDependency`,
`transitiveDependency`, `multipleResolvedVersions`, all resolved versions, every
installed or locked path, source references, evidence, and the advisory-specific
reason. Expected statuses are not encoded: status is derived from the current graph
on every run.

## Historical alert disposition

“Old path” describes the retired Gatsby lockfile, not a current dependency.

| package | advisory/CVE | current resolved version(s) | dependency path | current status | exploitability | action taken |
|---|---|---:|---|---|---|---|
| `brace-expansion` | [GHSA-mh99-v99m-4gvg](https://github.com/advisories/GHSA-mh99-v99m-4gvg) / CVE-2026-14257 | — | Current: absent. Old: `brace-expansion@1.1.11`. | `NOT PRESENT` | No current parser or expansion call is reachable. | Removed with Gatsby → Astro migration. |
| `socket.io-parser` | [GHSA-2m8v-j782-fhvr](https://github.com/advisories/GHSA-2m8v-j782-fhvr) / CVE-2026-69185 | — | Current: absent. Old: `socket.io-client > 3.3.2`; root `3.4.1`. | `NOT PRESENT` | No current Socket.IO protocol parser or server. | Removed with migration. |
| `postcss` | [GHSA-6g55-p6wh-862q](https://github.com/advisories/GHSA-6g55-p6wh-862q) / CVE-2026-45623 | `8.5.26` | `astro@7.2.0 > vite@8.2.1 > postcss`. | `FIXED` | Build-time CSS is repository-controlled, but an untrusted PR can influence it; this would be applicable on a vulnerable version. | Existing resolved version exceeds 8.5.12 fix. |
| `postcss` | [GHSA-r28c-9q8g-f849](https://github.com/advisories/GHSA-r28c-9q8g-f849) | `8.5.26` | `astro > vite > postcss`. | `FIXED` | Same source-map path as above; untrusted PR CSS is relevant. | Existing version exceeds 8.5.18 fix. |
| `js-yaml` | [GHSA-52cp-r559-cp3m](https://github.com/advisories/GHSA-52cp-r559-cp3m) / CVE-2026-59869 | `4.3.1` (two copies) | `astro > js-yaml`; `@astrojs/mdx > @astrojs/internal-helpers > js-yaml`. | `FIXED` | Astro loads repository YAML, including `src/content/authors`; an untrusted PR could supply merge chains. | Both copies exceed 4.3.0 fix. |
| `sharp` / libvips | [GHSA-f88m-g3jw-g9cj](https://github.com/advisories/GHSA-f88m-g3jw-g9cj) / CVE-2026-33327, -33328, -35590, -35591 | `sharp@0.35.3`; `@img/sharp-libvips-*@1.3.2`; runtime libvips `8.18.3` | Root dev dependency, deduped for `astro`; platform libvips optional bundles. | `FIXED` | Astro and `assets:check` decode repository images. Malicious PR assets are attacker-controlled build input, so a vulnerable decoder would be applicable. | Existing sharp exceeds 0.35.0 fix and supplies recommended libvips 8.18.3. |
| `shell-quote` | [GHSA-w7jw-789q-3m8p](https://github.com/advisories/GHSA-w7jw-789q-3m8p) / CVE-2026-9277 | — | Current: absent. Old: root `1.6.1`. | `NOT PRESENT` | No current `.op` quoting path. | Removed with migration. |
| `shell-quote` | [GHSA-395f-4hp3-45gv](https://github.com/advisories/GHSA-395f-4hp3-45gv) / CVE-2026-13311 | — | Same as above. | `NOT PRESENT` | No current `parse()` call. | Removed with migration. |
| `websocket-driver` | [GHSA-xv26-6w52-cph6](https://github.com/advisories/GHSA-xv26-6w52-cph6) / CVE-2026-54466 | — | Current: absent. Old: root `0.7.4`. | `NOT PRESENT` | The static Astro production build exposes no WebSocket parser. | Removed with migration. |
| `@xhmikosr/decompress` / `decompress` | [GHSA-mp2f-45pm-3cg9](https://github.com/advisories/GHSA-mp2f-45pm-3cg9) / CVE-2026-53486 | — | Current: absent. Old: legacy `decompress@4.2.1`, which the advisory also covers. | `NOT PRESENT` | No current archive extraction package or call path. | Removed with migration; no override of the unpatched legacy package. |
| `form-data` | [GHSA-hmw2-7cc7-3qxx](https://github.com/advisories/GHSA-hmw2-7cc7-3qxx) / CVE-2026-12143 | — | Current: absent. Old: root `3.0.1`; `@graphql-tools/url-loader > 4.0.0`. | `NOT PRESENT` | Cross-post uses native `fetch`; no current multipart library path. | Both old copies removed with migration. |
| `ws` | [GHSA-96hv-2xvq-fx4p](https://github.com/advisories/GHSA-96hv-2xvq-fx4p) / CVE-2026-48779 | — | Current: absent. Old: `engine.io-client > 6.1.4`, `webpack-dev-server > 6.2.1`, root `7.4.3`. | `NOT PRESENT` | No current `ws` server/client parser. | All old copies removed with migration. |
| `axios` | [GHSA-pjwm-pj3p-43mv](https://github.com/advisories/GHSA-pjwm-pj3p-43mv) / CVE-2026-44492 | — | Current: absent. Old: root `0.21.1`. | `NOT PRESENT` | Current HTTP scripts use platform `fetch`; no Axios proxy evaluation. | Removed with migration. |
| `axios` | [GHSA-j5f8-grm9-p9fc](https://github.com/advisories/GHSA-j5f8-grm9-p9fc) / CVE-2026-44486 | — | Same as above. | `NOT PRESENT` | No Axios redirect/proxy header path. | Removed with migration. |
| `axios` | Additional High alert chain: CVE-2026-44487, -44495, -44496, -42033, -42035, -42043, -25639; CVE-2025-27152; CVE-2021-3749 | — | Same historical `axios@0.21.1`; current graph absent. | `NOT PRESENT` | Old version matched each range, but no Axios code ships or executes now. | Removed with migration; current absence confirmed against every High advisory returned for `axios@0.21.1`. |
| `tmp` | [GHSA-ph9p-34f9-6g65](https://github.com/advisories/GHSA-ph9p-34f9-6g65) / CVE-2026-44705; also Low [GHSA-52f5-9888-hmc6](https://github.com/advisories/GHSA-52f5-9888-hmc6) / CVE-2025-54798 | — | Current: absent. Old: root `0.2.1`; `devcert`, `external-editor`, and `react-dev-utils` each used `0.0.33`. | `NOT PRESENT` | No current temporary-path library or attacker-supplied prefix/postfix/template. | All old copies removed with migration. |
| `sanitize-html` | [GHSA-vccv-cmxp-4j9h](https://github.com/advisories/GHSA-vccv-cmxp-4j9h) / CVE-2026-53606 | — | Current: absent. Old: root `1.27.5`. | `NOT PRESENT` | Astro renders authored Markdown/MDX; it does not call this sanitizer on untrusted runtime HTML. | Removed with migration. |
| `@babel/plugin-transform-modules-systemjs` | [GHSA-fv7c-fp4j-7gwp](https://github.com/advisories/GHSA-fv7c-fp4j-7gwp) / CVE-2026-44728 | — | Current: absent. Old: root `7.12.13`. | `NOT PRESENT` | No current SystemJS transform of attacker-supplied source. | Removed with migration. |

The Axios grouped row contains the additional High advisories returned by the
GitHub Advisory Database for the exact retired `axios@0.21.1` version. The current
repository alert endpoint no longer exposes the original alert numbers, so this
version-based reconstruction is intentionally broader than relying on a vanished
Dependabot chain.

## Stale Gatsby graph

Current `npm ls --all` and lockfile enumeration contain none of `gatsby`,
`gatsby-transformer-remark`, `engine.io`, `moment`, or `terser`. Their old versions
(`gatsby@2.32.4`, transformer `2.16.0`, engine.io `3.4.2`, moment `2.29.1`, and
terser `4.8.0`) remain only in the archived `site` history. Their historical
Dependabot PRs were closed rather than ported. Status: `NOT PRESENT`, removed with
the Gatsby → Astro migration.

## Workflow and install-path review

- CI and Pages use Node 24 and deterministic `npm ci`. Both now run `npm audit
  --audit-level=high`, `npm audit signatures`, the five named advisory checks, and
  the advisory reintroduction tests immediately after installation.
- All seven action references are pinned to the immutable commits currently behind
  their existing v4/v5/v6 tags. The workflow policy checker rejects any future
  non-40-character action reference.
- The distribution workflow installs no npm packages. It executes the checked-in
  cross-post script with Node 24 and uses only local modules and platform `fetch`.
  External DEV/Medium writes remain explicit manual workflow inputs and default to
  dry-run.
- PR CI has only `contents: read`; production Pages write/OIDC permissions exist
  only in the main-branch deployment workflow. Concurrency cancellation remains in
  place.

## Changes and remaining findings

No dependency version changed, so `package.json` and `package-lock.json` remain
byte-for-byte unchanged; lockfile regeneration was neither necessary nor desirable.
The first implementation slice added immutable action pins, explicit audit/signature
gates, and their policy regression check. The follow-up adds five named advisory
regression cases with a deterministic structured artifact and vulnerable-version
failure tests. Neither slice suppresses an npm or Dependabot advisory.

`npm audit` reports no Moderate or Low findings to defer. The historical Low `tmp`
advisory is documented above even though `tmp` is absent. The remaining operational
risk is that action pins require deliberate update maintenance; this is preferable
to allowing mutable tags to change executable workflow code silently.

## Validation

The M4 final Level 3 matrix passed under Node 24.14.0/npm 11.6.2:

- clean `npm ci`: 668 installed, 669 audited, zero vulnerabilities;
- `npm audit --audit-level=high`: zero vulnerabilities;
- `npm audit signatures`: 666 verified signatures and 93 attestations;
- `npm run security:advisories:check`: five current `NOT PRESENT` results; tracked
  JSON matched live manifest, lockfile, installed tree, and source-reference state;
- `npm test`: 23/23 tests passed (11 license-tool, 6 cross-post, and 6 named
  advisory regression tests, including a non-zero CLI result for reintroduction);
- `npm run license:check:all`: 184/184 tracked/untracked files compliant, with 73
  policy mappings and 20 ignored paths;
- release and workflow policy checks: passed;
- Astro diagnostics: 57 files, zero errors, warnings, or hints;
- production `npm run build`: passed and generated the static `dist/` artifact;
- `npm run assets:check`: passed with zero failures and one pre-existing warning
  for a 727,056-byte generated WebP; 117 generated media files total 4.75 MiB;
- `npm run validate`: 14 legacy routes and 20 HTML documents, zero broken links,
  zero rendered SPDX headers, and complete content/RSS/sitemap assertions;
- all three workflow YAML files parse successfully; `git diff --check` passed.

Acceptance is met: no applicable requested High/Critical finding remains, no
Moderate/Low npm finding is hidden or deferred, and the production site artifact
is generated and validated successfully.
