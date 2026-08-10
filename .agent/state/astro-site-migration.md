<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration state

- Active milestone: none — M0A and M0-M7 are complete.
- Active slice: none — the migration and v1.0.0 release handoff are complete.
- Last completed logical slice: M7 legacy removal, clean-source validation, production
  proof, and archival rollback tags.
- Active paths: none.
- Next concrete action: normal source-only Astro maintenance under `AGENTS.md`, the
  README validation contract, and the documented release procedure.
- Validation completed: clean Node 24/npm 11.16 install at `aae6173` accepted 660
  packages with zero audit findings. Thirteen tests passed; the all-files license
  check accepted 143/143; release/workflow checks passed; Astro reported zero
  diagnostics; 18 native pages built; route/content validation reported 14 legacy
  routes, 20 HTML files, zero broken links, complete archives/RSS/sitemaps, excluded
  drafts, and paired translations. Pages run `31439686791` deployed the same source;
  the production checker accepted 28 required endpoints, real 404 behavior, metadata,
  and HTTP-to-HTTPS redirection.
- Environment limitation: the Codex in-app Browser has no available backend and will
  not be retried or treated as a blocker. Repository-local automation, headless
  Playwright, screenshots, and command-line validation are the fallback path.
- Active decisions: `main` is the sole production source; generated output is never
  committed. `site`, `master`, `site-2020`, and `site-2021` remain undeleted history,
  and their exact tips are protected by four annotated `archive/*-2026-08-10` tags.
- Blockers: none. GitHub read access is available and current permissions report
  admin.
- External follow-up: the final Pages API recheck still reports
  `https_enforced=false` and no GitHub-managed domain state for the Cloudflare-served
  custom domain. Public HTTPS and HTTP-to-HTTPS redirection pass; no further migration
  action is blocked.
- Deliberate out-of-scope files: legacy branch deletion remains prohibited. Optional
  DEV/Medium publication remains default-off and was not exercised with live writes.
- Resume command: `git status --short --branch && sed -n '1,180p' .agent/state/astro-site-migration.md`.
