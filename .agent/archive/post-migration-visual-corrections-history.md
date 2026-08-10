<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Post-migration visual corrections history

## M0 — Narrow regression baseline

Completed 2026-08-10 without implementation changes. The source head contract,
favicon/icon binaries, footer, legacy social component, license header model, and one
existing generated artifact were inspected directly. The regression is bounded to a
malformed tiny favicon plus incomplete head metadata, six footer text placeholders,
missing external-link protections, and source SPDX comments emitted into 19 generated
HTML documents. Large-image delivery remains assigned to the follow-up ExecPlan.

## M1 — Favicon and social/external icon parity

Completed 2026-08-10. Broken 16/32px favicon derivatives were regenerated from the
existing 512px TotalCross emblem, and a matching 180px Apple-touch icon was added.
The shared head now links ICO, PNG, touch, and manifest metadata; the cleaned manifest
describes all eight existing icon sizes under the root application scope.

The footer keeps all legacy destinations but replaces initials with the corresponding
Font Awesome Free Brands paths rendered by a small Astro component. Links have labels,
titles, new-tab behavior, and noopener/noreferrer protection; the generated site ships
no icon JavaScript. Build, route, content, icon-contract, and desktop/mobile visual
checks passed without a design or navigation change.

## M2 — Source-only SPDX metadata

Completed 2026-08-10. License policy now distinguishes rendered formats from ordinary
documentation. Astro headers are JavaScript blocks inside component frontmatter;
blog Markdown/MDX headers are YAML comments inside content frontmatter. Exact known
legacy HTML forms migrate idempotently, including the repository's no-blank-line
variant, while conflicts and partial metadata remain refusals.

The deliberate fixer migrated every project-authored renderable source. The mapped
Tecdet page and article retained their customer-material holder and license during a
manual placement-only move. Site validation now rejects recognized SPDX authoring
comments in generated HTML. The final M2 build contained zero such comments across
20 HTML documents while all existing routes, links, archives, feeds, sitemaps, drafts,
and translations continued to validate.
