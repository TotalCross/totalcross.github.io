<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# HiDPI responsive image correction evidence

## 2026-08-11T01:29:50Z — H1 rendering geometry

- Revision: `978865163247cf88f74d8c5602591819ff8b77f5`.
- Sources: `home_homeapp` is 1024×600 (blob `911d7b8`, ratio 128:75);
  `home_tecdet` is 3366×2092 (blob `9942852`, ratio 1683:1046).
- Existing variants: `home_homeapp` has 480×281, 768×450, and 1024×600
  AVIF/WebP files; `home_tecdet` has 360×224, 600×373, and 900×559
  AVIF/WebP files. Integer rounding accounts for the one-pixel height differences.
- Existing markup retains AVIF preference, WebP fallback, alt text, and lazy
  loading. Tecdet also emits an unnecessary 3366×2092 fallback WebP outside its
  responsive candidate list.
- Geometry: at a 1440 CSS px viewport, the 1440 px container with 80 px gutters
  and an 86.4 px two-column gap yields about 596.8 CSS px per column, requiring
  about 1193.6 physical px at DPR 2.
- Narrow source search: all historical `home_homeapp` blobs are 1024×600 or
  smaller (1024×600, 820×480, 410×240, and 205×120). No genuine higher-resolution
  repository source exists, so source replacement/upscaling is rejected.
- Limitation: visual validation remains deferred until the single final production
  build after implementation.

## 2026-08-11T01:33:00Z — H4 first-build visual finding

- Commands: `npm run build`, generated-output inspection, `npm run assets:check`,
  and headless Edge at 1440 CSS px with DPR 2.
- Result: source candidates, AVIF/WebP delivery, and payload policy passed, but the
  desktop screenshot exposed Tecdet vertical stretching. Generated files retained
  the 1683:1046 source ratio, isolating the defect to the existing case-study CSS
  width override without `height: auto`.
- Action: add the narrow `.case-study > picture img { height: auto; }` safeguard and
  perform one replacement final build/visual pass. The extra build is necessary
  because the first visual pass found a concrete acceptance failure.

## 2026-08-11T01:35:30Z — H4 final validation

- Revision under validation: working tree based on `9788651`.
- Commands: `git diff --check`; `npm run license:check` (5/5 compliant);
  `npm run license:check:all` (175/175 compliant, 73 mapped); `npm run check`
  (54 files, zero diagnostics); replacement-final `npm run build`; generated
  markup/dimension assertions; `npm run assets:check`; and headless Edge captures.
- Final candidates: Home Automation 480/768/1024 in AVIF and WebP, with a 512 CSS
  px cap; Tecdet 480/768/1200/1600 in AVIF and WebP, with a 1600 px fallback.
- Ratio proof: every generated width/height pair is within 0.5 px of its source
  ratio after integer rounding; worst observed error is 0.415 px.
- DPR proof: at 1440 CSS px the Tecdet `sizes` value caps at 600 px, so DPR 2
  targets the exact 1200 px candidate. At 390 px the 350 px declared slot selects
  480 px at DPR 1 or 768 px at DPR 2. Home Automation caps at 512 CSS px, so its
  1024 px source is not exceeded at normal desktop DPR 2.
- Payload: `assets:check` passes with zero failures and one unchanged unrelated
  warning. The homepage fallback proxy is 1,713,535 bytes (1.63 MiB), down from
  the prior 2,111,330-byte (2.01 MiB) evidence. The responsive Tecdet set grows by
  100,669 bytes in generated output while eliminating the unused 605,226-byte
  3366 px fallback; browser-selected mobile and DPR 1 candidates remain compact.
- Visual: headless Edge at 1440 CSS px/DPR2 (2880 px capture) and 390 CSS px shows
  both images at their original landscape ratios, the 512 px Home Automation cap,
  unchanged content/order, and responsive mobile stacking. Temporary screenshots:
  `/tmp/totalcross-hidpi.ZEK5v6/home-1440-dpr2-final.png` and
  `/tmp/totalcross-hidpi.ZEK5v6/home-390-final.png`.
- Limitation: no deployment or post-deployment capture was requested or performed.

## 2026-08-11T01:38:00Z — H4 logical commits

- `b9326e5` — `fix(images): correct homepage HiDPI rendering`.
- `b6110f8` — `docs(agents): account for HiDPI image sizing`.
- Status: implementation and reusable guidance recorded without unrelated files;
  plan/state/evidence/editorial closure follows as its own documentation commit.
