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

## M3 — Blog, SEO, feeds, and localization readiness

Completed 2026-08-10. A typed Astro content layer now owns authors and Markdown/MDX
articles, including dates, locale/translation identity, taxonomy, optional series,
draft status, cover, preserved legacy URL, and opt-in cross-post intent. The Tecdet
customer article moved into the collection without changing its root-level URL or
third-party license mapping. Paired English/Portuguese draft fixtures exercise the
authoring schema but are excluded from every production surface.

The blog landing, article, author, tag, and category pages are collection-driven.
The article layout adds heading navigation, code/media/table support, optional
translation and series links, article metadata, and JSON-LD. RSS and an Astro sitemap
chain are generated, with `/sitemap.xml` retained as a compatibility entry point.

Final Node 24 validation completed with zero Astro diagnostics, 18 native pages,
20 prepared HTML documents, all 14 legacy route contracts, zero broken references,
and passing focused assertions for archives, feeds, sitemaps, canonical metadata,
JSON-LD, draft exclusion, and translation pairing. Repository license tests passed
6/6; the path policy now recognizes editorial content in legacy, coexistence, and
final Astro source locations.

## M6 — Optional cross-posting

Completed 2026-08-10 before deployment cutover so the article metadata contract is
stable. Distribution is disabled by default and isolated in a manual workflow whose
inputs select article, DEV/Medium, draft/publish intent, and dry run. The dependency-
free CLI also has an automatic mode that refuses any destination not enabled in the
article's `crossPost` metadata.

The Forem v1 adapter verifies canonical deployment before a live request, searches
the authenticated account's published and draft articles by TotalCross canonical
URL, and updates a match rather than creating a duplicate. DEV credentials are only
needed for live writes. Medium uses its supported URL import/manual editor and
canonical-link flow; no legacy Medium API dependency exists.

Six unit tests and three CLI dry runs passed without credentials or network writes.
They prove default-off behavior, opted-in canonical DEV payloads, create/update
idempotency, workflow isolation from Pages, and Medium manual preparation. No live
external article was created merely for validation.
