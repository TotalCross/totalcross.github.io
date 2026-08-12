<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Audit and close dependency supply-chain exposure

This ExecPlan follows `AGENTS.md` and `.agent/PLANS.md`.

## Purpose / Big Picture

Audit the current Astro-based `main` dependency graph and the Node execution paths
used locally and in GitHub Actions. Every historical Dependabot alert named in the
request receives an evidence-backed disposition against the actually resolved
package version and path. Any applicable High or Critical issue is removed with the
smallest safe dependency change, and the complete Node 24 validation matrix proves
that the production site artifact still builds.

## Working Set and Resume Protocol

Read `.agent/state/dependency-supply-chain-audit.md` first. It identifies the active
slice and exact next command. Read this plan only for the active milestone. Search
`.agent/evidence/dependency-supply-chain-audit.md` for prior command summaries and
raw artifact paths. The user-facing matrix and final conclusions live in
`.agent/reports/dependency-supply-chain-audit.md`; the editorial handoff is
`.agent/reports/dependency-supply-chain-audit-editorial.md`.

The primary implementation paths are `package.json`, `package-lock.json`, scripts
under `scripts/`, and workflows under `.github/workflows/`. Generated `node_modules/`
and `dist/` are disposable and remain untracked.

## Progress

- [x] (2026-08-12) Confirmed a clean `main` at `5d09d93`, matching `origin/main`,
  and inspected the manifest, lockfile header, scripts, workflows, and prior state.
- [x] (2026-08-12) M0: Produced the clean Node 24 install, zero-finding audit,
  signature/attestation result, resolved-version inventory, and historical baseline.
- [x] (2026-08-12) M1: Dispositioned every requested advisory, reconstructed vanished
  alerts from the archived lock and authoritative ranges, and reviewed exploitability.
- [x] (2026-08-12) M2: Kept the already-fixed dependencies, pinned workflow actions,
  added audit/signature gates, passed focused workflow/license validation, and
  recorded the final implementation as `3888bbe` after M4 regression enforcement.
- [x] (2026-08-12) M3: Passed the complete Node 24 Level 3 matrix, generated and
  validated `dist/`, and finalized report, evidence, state, and editorial handoff.
- [x] (2026-08-12) M4: Preserved the five remaining named historical alerts as
  executable machine-readable regression cases and repeated Level 3 closure.

## Current Architecture and Scope

The site is an Astro 7 static build. Runtime dependencies are only two local font
packages. Tooling is development-only and includes Astro integrations, TypeScript,
and a direct `sharp` pin used by Astro image processing and the repository asset
report. CI and Pages run `npm ci` on Node 24, then license, test, release, Astro,
asset, and site validation. The optional cross-post workflow executes repository
code with the platform `fetch`; it does not declare a separate HTTP client.

The audit covers all dependencies in `package-lock.json`, including duplicate and
nested copies, install lifecycle metadata, package sources/integrities, and every
workflow action that installs or executes Node code. Historical Gatsby paths are
evidence to check, not packages to reintroduce.

## Plan of Work

### M0 — Authoritative baseline

Use the bundled Node 24 runtime and its npm. Run a clean `npm ci`, record `npm audit
--json`, and query the installed graph with `npm ls --all --json` plus targeted
`npm explain`/lockfile extraction for every named package. Query repository
Dependabot metadata when authorized so closed and current alerts are not inferred
from old PR visibility. Record exact tool versions and immutable revision.

Acceptance is a successful clean install, parseable audit output, complete targeted
package inventory, and a documented limitation for any inaccessible GitHub field.

### M1 — Advisory and exploitability matrix

Resolve advisory affected/fixed ranges from authoritative GitHub Advisory Database,
CVE, npm, and upstream release metadata. Compare every installed copy, including
native `sharp`/libvips packages. Trace callers into Astro, scripts, and workflows.
Assess attacker influence from pull requests, repository content/assets, downloads,
external feeds, archive input, YAML/CSS/source maps, image decoding, WebSockets,
proxying, multipart generation, and install/build hooks.

Acceptance is one row per requested historical alert (splitting multiple advisories
when needed) with package, advisory, resolved versions, path, status,
exploitability, and action. `tmp`, `sanitize-html`, and the Babel plugin receive
their exact advisory identity or an explicit evidence-backed historical-metadata
limitation.

### M2 — Minimal remediation

Prefer upgrading the direct dependency that introduces an affected transitive
package. Use an override only when it is compatible and demonstrably the safest
small change. Avoid unrelated major migrations. Regenerate `package-lock.json`
under Node 24/npm with a clean deterministic retry and compare the resulting graph.
Add a focused regression or workflow-policy check when the vulnerable contract can
reasonably recur unnoticed.

Acceptance is no applicable requested High/Critical issue in the resolved graph,
plus focused build/test proof for any changed contract.

### M3 — Closure

Run the requested Level 3 matrix under Node 24: clean install, audit review,
`npm test`, `npm run license:check:all`, `npm run release:check`, `npm run
workflow:check`, `npm run check`, `npm run build`, and `npm run validate`. Include
asset validation because `sharp` is security-relevant and the production artifact
must remain functional. Review the final diff and lockfile integrity/source fields.

Acceptance is a generated `dist/`, all checks passing, a concise final audit report,
and any remaining Moderate/Low issue documented with its path and deferral rationale.

### M4 — Named historical-alert regression enforcement

Evaluate GHSA-3g43-6gmg-66jw, GHSA-p92q-9vqr-4j8v,
GHSA-hfxv-24rg-xrqf, GHSA-ph9p-34f9-6g65, and
GHSA-rpr9-rxv7-x643 from the live manifest, lockfile, and installed dependency tree.
Generate one deterministic JSON record per advisory and retain a dedicated human
report table. A current vulnerable copy must become `REQUIRES FIX` and fail the
High/Critical gate; absence must be proven independently across all graph sources.
The Critical sanitize-html case additionally scans source and tooling references.

Acceptance requires five current results, unit and CLI fixture proof of vulnerable
reintroduction failure, artifact freshness enforcement in CI and Pages, and a repeat
of the clean Node 24 Level 3 matrix.

## Surprises & Discoveries

- The interactive shell starts on Node 25.2.1, while CI uses Node 24. The bundled
  workspace runtime supplies Node 24.14.0 and will be prepended to `PATH` for all
  authoritative commands.
- The current branch is already the Astro migration result; historical Gatsby
  findings must be matched against the new lockfile rather than old PRs.
- The repository Dependabot Alerts endpoint returns an empty set for `state=all`.
  The archived `site` lock at `999f35b` preserves the actual vulnerable paths and
  the global GitHub Advisory Database preserves their affected/fixed ranges.
- `npm audit signatures` verified all 666 installed registry packages; 93 also
  publish attestations. All 759 locked packages use registry sources and integrity.

## Decision Log

- Decision: treat Node 24.14.0 plus its bundled npm as the audit runtime.
  Rationale: this satisfies the repository's explicit CI parity requirement without
  changing developer machine configuration. Date: 2026-08-12.
- Decision: capture GitHub Dependabot alert metadata read-only when credentials permit.
  Rationale: the request explicitly requires identifying historical advisories that
  may no longer appear in the npm audit result. Date: 2026-08-12.
- Decision: leave `package.json` and `package-lock.json` unchanged.
  Rationale: every present requested package is fixed and every other target is
  absent, so dependency churn or overrides would add risk without remediation value.
  Date: 2026-08-12.
- Decision: pin every existing workflow action and add explicit High audit and
  registry-signature gates to CI and Pages.
  Rationale: mutable action tags and non-enforced future audit findings were the
  actionable supply-chain gaps found outside the already-clean npm graph.
  Date: 2026-08-12.
- Decision: use a deterministic tracked JSON snapshot plus a live `--check-output`
  evaluator instead of an advisory ignore/allowlist.
  Rationale: the artifact preserves the five named cases for review while CI still
  derives status from the current graph and fails on vulnerable reintroduction or a
  stale snapshot. Date: 2026-08-12.

## Validation and Acceptance

M0 and M1 use Level 1 read-only dependency and metadata checks. M2 uses Level 1 or
Level 2 checks targeted to the changed dependency path. M3 uses Level 3 because the
work closes a security milestone and the user explicitly requested the repository's
full install/build/test/validation contract.

All authoritative npm commands must show Node 24. The audit report must distinguish
absence, fixed versions, non-affected versions, and non-exploitability; a zero npm
audit count alone is insufficient. The final package-lock must retain registry URLs
and integrity hashes for all registry packages.

## Risks and Open Questions

- Future-dated advisory identifiers may be visible through GitHub security metadata
  before all public mirrors expose full ranges. Preserve exact GitHub alert details
  when available and label any source limitation.
- Native libvips exposure depends on the platform-specific package selected by
  `sharp`; inspect all locked variants and the host-installed runtime, not just the
  top-level `sharp` declaration.
- A clean audit may still miss GitHub-reviewed advisories or build-only exploit paths.
  Complete the explicit package-by-package review regardless of the aggregate count.

## Idempotence and Recovery

`npm ci` may be safely repeated and replaces only ignored `node_modules/`. `dist/`
is ignored and regenerated by the build. Save raw audit/graph output under a
temporary directory outside tracked source, with stable summaries in evidence.
Before editing or finalizing, recheck `git status`; preserve all unrelated work.
Dependency updates use normal npm lockfile generation under Node 24 and are retried
from the original clean manifest/lock state if interrupted.

## Outcomes & Retrospective

The current graph has zero npm audit findings and no applicable requested
High/Critical exposure. PostCSS 8.5.26, js-yaml 4.3.1, and sharp 0.35.3/libvips
8.18.3 are fixed; every other requested package is absent. No dependency change or
override was needed. Seven workflow actions are now commit-pinned, and CI/Pages
enforce High npm audit and registry signatures. Level 3 validation generated and
validated the production site successfully. Full results are in
`.agent/reports/dependency-supply-chain-audit.md`.

M4 made five historically remaining alert dispositions executable and
machine-readable rather than relying on the completed point-in-time report. All
five currently resolve to `NOT PRESENT`; vulnerable fixture reintroduction fails.

## Revision Note

Initial plan created for the current Astro dependency and supply-chain audit.
Closure records the evidence-backed decision to retain the already-fixed dependency
graph and implement only workflow supply-chain hardening.
M4 reopens the plan narrowly to add named advisory regression enforcement requested
after the original audit closure.
