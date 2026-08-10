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
- 2026-08-10, M0 visual baseline: Browser runtime setup and prescribed discovery
  troubleshooting completed, but `agent.browsers.list()` returned no available
  backend. Required desktop/mobile captures are deferred; no substitute surface used.
- 2026-08-10, M0 legacy install diagnostic: official Node 16.20.2 ARM64/npm 8 could
  not complete `npm ci` because locked Sharp/libvips 8.10.5 has no Darwin ARM64
  prebuilt; its source fallback also requires obsolete Python distutils. No build ran
  in this attempt.
- 2026-08-10, M0 legacy build: Rosetta x64 with official Node 14.21.3/npm 6.14.18
  completed `npm ci` and the single `npm run build`. Gatsby reported 14/14 page
  queries, 14/14 static HTML pages, 133/133 image thumbnails, and success in 101.04s.
  `public/` contained 295 files and all 14 manifest routes. Deployed `master` has 296
  because its legacy publication adds root `CNAME`; local `public/CNAME` was absent.
- 2026-08-10, M0 visual retry: browser selection again reported `No browser is
  available`. M0 remains open solely for the eight required production screenshots.
