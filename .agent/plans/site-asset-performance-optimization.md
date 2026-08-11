<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Optimize site assets, animated media, and performance budgets

This ExecPlan follows `AGENTS.md` and `.agent/PLANS.md` in
`TotalCross/totalcross.github.io`. Execute it after
`.agent/plans/post-migration-visual-corrections.md`.

## Purpose / Big Picture

Materially reduce the TotalCross site's page payload after the Astro migration while
preserving visual identity, routes, content, and licensing boundaries.

At completion:

- large local raster media is delivered through Astro's optimized image pipeline;
- responsive sizes and modern formats prevent multi-megabyte source PNG/JPEG files
  from becoming normal browser downloads;
- PNG crunching/resizing is applied where PNG remains justified;
- the roughly 8.3 MB animated GIF is replaced by much smaller web video delivery
  when visual behavior is preserved;
- generated asset sizes and a deterministic representative page-payload proxy are
  enforced in pull-request CI and the GitHub Pages build;
- `.agents/skills/asset-optimization/SKILL.md` documents the normal media workflow;
- the correction cycle is finalized as a SemVer patch release, normally `v1.0.1`,
  with measured before/after evidence.

## Working Set and Resume Protocol

Use:

- `.agent/state/site-asset-performance-optimization.md` — first read on resume;
- `.agent/evidence/site-asset-performance-optimization.md` — before/after sizes,
  commands, build output, budget results, and limitations;
- `.agent/archive/site-asset-performance-optimization-history.md` — completed detail;
- `.agent/reports/site-asset-performance-optimization-editorial.md` — factual final
  handoff using `.agent/PLANS.md` editorial headings.

Read `AGENTS.md`, `.agent/PLANS.md`, and the state file first. Read the previous
correction plan only if its state identifies an unresolved dependency. Use the
`logical-commits` and `license-validation` skills only when needed. Do not reread
legacy migration archives for routine image work.

Keep implementation and plan files ideally below 20 KB or about 600 lines. Split
asset-report parsing, budget configuration, or tests into focused files when useful.

## Progress

- [x] M0 — Capture one compact source/build performance baseline.
- [x] M1 — Route static raster content through Astro image optimization.
- [x] M2 — Replace oversized animated GIF delivery with efficient web video.
- [x] M3 — Enforce asset budgets and add the asset-optimization skill.
- [x] M4 — Close `v1.0.1` and optionally verify production.

## Current Architecture and Scope

Production source is `main`; `dist/` is ignored and published by
`.github/workflows/pages.yml` through the modern Pages artifact flow. The project
uses Astro 7. Do not reintroduce Gatsby/React or generated deployment branches.

Many local images under `src/assets/` are imported as Astro `ImageMetadata` but then
passed to native `<img src={asset.src}>`, which can bypass build-time transformation.
Known priority sources include:

- `home_tecdet.png` — about 10.8 MB;
- `home_coffee.png` — about 3.0 MB;
- `led-totalcross.gif` — about 8.3 MB;
- `tecdet.jpg`, `sample_banner.png`, `bghome_sitetc.png`, and `home_printer.png` —
  each around 1 MB or more.

The home page is the first optimization target. Other pages should be audited by
script for large media rather than by repeatedly reading the entire asset tree.

Astro provides `Image`, `Picture`, and `getImage` from `astro:assets`; its local
image processing uses Sharp by default. The implementation should make Sharp a
direct build dependency when required for deterministic local/CI behavior instead
of relying on an accidental transitive install.

Existing `REUSE.toml` classifies historical `src/assets/**` as third-party/mixed
material unless overridden. Format conversion or derivative creation must preserve
that provenance rather than assigning Amalgam MIT ownership.

## Execution Policy

Start from the completed visual-correction branch result or an updated `main`, then
create a focused branch such as `perf/site-assets` if the earlier branch has already
merged. Preserve unrelated changes.

Commits must be logical, descriptive, English Conventional Commits. Typical scopes:

- `chore(perf): add deterministic asset reporting`
- `perf(images): optimize responsive homepage media`
- `perf(images): optimize remaining oversized raster assets`
- `perf(media): replace oversized animated gif delivery`
- `ci(perf): enforce generated asset budgets`
- `docs(agent): add asset optimization workflow`
- `chore(release): prepare v1.0.1`

Do not run test/build matrices before each commit. During implementation use only
cheap scope/diff checks. Complete the milestone, then run its validation as the last
implementation stage. If it fails, fix the narrow cause and rerun only the failed or
directly dependent check.

Keep token consumption low: use scripts to inventory sizes, inspect only referenced
components, record measurements once, and avoid repeatedly listing binary assets or
printing large generated HTML/CSS.

Interactive Browser is optional. Use build-output checks and existing local tooling.
A human visual check can be recorded narrowly when needed but cannot become a
repeated execution blocker.

## Plan of Work

### M0 — Capture baseline and build asset reporting

Goal: create one reproducible measurement path before optimizing files.

Create `scripts/asset-validation.mjs` with report-only behavior first. Split helper
logic under `scripts/assets/` if the main file approaches size/responsibility limits.
The reporter should inspect tracked source media and generated `dist/` media and
print concise deterministic summaries including path, extension, byte size, and the
largest offenders. Include image dimensions when the selected image library can
obtain them cheaply.

Add a deterministic static page-payload proxy for `/` and the page(s) currently
referencing `led-totalcross.gif`. The proxy should sum local fallback resources
referenced by built HTML/CSS and clearly label itself as a proxy rather than claiming
to reproduce browser `srcset` selection, compression, caching, or network timing.
If existing local headless tooling can cheaply provide actual transferred bytes,
record it as supplementary evidence only.

Add `npm run assets:report` as a non-failing reporting command. Do not establish hard
CI limits until after optimization.

Record M0 before values in evidence, including the known large sources and one fresh
production build. Do not change image quality or references in M0.

Acceptance: one command reproduces source/build top offenders and payload proxy, and
the evidence file contains the before baseline.

Final milestone validation: one fresh `npm run build` followed by one
`npm run assets:report` and focused reporter tests if parsing logic needs tests.

### M1 — Optimize static raster delivery

Goal: ensure the browser receives appropriately sized/encoded media instead of
multi-megabyte originals.

Use Astro's `astro:assets` pipeline:

- `<Picture>` for large screenshots/photographic content that benefits from AVIF and
  WebP plus responsive widths;
- `<Image>` for local raster images that only need optimized resizing;
- `getImage()` for CSS backgrounds and other generated image URLs;
- SVG for true vector icons/logos;
- native `<img>` only for deliberately untransformed small assets where the reason
  is self-evident.

Make `sharp` an explicit dependency if necessary. Configure reasonable encoder
options in `astro.config.mjs` only when a project-wide default is clearly beneficial;
do not maximize compression effort at the expense of extreme build times.

Optimize the home page first:

- `home_tecdet.png`;
- `home_coffee.png`;
- `home_printer.png`;
- hero imagery and `bghome_sitetc.png`;
- `bg_wavesdark.png` and any other CSS background that currently uses a raw
  `ImageMetadata.src` URL;
- other home raster assets reported as material contributors.

Preserve aspect ratios/intrinsic dimensions to avoid CLS. Keep below-fold imagery
lazy. Do not lazy-load the critical LCP image when doing so would delay startup.

Then use the report to find remaining local raster sources above 500 KiB on other
pages and apply the same pattern where it materially reduces delivery.

PNG crunching is a secondary optimization for assets that remain PNG. Use lossless
or visually reviewed compression, remove unnecessary metadata, and resize site-only
sources that are clearly overprovisioned. Do not destructively replace a large
source with no recovery path when it has an identified archival/reuse purpose.
Photographic content should not remain PNG merely for historical reasons when
modern lossy delivered formats preserve the appearance.

Targets after M1:

- no ordinary delivered raster fallback over 1 MiB without a documented exception;
- report a warning for ordinary generated raster output above 500 KiB;
- reduce the representative delivered `home_tecdet` image by at least 90% relative
  to its original source size;
- reduce representative `home_coffee` delivery by at least 80%;
- reduce the home static payload proxy at least 70% from M0, with a preferred target
  below 3 MiB for representative desktop output.

If a target causes visible degradation, record the quality/size tradeoff and choose
the smallest visually acceptable output rather than blindly lowering quality.

Acceptance: large site images are transformed responsively, the original 10.8 MB
and 3 MB home sources are not normal delivered fallbacks, and targets pass or have
explicit evidence-backed exceptions.

Final milestone validation: run focused image/reporter tests if present,
`npm run check`, one fresh build, `assets:report`, `npm run validate`, and targeted
visual comparison only for pages changed in this milestone.

### M2 — Replace oversized animated GIF delivery

Goal: preserve animation while eliminating the roughly 8.3 MB GIF as a normal page
resource.

Locate every reference to `src/assets/led-totalcross.gif` and confirm its role. Make
one-time WebM and MP4 derivatives using a deterministic conversion command recorded
in evidence. Do not make FFmpeg a normal site-build dependency unless future source
regeneration is explicitly required. Generate a compact poster when it improves
loading/appearance.

Replace the GIF with semantic video markup when behavior matches the current asset:
`autoplay`, `muted`, `loop`, and `playsinline` as applicable. Use
`preload="metadata"` or a more conservative option for below-fold media. Preserve
rendered dimensions and responsive behavior.

Keep/remove the original GIF based on remaining source/reference value. If it is no
longer tracked, Git history plus the recorded conversion command must be sufficient
to reproduce derivatives.

Preserve the original asset's third-party/legacy REUSE classification for converted
derivatives. Do not add Amalgam MIT ownership merely because the container format
changed.

Target: normal video/poster delivery is at least 75% smaller than the original GIF,
preferably substantially more, without obvious playback regression.

Acceptance: no normal page references the large GIF and animation behavior plus size
reduction are recorded.

Final milestone validation: one build, one asset report, `npm run validate`, and one
targeted local playback/visual check. Do not rerun the full M1 visual matrix.

### M3 — Enforce budgets and add the asset-optimization skill

Goal: make optimized delivery the repository default rather than a one-time cleanup.

Promote the reporter into stable commands:

- `npm run assets:report` — concise non-failing inventory;
- `npm run assets:check` — fails generated-output budget violations;
- `npm run assets:test` — focused Node tests when budget/parser logic is non-trivial.

Budgets primarily protect `dist/`. Large source masters may warn but should not fail
when correctly transformed for delivery. If exceptions are required, use a small
reviewed config with path, threshold, and reason rather than hidden filename logic.

At minimum enforce:

- ordinary generated raster hard limit established in M1;
- warning threshold for large generated raster output;
- no oversized GIF delivered by the site;
- home static payload proxy stays within its post-M1 budget;
- source media above review thresholds appears in reports.

Add `npm run assets:check` after `npm run build` in both
`.github/workflows/ci.yml` and `.github/workflows/pages.yml`. Extend
`scripts/check-workflows.mjs` if it validates mandatory CI steps.

Create `.agents/skills/asset-optimization/SKILL.md`. It should tell future agents to:

- inspect source dimensions, rendered size, format, and page role before editing;
- prefer Astro `Image`/`Picture`/`getImage` for local raster content;
- use PNG crunching when PNG is actually justified;
- prefer efficient web video over large GIF animation;
- preserve asset copyright/license/provenance and use `license-validation` when
  creating derivatives;
- measure before/after bytes and document meaningful exceptions;
- keep files/responsibilities small;
- avoid repeated tests/builds and validate only at the relevant milestone boundary.

Reference the new skill from `AGENTS.md` for image/media additions, oversized asset
review, and CI budget failures.

Acceptance: CI and Pages enforce the same budgets, workflow validation knows about
the new step where appropriate, and the skill provides a short reusable procedure.

Final milestone validation: run `assets:test`, `license:check:all`,
`workflow:check`, `check`, one fresh build, `assets:check`, and `validate` once.

### M4 — Patch release and optional production closure

Goal: reconcile version/changelog and verify the published result when state-changing
operations are authorized.

Carry forward the `[Unreleased]` corrections from the previous visual-corrections
plan. Add measured image/media/performance changes. Unless repository state has
changed materially, prepare patch release `1.0.1` in `package.json`, lockfile, and
`CHANGELOG.md` because this cycle fixes regressions/performance without introducing
a new incompatible site capability.

Before push, PR, merge, tag, or production verification, recheck remote `main`, the
active branch, current tags, Pages workflow state, and unrelated local changes.
Commits are part of normal execution; push/PR/merge/tag happen only when the
execution goal or explicit user instruction authorizes them. Never move an existing
tag or force-update `main`.

Final Level 3 validation, once after all implementation is complete:

    npm test
    npm run license:check:all
    npm run release:check
    npm run workflow:check
    npm run check
    npm run build
    npm run assets:check
    npm run validate

Use a clean clone only when closing an authorized release/deployment boundary. If
production publication is authorized, verify the synchronous workflow result and
then run `npm run production:check` plus a small production asset check. Confirm the
large originals/GIF are not normal production resources and record actual production
before/after observations when available. Browser tooling remains optional.

Acceptance: version/changelog are coherent, final checks pass, measured reduction is
recorded, and authorized production serves optimized media without route/visual
regression.

## Surprises & Discoveries

- Observation: Astro image metadata imports were frequently reduced to native
  `.src` URLs, bypassing the transformation benefit of `astro:assets`.
  Evidence: record only confirmed affected paths/output URLs.

- Observation: a few legacy assets dominate page bytes, so pipeline correction has
  higher leverage than broad micro-optimization of already-small icons.
  Evidence: preserve top-offender before/after table in the evidence file, not here.

Move resolved items to archive at milestone boundaries.

## Decision Log

- Decision: fix delivery architecture first, then crunch sources that still benefit.
  Rationale: responsive transformation prevents oversized originals from escaping
  again and scales to future content.
  Date: 2026-08-10.

- Decision: use Astro `Picture`/`Image`/`getImage` and Sharp rather than a separate
  image CDN/service for this static GitHub Pages site.
  Rationale: current needs can be satisfied at build time without new runtime
  infrastructure.
  Date: 2026-08-10.

- Decision: use video rather than attempting to preserve GIF as the delivery format
  when animation parity is achievable.
  Rationale: the observable animation matters; the legacy container format does not.
  Date: 2026-08-10.

- Decision: enforce budgets primarily on generated output while reporting large
  source masters separately.
  Rationale: user download cost is the primary defect, while source preservation can
  sometimes be deliberate.
  Date: 2026-08-10.

## Validation and Acceptance

Follow `AGENTS.md` levels. M0 is focused reporting. M1-M3 close at Level 3 only after
each milestone implementation. M4 runs the combined Level 3 matrix once and uses
Level 4 only for an authorized release/production boundary.

Never turn the final matrix into a per-commit requirement. Save large logs outside
the active plan; evidence stores command, revision, key byte counts, result, and
limitation.

Overall acceptance requires:

- large raster pages no longer deliver original multi-megabyte source images as
  ordinary fallbacks;
- `led-totalcross.gif` is not a normal production download;
- M1/M2 reduction targets pass or have explicit measured visual exceptions;
- asset budgets run in PR CI and Pages build;
- asset-optimization skill and AGENTS routing are present;
- existing route, blog, licensing, favicon/icon, and visual-identity behavior remains
  correct;
- final release/site validations pass.

## Risks and Open Questions

- Some `src/assets/**` files are third-party/mixed provenance. Derivatives retain
  those classifications.
- Very large dimensions can trigger Sharp input-pixel safety limits. Prefer safely
  resizing/crunching the specific source; do not globally disable limits without a
  documented need.
- AVIF can reduce size but increase build cost. Use measured, reasonable encoder
  effort rather than maximum settings by default.
- GIF timing/transparency may require conversion tuning. Preserve playback behavior,
  not the GIF format.
- Static payload proxy is a regression guard, not an exact browser/network model.
  Keep that limitation explicit.

## Idempotence and Recovery

Reporting/check commands are read-only and safe to rerun. Astro writes transformed
media only to generated `dist/`.

One-time media conversion writes explicit new derivative paths and records the
command/input hash before source removal. Do not silently overwrite reviewed media.

If an optimization is visually unacceptable, revert only that asset/component slice
and retain measurement evidence. Do not roll back unrelated corrections or budget
tooling.

License fixing stays conservative. Never mass-relicense brand/customer/third-party
assets to solve a validation failure.

Never force-update `main`, tags, or deployment refs. Recheck remote state before
state-changing GitHub operations and preserve unrelated local work.

## Outcomes & Retrospective

At milestone closure record factual commits, byte reductions, budget results, and
validations. Final report should compare the original dominant assets and home/page
payload proxy with the delivered result, distinguish measurements from estimates,
and identify remaining large media that was intentionally retained.

## Revision Note

2026-08-10: Split from the broader correction milestone so media/performance work is
independently resumable and both active plans remain below repository soft size
limits.
