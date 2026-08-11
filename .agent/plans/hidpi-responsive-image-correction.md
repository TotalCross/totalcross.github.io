<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Correct HiDPI responsive image rendering

This ExecPlan follows `AGENTS.md` and `.agent/PLANS.md`.

## Purpose / Big Picture

Correct the two remaining visual regressions observed after the post-migration
asset optimization:

- `home_homeapp` appears soft/distorted on HiDPI displays because the largest
  generated responsive variant is only 1024 px wide while the image can render
  near 500–600 CSS px on desktop.
- `home_tecdet` appears soft/distorted for the same reason, even though its source
  image has enough intrinsic resolution to generate substantially larger variants.

The goal is to preserve the current optimized payload while ensuring these images
remain visually sharp at common desktop Retina/HiDPI device pixel ratios.

This is a focused patch. Do not reopen the broader asset optimization work unless
new evidence shows another image has the same defect.

## Working Set and Resume Protocol

Use these support paths if execution is interrupted:

- `.agent/plans/hidpi-responsive-image-correction.md` — this ExecPlan.
- `.agent/state/hidpi-responsive-image-correction.md` — first read on resume;
  rewrite rather than append.
- `.agent/evidence/hidpi-responsive-image-correction.md` — append concise
  measurements and validation results.
- `.agent/archive/hidpi-responsive-image-correction-history.md` — completed
  implementation detail only if the active plan needs consolidation.
- `.agent/reports/hidpi-responsive-image-correction-editorial.md` — optional
  final factual report if repository policy requires one for this patch.

On resume, read the state file first, then only the relevant section of
`src/pages/index.astro`, the asset optimization skill, and the exact source assets
involved. Do not reread the completed migration or prior optimization ExecPlans.

Before changing files, inspect:

    git status --short
    git rev-parse HEAD
    git branch --show-current

Preserve unrelated local changes.

## Progress

- [x] (2026-08-11T01:29:50Z) Confirmed source dimensions, historical
      `home_homeapp` limits, current responsive variants, and normal desktop
      rendering geometry; see `.agent/evidence/hidpi-responsive-image-correction.md`.
- [x] (2026-08-11T01:29:50Z) Corrected Tecdet responsive candidates and fallback
      dimensions, and constrained Home Automation to its real DPR 2 source budget.
- [x] (2026-08-11T01:29:50Z) Updated asset-optimization guidance to account for
      maximum CSS width, target DPR, and the prohibition on source upscaling.
- [x] (2026-08-11T01:35:30Z) Passed license, Astro, production output,
      aspect-ratio, asset-budget, and 1440/DPR2 plus 390 px visual validation;
      see `.agent/evidence/hidpi-responsive-image-correction.md`.
- [x] (2026-08-11T01:38:00Z) Recorded final evidence and created logical
      Conventional Commits for implementation and reusable guidance; this plan's
      support files close in the final documentation commit.

## Current Architecture and Scope

The homepage is implemented in:

    src/pages/index.astro

Both affected images are imported from:

    src/assets/home_homeapp.png
    src/assets/home_tecdet.png

They are rendered through Astro `Picture`.

Current relevant behavior is approximately:

    home_homeapp:
      widths = [480, 768, 1024]
      sizes = "(max-width: 768px) 100vw, 50vw"

    home_tecdet:
      widths = [360, 600, 900]
      sizes = "(max-width: 768px) 100vw, 50vw"

The source dimensions observed during the prior audit were approximately:

    home_homeapp: 1024 x 600
    home_tecdet: 3366 x 2092

The issue is not an aspect-ratio mismatch in the AVIF encoder. The generated
variants preserve the original ratio. The problem is that the browser can render
the images near 500–600 CSS pixels wide on desktop while a DPR 2 display ideally
needs roughly 1000–1200 physical pixels.

`home_tecdet` can safely generate larger variants from its high-resolution source.

`home_homeapp` cannot gain real detail beyond 1024 source pixels. Do not upscale
the source merely to satisfy a responsive-width list.

Out of scope:

- redesigning homepage sections;
- changing image content;
- replacing the current Astro image pipeline;
- reworking unrelated assets;
- broad performance-budget changes;
- changing existing licensing/provenance classification.

## Plan of Work

### Milestone H1 — Confirm rendering geometry

Goal: verify the exact relationship between source dimensions, generated variants,
and rendered CSS width before changing responsive configuration.

Inspect only the two source assets and the two corresponding `Picture` usages.

Record:

- source width and height;
- aspect ratio;
- current `widths`;
- current `sizes`;
- expected maximum desktop CSS width;
- expected DPR 2 physical-pixel requirement;
- generated AVIF/WebP dimensions from one production build.

Do not run repeated builds during investigation. If the previous production
artifact already provides sufficient evidence, reuse it.

Acceptance:

- confirm that both generated images preserve source aspect ratio;
- confirm that `home_tecdet` is being capped below an appropriate HiDPI width;
- confirm that `home_homeapp` source resolution itself is the limiting factor.

No implementation changes are required in this milestone if existing evidence is
already sufficient.

### Milestone H2 — Correct Tecdet responsive variants

Goal: allow the browser to select a sufficiently sharp Tecdet image on HiDPI
desktop displays without forcing large downloads on smaller screens.

Update the Tecdet `Picture` widths to include larger variants. Prefer a concise set
such as:

    [480, 768, 1200, 1600]

or an equivalent set justified by the measured layout.

Keep responsive `sizes` accurate for the actual layout. Do not generate widths
larger than useful display conditions merely because the source permits them.

Retain:

- AVIF preferred format;
- WebP fallback;
- lazy loading;
- existing alt text;
- existing visual dimensions and layout.

Acceptance:

- a DPR 2 desktop viewport near the normal maximum rendered width can choose a
  source around 1200 px or larger when appropriate;
- mobile and DPR 1 clients still receive smaller responsive variants;
- aspect ratio remains unchanged;
- page layout remains visually identical.

Recommended logical commit:

    fix(images): improve Tecdet HiDPI responsive variants

### Milestone H3 — Correct Home Automation rendering

Goal: render `home_homeapp` sharply without creating fake detail through build-time
upscaling.

Because the source is only 1024 px wide, first search the repository for a
higher-resolution original or equivalent historical source using narrow filename
and asset-path searches only.

If a genuine higher-resolution source exists:

- replace the working source while preserving provenance/licensing;
- generate appropriate responsive widths, including an HiDPI-capable desktop
  variant;
- retain the same visible composition.

If no higher-resolution source exists:

- keep the 1024 px source as the maximum real variant;
- constrain the desktop rendered CSS width to approximately 512 px or another
  measured value that keeps DPR 2 rendering at or below the source width;
- preserve responsive mobile behavior;
- do not generate 1200/1600 px derivatives from the 1024 px source merely to
  satisfy DPR math.

Prefer a section-specific class or wrapper rather than changing global `Picture`
or `img` behavior.

Acceptance:

- the image is no longer browser-upscaled beyond its useful intrinsic resolution
  in the normal desktop layout;
- no new source upscale is introduced;
- aspect ratio and current design remain unchanged.

Recommended logical commit:

    fix(images): preserve home automation source resolution

### Milestone H4 — Harden asset optimization guidance

Goal: prevent the same optimization mistake from recurring.

Update:

    .agents/skills/asset-optimization/SKILL.md

Add a concise rule equivalent to:

> Responsive image widths must account for both maximum rendered CSS width and
> target device pixel ratio. For important photographic or screenshot content,
> provide approximately 2x the maximum expected CSS width when the source
> resolution permits it. Never upscale a low-resolution source merely to satisfy
> this rule; constrain rendered size or obtain a better source instead.

If the repository already has asset validation metadata or reporting that can
cheaply expose source width versus maximum responsive width, document that check.
Do not add a complex new framework for this patch.

Recommended logical commit:

    docs(agents): account for HiDPI image sizing

## Surprises & Discoveries

- Observation: the first 1440/DPR2 headless screenshot showed Tecdet stretched
  vertically even though its generated files preserved the source ratio. The
  existing case-study rule overrode image width without resetting the HTML height
  presentation hint; a narrowly scoped `height: auto` correction is required.
  Evidence: `.agent/evidence/hidpi-responsive-image-correction.md`.

- Observation: the affected AVIF files preserve the original image aspect ratio.
  The visual defect is therefore caused by insufficient responsive resolution or
  browser upscaling rather than encoder geometry.

- Observation: `home_tecdet` has enough source resolution to solve the issue with
  additional responsive variants.

- Observation: `home_homeapp` is source-limited at 1024 px and must not be
  artificially upscaled unless a higher-resolution original is found.

Move resolved discoveries to the history file only if this active plan grows
unnecessarily.

## Decision Log

- Decision: treat HiDPI sizing as `rendered CSS width × device pixel ratio`, not
  CSS width alone.
  Rationale: responsive image selection must supply sufficient physical pixels for
  Retina/HiDPI rendering.
  Date: 2026-08-10.

- Decision: do not upscale low-resolution source assets as a substitute for real
  source detail.
  Rationale: generated larger files would increase payload without improving
  fidelity.
  Date: 2026-08-10.

- Decision: preserve current site design and optimize only the image delivery and
  maximum rendered width.
  Rationale: this is a regression correction, not a redesign.
  Date: 2026-08-10.

## Validation and Acceptance

Tests and builds must be performed only after the implementation is complete, as
the final stage of this patch. Earlier focused commands are allowed only to resolve
a concrete uncertainty that blocks implementation.

Final validation should be proportional and focused.

Run:

    npm run license:check
    npm run check
    npm run build

Then inspect the generated homepage output and responsive image variants.

Confirm:

- `home_tecdet` has larger generated responsive variants suitable for DPR 2;
- `home_homeapp` is not rendered beyond the source-resolution budget, unless a
  verified higher-resolution source replaced it;
- generated width/height pairs preserve the original aspect ratio;
- no image is accidentally stretched by CSS;
- existing AVIF/WebP behavior remains;
- no unrelated asset payload regression occurs.

Perform one representative visual verification at:

- desktop around 1440 CSS px, preferably DPR 2;
- mobile around 390 CSS px.

Interactive Browser availability is not required. Use existing headless tooling,
generated screenshots, or a narrowly scoped human verification if necessary.
Browser unavailability must not block completion.

If repository policy requires the complete release-boundary matrix because this
patch is being published immediately, run it only once after the focused
validation is green.

## Commit Policy

Follow:

    .agents/skills/logical-commits/SKILL.md

Commits must:

- be written in English;
- follow Conventional Commits;
- contain one coherent responsibility;
- be descriptive rather than filename-oriented;
- avoid WIP/checkpoint commits;
- preserve unrelated local changes.

Do not run the complete validation matrix before every commit. Validation belongs
at the final patch/milestone boundary.

## Token and Execution Budget

Keep execution economical:

- read the state file first on resume;
- inspect only `src/pages/index.astro`, the two source assets, relevant generated
  variants, and the asset optimization skill;
- reuse prior production evidence instead of rebuilding repeatedly;
- avoid scanning all assets again;
- avoid rereading completed migration/performance plans;
- record dimensions and decisions once in the evidence file;
- use concise command output.

Implementation files should remain below approximately 20 KB or 600 lines when
practical. This patch should not require large new files.

## Risks and Open Questions

- A higher-resolution `home_homeapp` source may not exist in the current source
  tree. If unavailable, rendered-size constraint is the correct fallback.
- Excessive responsive widths can undo some payload improvements. Use only widths
  justified by actual rendered size and DPR.
- CSS constraints must be scoped so they do not unintentionally alter unrelated
  `Picture` components.
- If the visual defect persists after physical-pixel correction, investigate
  source image quality or browser decoding only then; do not broaden scope
  preemptively.

## Idempotence and Recovery

All implementation changes are source-only and safe to retry.

Do not edit generated `dist/` output.

Before any push or remote state-changing operation:

    git fetch --prune
    git status --short
    git rev-parse HEAD

Never force-update `main` or move an existing release tag.

If a responsive-width change causes unacceptable payload growth, revert only the
affected `Picture` configuration and retain the recorded measurements.

If a replacement `home_homeapp` source is introduced, preserve the old source in
Git history; do not delete unrelated historical assets during this patch.

## Outcomes & Retrospective

The focused patch retains the 1024×600 Home Automation source after proving no
higher-resolution repository version exists, caps its normal rendering at 512 CSS
px, and preserves its 480/768/1024 candidates. Tecdet now uses
480/768/1200/1600 AVIF and WebP candidates from the 3366×2092 source, with a
1600 px fallback ceiling and narrow `height: auto` protection. Generated ratios,
license checks, Astro check, asset budgets, and representative headless desktop and
mobile captures pass. The homepage fallback proxy improves from the prior 2.01 MiB
evidence to 1.63 MiB; no deployment was performed.

## Revision Note

Created as a focused follow-up to the completed post-migration visual and asset
optimization work. The scope is intentionally limited to the two remaining HiDPI
image regressions and the reusable guidance needed to prevent recurrence.
