<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Correct post-migration favicon, iconography, and rendered SPDX metadata

This ExecPlan follows `AGENTS.md` and `.agent/PLANS.md` in
`TotalCross/totalcross.github.io`. Execute it before
`.agent/plans/site-asset-performance-optimization.md`.

## Purpose / Big Picture

Correct the visible regressions found after the Gatsby-to-Astro production cutover
without redesigning the site.

At completion:

- the TotalCross favicon and manifest/site icons work consistently;
- social/external-link iconography uses meaningful brand icons rather than text
  initials or placeholders;
- the current TotalCross visual identity and destinations remain intact;
- project SPDX metadata stays present and automatically validated in source but is
  not emitted repeatedly into generated HTML;
- renderable Markdown/MDX follows the same source-only SPDX rule;
- all changes remain compatible with the current Astro `main` -> GitHub Pages
  artifact deployment.

Do not change the large-image delivery strategy in this plan. Asset performance is
handled by the follow-up ExecPlan.

## Working Set and Resume Protocol

Use:

- `.agent/state/post-migration-visual-corrections.md` — first read on resume;
- `.agent/evidence/post-migration-visual-corrections.md` — concise commands,
  generated-output checks, and screenshot/manual evidence;
- `.agent/archive/post-migration-visual-corrections-history.md` — completed detail;
- `.agent/reports/post-migration-visual-corrections-editorial.md` — final factual
  handoff using the headings required by `.agent/PLANS.md`.

Read `AGENTS.md` and `.agent/PLANS.md` once at start. Read
`.agents/skills/license-validation/SKILL.md` when modifying header policy and
`.agents/skills/logical-commits/SKILL.md` before staging. Use the legacy `site`
branch and `.agent/baseline/screenshots/` only for targeted parity questions; do
not reopen the complete migration audit.

Keep implementation and active planning files ideally below 20 KB or about 600
lines. Split a helper/test when responsibility becomes unclear rather than growing
a monolithic file.

## Progress

- [x] M0 — Confirm the narrow regression baseline.
- [x] M1 — Restore favicon and social/external icon parity.
- [x] M2 — Keep SPDX metadata source-only while preserving validation/fix behavior.
- [ ] M3 — Final correction validation and handoff to asset optimization.

Update only at logical commits or milestone closure.

## Current Architecture and Scope

Production source is `main`; ignored `dist/` is deployed by
`.github/workflows/pages.yml` as a GitHub Pages artifact. Do not reintroduce Gatsby,
React, or a generated deployment branch.

`public/favicon.ico`, `public/favicon-32x32.png`, `public/icons/**`, and
`public/manifest.webmanifest` exist. `src/layouts/BaseLayout.astro` currently links
the ICO but favicon behavior is visibly broken, so the icon files and head contract
need verification rather than assumption.

`src/components/SiteFooter.astro` contains GitHub, Twitter/X, Telegram, YouTube,
Instagram, and LinkedIn destinations but renders short text initials. The legacy
Gatsby footer used Font Awesome Free brand icons and external links opened with
`target="_blank"` plus `rel="noopener noreferrer"`.

The license validator currently classifies `.astro` as HTML-comment content and
inserts its header after frontmatter. Astro emits that comment into HTML. Similar
rendered comments must not leak from Markdown/MDX content. Existing REUSE ownership
boundaries remain authoritative, especially for brand/customer/third-party files.

## Execution Policy

Start from current `main` on a focused branch such as
`fix/post-migration-visual-corrections`. Preserve unrelated local changes.

Commits must be logical, descriptive, in English, and follow Conventional Commits.
Suggested boundaries:

- `fix(icons): restore site and social iconography`
- `fix(license): keep SPDX metadata out of rendered pages`
- `docs(plan): close visual correction milestone`

Do not create WIP commits. For this plan, the `logical-commits` skill's focused
validation means diff/scope checks such as `git diff --check` during implementation.
Do not run Astro builds, test suites, or visual matrices before each commit. Finish
the milestone implementation first and run its validation as the final stage.

Keep token use low: inspect known paths first, record conclusions once in evidence,
and avoid repeated repository listings or full-plan rereads.

Interactive Browser availability is optional. Generated-output inspection and
repository-local tooling are sufficient for plan continuation. Record only a narrow
manual visual verification item when human judgment is genuinely required.

## Plan of Work

### M0 — Confirm the narrow regression baseline

Goal: record only the evidence needed to prove these corrections.

Inspect:

- `src/layouts/BaseLayout.astro`;
- `src/components/SiteFooter.astro`;
- `public/favicon.ico`, `public/favicon-32x32.png`, `public/icons/**`, and
  `public/manifest.webmanifest`;
- legacy `site` branch footer/social components only as needed;
- `scripts/license-validation.mjs`, `scripts/license/policy.mjs`,
  `scripts/license/headers.mjs`, and their tests;
- `REUSE.toml` and the two existing agent skills.

Do not perform a broad site audit. Record one generated-HTML example showing SPDX
leakage and one targeted footer/icon comparison. Verify favicon binary type and
icon dimensions with lightweight local tools; do not modify files in M0.

Acceptance: the evidence file identifies the exact favicon/head issue, current
social placeholder behavior, and current SPDX emission mechanism.

Final validation: one focused inspection/report only; no production build is
required unless needed to capture the SPDX example and no prior `dist/` exists.

### M1 — Restore favicon and social/external icons

Goal: fix user-visible icon regressions while preserving the legacy identity.

For favicon/site icons:

- validate existing favicon/manifest files before replacing them;
- regenerate only broken/malformed derivatives from an existing canonical
  TotalCross brand asset; do not redraw or reinterpret the logo;
- update `BaseLayout.astro` with explicit valid favicon relationships, including the
  existing PNG/ICO and `manifest.webmanifest`;
- add an Apple touch icon only when it can be derived from the existing brand set
  without introducing a new design;
- keep all brand derivatives under the existing
  `LicenseRef-TotalCross-Brand` REUSE policy.

For social/external icons:

- replace footer initials with accessible SVG brand icons for GitHub, Twitter/X as
  intentionally selected from the legacy baseline, Telegram, YouTube, Instagram,
  and LinkedIn;
- do not reintroduce React or a client-side FontAwesome runtime;
- prefer one small `SocialIcon.astro` abstraction and either static SVG data with
  preserved upstream licensing or a build-time-only free icon source;
- keep link text available to assistive technology with `aria-label`;
- restore `target="_blank"` and `rel="noopener noreferrer"` for true external
  social destinations unless a current repository convention deliberately differs;
- audit migrated pages only for obvious confirmed missing icon affordances; do not
  redesign navigation or add speculative icons.

If an icon package is introduced, ensure no client-side JS is shipped merely to
render static brand SVG and record its license/provenance as required by existing
repository policy.

Acceptance: local output contains valid favicon/manifest links; the footer presents
recognizable icons at the intended size/hover behavior; destinations and accessible
labels are correct; no text-initial placeholder remains for the known social links.

Final milestone validation: run `npm run license:check`, `npm run check`, one fresh
`npm run build`, `npm run validate`, and a targeted local icon/head check once.
Capture only representative desktop/mobile evidence for the footer if automated
screenshots are already available; otherwise record one narrow manual check.

### M2 — Keep SPDX metadata source-only

Goal: preserve automatic licensing guarantees without inflating rendered HTML.

Update the license header model so renderable authored formats have non-emitting
metadata placement.

For `.astro`:

- add a dedicated header style that places the canonical JavaScript block comment
  inside Astro frontmatter rather than after it;
- when a component has no frontmatter, the fixer may create minimal frontmatter to
  contain the source-only header;
- inspection must recognize the new canonical placement;
- migration/fix logic may normalize the repository's exact known legacy HTML header
  form, but must continue refusing conflicting holders/licenses or unrelated
  third-party notices.

For `.md`/`.mdx`:

- use a source-only frontmatter comment or reviewed REUSE mapping that does not
  become article HTML;
- preserve editorial CC-BY-4.0 versus third-party/customer classifications already
  defined by policy;
- do not insert visible license boilerplate into article bodies solely to satisfy
  source validation.

Update `scripts/license/policy.mjs`, `scripts/license/headers.mjs`, and focused tests.
Keep files small; split Astro/frontmatter parsing helpers if the current module
would otherwise become difficult to understand.

Update `.agents/skills/license-validation/SKILL.md` only if its documented supported
placement/fix behavior changes. Do not weaken its conservative refusal policy.

Add a generated-output assertion to an appropriate existing site validation script
or a small focused helper: built `dist/**/*.html` must contain zero occurrences of
`SPDX-FileCopyrightText` and `SPDX-License-Identifier` authoring metadata. Avoid
checking legitimate visible prose that might discuss SPDX in future blog content;
scope the assertion to recognized header/comment forms when needed.

Acceptance: repository-wide licensing validation passes; fixer tests cover Astro and
renderable content placement; generated HTML no longer contains source headers; no
third-party ownership classification changes unintentionally.

Final milestone validation: run `npm run license:test`, `npm run license:check:all`,
`npm run check`, one fresh build, and `npm run validate` once. If a command fails,
fix the specific cause and rerun only the failed/dependent checks.

### M3 — Final correction validation and handoff

Goal: close visible corrections cleanly without duplicating the later performance
plan.

Update `CHANGELOG.md` `[Unreleased]` with favicon/social icon and source-only SPDX
corrections. Do not bump the package version yet; the follow-up asset-performance
plan owns the combined patch release unless the user explicitly chooses to release
these corrections independently.

Reconcile state/evidence/history and produce the factual editorial report. Record
any remaining manual icon/browser check as a narrow item, not as a blocker for asset
optimization if generated output is otherwise correct.

Level 3 closure runs once after implementation is complete:

    npm test
    npm run license:check:all
    npm run release:check
    npm run workflow:check
    npm run check
    npm run build
    npm run validate

Do not run `production:check` unless this plan is being independently published.

Acceptance: all commands pass, changelog is current, the branch is coherent, and the
state file points explicitly to the asset-performance ExecPlan as the next work.

## Surprises & Discoveries

- Observation: footer destinations survived migration but their legacy brand icons
  were replaced by text initials.
  Evidence: keep one focused before/after reference in evidence.

- Observation: SPDX HTML comments placed after Astro frontmatter are part of the
  rendered template and therefore appear in generated HTML.
  Evidence: keep one concise generated before/after sample.

- Observation: the 32px favicon derivative contains only a small red mark while the
  existing 192px manifest icon retains the complete TotalCross emblem.
  Evidence: file/dimension inspection and the focused M0 image comparison recorded
  in `.agent/evidence/post-migration-visual-corrections.md`.

Move resolved detail to the archive at milestone closure.

## Decision Log

- Decision: restore icons as static/build-time SVG rather than React runtime.
  Rationale: preserve the affordance without undoing the Astro static migration.
  Date: 2026-08-10.

- Decision: require SPDX metadata in source but not generated site HTML.
  Rationale: source ownership remains machine-verifiable while repeated rendered
  comments add no user value.
  Date: 2026-08-10.

- Decision: defer package version bump to the asset-performance follow-up plan.
  Rationale: these post-migration corrections should normally ship as one patch
  release rather than multiple artificial releases during one correction cycle.
  Date: 2026-08-10.

## Validation and Acceptance

Use validation levels from `AGENTS.md`. M1 and M2 normally close at Level 2/3 only
after implementation. M3 is the one combined Level 3 checkpoint.

Overall acceptance requires:

- functioning favicon/site icon relationships;
- recognizable social icons with accessible labels and correct external behavior;
- no known migrated icon placeholders for the audited scope;
- no source SPDX header comments emitted into generated HTML;
- unchanged routes, blog semantics, and GitHub Pages architecture;
- repository licensing policy and conservative fixer behavior preserved.

## Risks and Open Questions

- Brand/social icons have their own trademark/license context. Preserve upstream
  notices and do not treat third-party brand glyphs as Amalgam-authored MIT assets.
- Favicon cache can make a correct build look stale. Verify generated files/links
  before changing filenames repeatedly to defeat a local browser cache.
- Markdown/MDX frontmatter handling must not break content collection schemas.
- A future article may legitimately contain the string `SPDX-License-Identifier` in
  prose. Generated-output checks should detect emitted authoring headers rather than
  ban educational content indiscriminately.

## Idempotence and Recovery

Header fix operations must be idempotent. Running the fixer twice must not duplicate
frontmatter or headers. It must continue refusing ambiguous/third-party conflicts.

Favicon/icon generation must write explicit known paths and preserve REUSE mapping.
Do not mass-replace assets or alter unrelated branding.

If a visual correction is rejected, revert only that icon slice. SPDX work should
remain independently recoverable. Never force-update `main` or deployment refs.

## Outcomes & Retrospective

At each checkpoint record only commits, behavior restored, generated-output proof,
and validation result. Final narrative and article angles belong in the editorial
report, not the active plan.

## Revision Note

2026-08-10: Split from the broader post-migration correction milestone to keep the
active ExecPlan below repository size limits and separate visible regressions/license
output from media performance work.
