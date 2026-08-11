<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Post-migration visual corrections editorial report

## Editorial Summary

The correction restored the small but highly visible identity details lost during
the Astro cutover. Browsers now receive valid TotalCross favicon and application-icon
metadata, the footer again communicates six social destinations through recognizable
glyphs, and automatic SPDX ownership metadata remains in source without appearing in
served page markup.

## Original Plan versus Actual Outcome

All M0-M3 correction outcomes were delivered without changing routes, content
semantics, deployment architecture, or the site's established layout. Existing PWA
icons supplied the canonical emblem for repaired derivatives. The legacy Font Awesome
brand family was reused as build-time data rather than through React or browser code.

## What Changed

- Regenerated the malformed 32px PNG/ICO and added a matching 180px Apple-touch icon.
- Completed shared head and manifest relationships for all existing icon sizes.
- Added a small Astro component that emits six Font Awesome brand paths as static SVG.
- Restored accessible names, titles, new-tab behavior, and noopener/noreferrer links.
- Added source-only Astro and renderable Markdown/MDX SPDX placements and migration.
- Made generated-site validation reject recognized emitted SPDX authoring comments.

## Decisions and Trade-offs

The footer retains its migrated circle treatment and dimensions, changing only the
placeholder content and confirmed interaction behavior. The Twitter bird from the
legacy implementation remains the selected glyph and is labeled “X (Twitter)” for
current clarity. Font Awesome adds a build dependency but no shipped runtime; its
CC BY 4.0/MIT provenance is recorded explicitly.

## Unexpected Problems and Discoveries

The 32px favicon was not merely stale: it visibly contained only a small red mark,
while the 192px and larger icon set preserved the full emblem. Four Astro templates
used an approved legacy SPDX comment without the blank line used elsewhere. A focused
regression test expanded migration only to that verified whitespace variant.

## Validation and Measurable Results

The icon milestone produced zero Astro diagnostics, 18 native pages, all 14 legacy
routes, 20 prepared HTML files, zero broken links, four required head relationships,
six protected social SVG links, eight manifest icons, and zero client scripts. The
license milestone passed 11 focused tests and accepted 151/151 policy files; all 20
generated HTML documents contain zero recognized authoring-header comments.

## Useful Evidence and Examples

Compact command results and screenshot hashes are in
`.agent/evidence/post-migration-visual-corrections.md`. Desktop/mobile captures under
`.agent/evidence/screenshots/` show the restored footer in the unchanged homepage.
Completed implementation detail is in the corresponding archive history.

## Limitations, Remaining Work, and Open Questions

Interactive favicon cache behavior may still require a human hard-refresh check, but
the generated files, dimensions, MIME formats, relationships, and production markup
are deterministic. Large raster and animation payloads are intentionally unchanged
here and are the complete scope of the next asset-performance ExecPlan.

## Possible Article Angles

- Why tiny migration regressions deserve generated-output contracts.
- Keeping SPDX metadata enforceable without shipping it in every page.
- Replacing a React icon runtime with static Astro SVG while preserving provenance.

## Suggested Narrative

Frame this as finishing work after a successful platform migration: the major routes
were correct, but identity affordances and invisible source metadata still needed a
purpose-built correction rather than being dismissed as cosmetic details.

## Claims Requiring Human Review

Brand owners should confirm long-term use of the legacy Twitter glyph versus an X
glyph. Legal reviewers may independently verify Font Awesome attribution language;
the implementation retains the package's published license metadata and does not
claim ownership of any social mark.
