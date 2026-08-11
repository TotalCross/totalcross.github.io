<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Site asset performance optimization state

- Active milestone: M3 — enforce asset budgets and add the reusable optimization skill.
- Active slice: separate tested budget policy from reporting, add `assets:check`, wire
  it after build in CI/Pages, and document the asset workflow in `AGENTS.md` plus a skill.
- Last completed logical slice: M2 WebM/MP4/poster delivery replaced the sole 8.3 MB
  GIF resource and removed the source GIF after recording reproducible commands.
- Active paths: asset reporting/validation/tests, package scripts, CI/Pages workflow
  checks, `AGENTS.md`, and `.agents/skills/asset-optimization/SKILL.md`.
- Next concrete action: inspect the current reporter and workflow validator contracts,
  then implement explicit hard/warning budgets without adding a test framework.
- Focused validation completed: Astro check has zero diagnostics; Node 24 built 18
  pages and 79 optimized images; generated media is 4,882,580 bytes; home/get-started
  proxies are 2.01/1.57 MiB; route/link/SPDX/content validation passed.
- Automated playback evidence: headless Chromium selected VP9/WebM at 270x480,
  reached readyState 4, remained unpaused at 2.50/13.07 seconds, and produced focused
  plus desktop/mobile screenshots with native controls and preserved responsive layout.
- Deferred validation: M3 Level 3 matrix waits until budgets, workflows, and skill are
  complete.
- Active decisions: hard budgets protect generated output, source masters stay report-
  only, and warnings remain visible but non-failing; the current two 500 KiB warnings
  need no exception because each remains below the 1 MiB hard ceiling.
- Blockers: none.
- Deliberate out of scope: release metadata, PR/merge/deploy, and production proof are M4.
- Resume command: `sed -n '1,180p' .agent/state/site-asset-performance-optimization.md && git status --short --branch`.
