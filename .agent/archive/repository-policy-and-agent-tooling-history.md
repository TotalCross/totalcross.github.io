<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Repository policy and agent tooling history

Completed milestone detail will be consolidated here when it no longer belongs in
the active plan or state file.

## P0 — Local planning contract and agent discovery

Completed 2026-08-10. The two supplied ExecPlans were normalized under
`.agent/plans/`. `.agent/PLANS.md` was copied byte-for-byte from the committed blob
at `TotalCross/totalcross-depot-tools` revision
`83528e55751b2dc749a9f54e0a443620552195be`. Root `AGENTS.md` now points to the
resume protocol, repository skills, size guideline, milestone-final validation,
four validation levels, and preservation of unrelated changes.

## P1 — Repository licensing policy and SPDX mapping

Completed 2026-08-10. The repository now carries root MIT terms, standard MIT and
CC BY 4.0 texts, and explicit brand and third-party references. `NOTICE.md` explains
that the repository has multiple licensing categories and names the Tecdet article
as customer material. `REUSE.toml` maps non-commentable project metadata, upstream
normalize.css, mixed/unverified artwork, the customer article, and clear brand
assets without guessing ownership. The stale package-level `0BSD` declaration was
changed to MIT; unrelated Gatsby starter metadata remains for the Astro migration.

## P2 — License validator and safe header fixer

Completed 2026-08-10. `scripts/license-validation.mjs` selects changed/untracked
files by default and tracked files with `--all`; `--fix` is explicit. Ordered
`REUSE.toml` annotations satisfy non-commentable or excluded paths. Project source
and original editorial files receive format-aware headers. The fixer adds missing
known headers and normalizes exact duplicates, but refuses partial, unknown-holder,
or different-license metadata. Focused Node tests cover the safety boundaries.
