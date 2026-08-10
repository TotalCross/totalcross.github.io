<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration state

- Active milestone: M4 — versioning, changelog, and release metadata.
- Active slice: replace Gatsby starter package identity with the repository's real
  metadata, establish the Astro cutover as v1.0.0, and document reproducible release
  and changelog rules without creating a tag yet.
- Last completed logical slice: M6 isolated optional DEV/Medium distribution.
- Active paths: `package.json`, `CHANGELOG.md`, release documentation and checks, plus
  focused state/evidence updates.
- Next concrete action: set package/repository metadata and v1.0.0, add Keep-a-
  Changelog structure and release procedure, then implement the package/changelog
  consistency dry-run check required to close M4.
- Validation completed: M0-M3 remain closed. M6 adapter tests passed 6/6, covering
  default-off behavior, opted-in DEV payload generation, canonical create/update
  idempotency, supported Medium preparation, and workflow isolation. Three CLI dry
  runs confirmed the opted-in DEV draft payload, default DEV skip, and manual Medium
  import plan without credentials, network writes, or live publication.
- Environment limitation: the Codex in-app Browser has no available backend and will
  not be retried or treated as a blocker. Repository-local automation, headless
  Playwright, screenshots, and command-line validation are the fallback path.
- Active decisions: `site` at original revision `999f35b` remains the authoritative
  legacy source and `master` must never be merged. Astro stays isolated under
  `astro/` while Gatsby recovery remains operational; M7 performs the final source
  layout and asset move after route parity.
- Blockers: none. GitHub read access is available and current permissions report
  admin.
- Deliberate out-of-scope files: deployment and Gatsby cleanup remain for later
  milestones; no remote tag or GitHub Release may be created during M4.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/astro-site-migration.md`.
