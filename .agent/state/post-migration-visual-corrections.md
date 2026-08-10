<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Post-migration visual corrections state

- Active milestone: M2 — keep SPDX metadata source-only.
- Active slice: add non-emitting Astro and Markdown/MDX header placements, migrate
  known project headers conservatively, and reject emitted authoring headers in
  generated HTML.
- Last completed logical slice: M1 favicon and social/external icon restoration.
- Active paths: `scripts/license/policy.mjs`, `scripts/license/headers.mjs`, focused
  license tests, renderable authored files, site validation, and the license skill.
- Next concrete action: implement dedicated Astro/frontmatter header handling and
  focused tests before applying the fixer to known project-authored files.
- Focused validation completed: M1 license check passed; Astro reported zero
  diagnostics; 18 pages built; route/content validation passed; generated assertions
  found four head links, six accessible protected social SVG links, eight manifest
  icons, and zero client scripts. Desktop/mobile screenshots were inspected.
- Deferred validation: M2 repository-wide license, Astro, build, and generated-output
  validation wait until its complete implementation and header migration.
- Active decisions: preserve the legacy destinations and TotalCross emblem; Font
  Awesome Free Brands is build-time-only with its CC BY/MIT provenance documented.
- Blockers: none.
- Deliberate out of scope: image payload optimization belongs to the next ExecPlan.
- Resume command: `sed -n '1,180p' .agent/state/post-migration-visual-corrections.md && git status --short --branch`.
