<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration history

## M0A — Repository licensing and agent tooling prerequisite

Completed 2026-08-10 at `a44ea2d`. The supporting plan installed the local planning
contract, licensing policy and mappings, conservative validator/fixer, repository
skills, project file headers, and a license CI gate while retaining the legacy
Gatsby publication path. Its separate editorial report records policy limitations
and human-review items.

## M0 — Baseline and migration guardrails

Completed 2026-08-10 from source checkpoint `c7182dc`. M0 recorded immutable source
and deployment refs, current Pages configuration, 14 public routes, nine endpoints,
42 source image assets, integrations, navigation/metadata behavior, live HTTP
responses, and the recoverable legacy publication path. The Gatsby production build
passed under the documented Rosetta Node 14/npm 6 compatibility environment with
14/14 routes and 295 generated files.

The in-app Browser limitation was replaced by the approved automated fallback.
Headless Playwright captured eight deterministic desktop/mobile viewport baselines
from the immutable deployed `master` artifact, and their dimensions and hashes are
recorded beside the images. No production or remote repository settings changed in
M0.

## M1 — Astro foundation and visual system

Completed 2026-08-10 after M0 closure. Astro 7.2.0 and TypeScript 6.0.3 now produce a
static site for `https://totalcross.com` under supported Node 24. The implementation
adds a typed base layout, canonical/social metadata, shared header/footer/button
components, extracted design tokens, a responsive full home page, local font assets,
and reused legacy artwork without React hydration.

The Astro source remains temporarily isolated under `astro/`, with `static/` as its
public directory and the legacy Gatsby images imported in place. This keeps the
Gatsby recovery path operational and avoids duplicating large assets until route
parity allows M7 to make the final conventional `src/`/`public/` move. The coexistence
lockfile pins modern ESM `cookie` at the root because Gatsby otherwise hoisted an
incompatible legacy release into Astro's prerender bundle.

Astro check completed with zero diagnostics, the production build generated the home
route without client script sources, and Playwright comparisons at 1440×900 and
390×844 confirmed the shared shell/home identity against the M0 captures.

## M2 — Public page and route parity

Completed 2026-08-10. All 14 legacy HTML contracts now have Astro equivalents:
home, both 404 forms, eight institutional pages, blog landing, the root-level Tecdet
article, and the accidental Gatsby TypeScript starter route. Institutional content
uses the shared shell and reusable hero/card/prose primitives. The contact form keeps
its existing Getform POST endpoint, and the deployed manifest plus favicon/icon
family were recovered byte-for-byte from immutable `master=6c82739`.

A manifest-driven validator checks the M0 route list and every generated local
`href`/`src`. Astro's single 404 route naturally emits `/404.html`; a small generated-
output preparation step copies that document to `/404/index.html` to preserve the
observed second URL without committing build output.

Final validation reported zero Astro diagnostics, built 13 native routes plus the
compatibility 404 copy, found all 14 legacy routes and zero broken local references,
and passed desktop/mobile visual comparison for Why TotalCross, blog, and the Tecdet
article. RSS, sitemap, typed blog collections, and richer article metadata remain
deliberately assigned to M3.
