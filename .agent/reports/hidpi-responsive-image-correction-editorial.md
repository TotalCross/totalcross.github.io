<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# HiDPI responsive image correction editorial report

## Editorial Summary

The homepage's two remaining soft or distorted images now respect both rendered
CSS width and device pixel ratio without manufacturing detail from a small source.

## Original Plan versus Actual Outcome

The planned candidate and CSS corrections were delivered. Final visual validation
also found and corrected a narrow Tecdet height-stretching rule. PR #15 then passed
review automation, merged normally, and deployed successfully to production.

## What Changed

Tecdet gained 1200 and 1600 px AVIF/WebP candidates and a 1600 px fallback ceiling.
Home Automation retained its real 1024 px source and gained a 512 CSS px cap.
Reusable asset guidance now requires CSS-width × DPR planning and forbids upscaling.

## Decisions and Trade-offs

No historical Home Automation source exceeded 1024×600, so constraining display
size was preferred over larger files with no additional detail. Tecdet's genuine
3366×2092 source supports the larger candidates.

## Unexpected Problems and Discoveries

The first desktop capture isolated Tecdet distortion to a CSS width override that
did not reset the HTML height hint. A case-study-specific `height: auto` rule fixed
the ratio without affecting other `Picture` components.

## Validation and Measurable Results

License and Astro checks pass, all generated ratios are within 0.5 px of source
ratios after rounding, asset budgets pass, and 1440/DPR2 plus 390 px captures pass.
The homepage fallback proxy falls from 2.01 MiB to 1.63 MiB. Production selects the
1024 px Home Automation and 1200 px Tecdet AVIF candidates near their desktop DPR 2
maximums while preserving ratios and responsive layout.

## Useful Evidence and Examples

See `.agent/evidence/hidpi-responsive-image-correction.md` for dimensions,
candidate sizes, commands, payload measurements, and temporary screenshot paths.

## Limitations, Remaining Work, and Open Questions

The patch is deployed. Publishing `v1.0.2` requires the authorized metadata PR,
repeat deployment proof, annotated tag, and GitHub Release. No unrelated images
were audited or changed.

## Possible Article Angles

Responsive-image quality depends on physical pixels, and honest constraints can
be better than upscaling when a source master is resolution-limited.

## Suggested Narrative

Start with CSS-width × DPR math, contrast the source-rich and source-limited fixes,
then show how one visual pass separated encoder quality from CSS distortion.

## Claims Requiring Human Review

No production-rendering claim remains dependent on manual review; HTTPS, live DOM
measurements, delivered candidates, and headless captures established the result.
