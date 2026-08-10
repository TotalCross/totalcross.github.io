<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration evidence

- 2026-08-10, M0A: prerequisite policy/tooling plan completed in commits `0e31684`,
  `6f924ed`, `5f6890a`, `d1a1327`, and `a44ea2d`. Its final staged all-files license
  check accepted 115/115 policy-relevant files with 51 REUSE-mapped and five ignored
  license-text paths. See its dedicated state, evidence, archive, and editorial report.
- 2026-08-10, M0 remote baseline: GitHub repository metadata reported default branch
  `site` and admin permission. `git ls-remote` recorded `site=999f35b`, generated
  `master=6c82739`, `site-2020=754482d`, `site-2021=3fe92ce`, and no `main`.
  Pages API reported `built`, legacy `master:/`, `totalcross.com`, custom 404,
  public=true, and `https_enforced=false`; Actions default workflow permission is write.
- 2026-08-10, M0 production HTTP: all 14 generated HTML routes returned 200,
  including root-level Tecdet and `/using-typescript/`. `/rss.xml`, robots, manifest,
  representative PWA/static icons, logo, and Google verification returned 200;
  `/sitemap.xml` returned the custom 404. HTTPS responded through Cloudflare/GitHub
  Pages headers with observed last-modified 2022-08-22.
- 2026-08-10, M0 manifests: four YAML manifests parsed successfully and account for
  42 source image assets, 14 page routes, nine endpoints, tracking/service settings,
  visual tokens, immutable refs, and rollback configuration. Generated `master` at
  the captured ref contains 296 files and 14 HTML route documents.
- 2026-08-10, M0 visual environment and fallback: the Codex in-app Browser has no
  backend in this execution environment. This is a non-blocking environment
  limitation and will not be retried unless interactive inspection is explicitly
  requested. Playwright 1.62.1 headless Chromium instead captured all eight required
  desktop/mobile viewport baselines from the immutable deployed `master=6c82739`
  artifact served locally with external requests blocked. Dimensions and SHA-256
  hashes are recorded in `legacy-visual-baseline.md`; representative images passed
  visual spot inspection. The earlier live HTTP crawl remains the edge-behavior
  evidence because Chromium navigation through the live Cloudflare edge did not
  complete in this environment.
- 2026-08-10, M0 legacy install diagnostic: official Node 16.20.2 ARM64/npm 8 could
  not complete `npm ci` because locked Sharp/libvips 8.10.5 has no Darwin ARM64
  prebuilt; its source fallback also requires obsolete Python distutils. No build ran
  in this attempt.
- 2026-08-10, M0 legacy build: Rosetta x64 with official Node 14.21.3/npm 6.14.18
  completed `npm ci` and the single `npm run build`. Gatsby reported 14/14 page
  queries, 14/14 static HTML pages, 133/133 image thumbnails, and success in 101.04s.
  `public/` contained 295 files and all 14 manifest routes. Deployed `master` has 296
  because its legacy publication adds root `CNAME`; local `public/CNAME` was absent.
- 2026-08-10, M1 foundation: installed Astro 7.2.0, `@astrojs/check` 0.9.10,
  TypeScript 6.0.3, and a current lockfile while retaining Gatsby for recovery.
  Official Astro requirements identify Node 22.12+ and even-numbered releases; all
  acceptance commands therefore used Node 24.19.0. A direct `cookie@2.0.1` pin keeps
  Astro's ESM prerender dependency at the root while Gatsby's older copies remain
  nested during coexistence.
- 2026-08-10, M1 validation: `astro check` reported 0 errors, 0 warnings, and 0
  hints. The static production build generated `/index.html` in 0.52 seconds, with
  74 total output files including copied legacy static files, one Astro HTML route,
  17 referenced optimized/font assets, a canonical `https://totalcross.com/` URL,
  and no external client script source.
- 2026-08-10, M1 visual comparison: Playwright 1.62.1 captured the locally served
  production build at 1440×900 and 390×844. The shell retained the recorded gutters,
  navigation, colors, typography family, 614/600 px hero geometry, background/device
  artwork, and section transition without overflow. Screenshot SHA-256 values are
  `9e82c664...baa363b2` and `1fe41fde...ffde0fb`, respectively.
- 2026-08-10, M2 route implementation: all 14 `legacy-routes.yml` HTML contracts
  have static equivalents. The `master=6c82739` PWA manifest, 32px favicon, and eight
  generated icon sizes were recovered exactly. `/404.html` is Astro-native and a
  post-build copy preserves `/404/`; neither generated document is committed.
- 2026-08-10, M2 route/link validation: Node 24 `astro check` reported 0 errors,
  warnings, or hints. Astro built 13 routes, the preparation step added the second
  404 form, and `scripts/check-site.mjs` reported `routes=14 html=15 broken=0` while
  validating every generated local `href` and `src`.
- 2026-08-10, M2 visual comparison: the locally served production build passed
  Playwright inspection at 1440×900 and 390×844 for Why TotalCross, blog, and the
  Tecdet article. The institutional 414/360px hero geometry, legacy red titles,
  navigation, responsive cards/prose, and preserved artwork matched the M0 identity
  without overflow. Six screenshot hashes are recorded by the committed PNGs; their
  SHA-256 prefixes are `2145ed98`, `e7180f73`, `28ec0ffd`, `111e24a0`, `baf39fdd`,
  and `374980b8`.
- 2026-08-10, M3 content system: Astro content collections now type author, dates,
  language/translation key, taxonomy, series, draft, cover, legacy path, and opt-in
  cross-post metadata. The Tecdet article is Markdown-backed at its preserved root
  URL; EN/PT draft fixtures prove schema, translation pairing, series ordering, code,
  and responsive-table authoring without entering production output.
- 2026-08-10, M3 publishing surfaces: `/blog/`, author, tag, and category archives are
  content-driven. The shared article layout emits self-canonical and article social
  metadata, JSON-LD BlogPosting data, heading navigation, taxonomy links, optional
  translations/series, and responsive developer content. RSS is available at
  `/rss.xml`; `/sitemap.xml` remains a compatibility index for Astro's generated
  `/sitemap-index.xml` and sitemap shard.
- 2026-08-10, M3 final validation: supported Node 24 `astro check` reported 0 errors,
  warnings, and hints. Astro built 18 native pages; 404 preparation produced 20 HTML
  documents. Route/link validation reported `routes=14 html=20 broken=0`, and the
  content validator reported `article=1 archives=3 rss=1 sitemaps=3 drafts=excluded
  translations=paired`. License tests passed 6/6, the final targeted check accepted
  31/31 changed policy-relevant files, and the repository-wide closeout accepted
  175/175 files with no issues.
