<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Dependency supply-chain audit editorial handoff

## Editorial Summary

The current Astro dependency graph is clean against the full requested historical
Dependabot set. Only PostCSS, js-yaml, and sharp/libvips remain, all on fixed
versions. The stale vulnerable packages belong to the retired Gatsby graph.

## Original Plan versus Actual Outcome

The plan anticipated dependency remediation if current vulnerable paths existed.
None did, so no manifest or lockfile changed. The actionable outcome instead was
workflow supply-chain hardening: immutable action pins and enforced audit/signature
gates.

## What Changed

- Pinned seven GitHub Action references to immutable 40-character commits.
- Added High/Critical npm audit and registry-signature checks to PR and Pages builds.
- Extended workflow policy checks to reject mutable action references and missing
  dependency security gates.
- Added a complete advisory matrix and resumable audit evidence.
- Added deterministic machine-readable records and live failure gates for five
  historically remaining Axios, tmp, and sanitize-html alerts.

## Decisions and Trade-offs

Avoided dependency churn because every present target is fixed and every other
target is absent. Used the archived Gatsby lockfile plus public GitHub advisory
ranges because the repository Dependabot API no longer exposes historical alerts.

## Unexpected Problems and Discoveries

The repository Dependabot endpoint returned an empty list for all states. The
archived `site` branch preserved exact old versions and paths, allowing the audit to
prove migration removal without treating alert disappearance as remediation.

## Validation and Measurable Results

Node 24 clean install and audit passed with zero findings. Registry signatures were
verified for 666 packages and attestations for 93. The five named advisory records
are current and `NOT PRESENT`. All 23 tests, 184 license checks, workflow/release
policy, 57-file Astro diagnostics, production build, asset checks, and route/content
validation passed.

## Useful Evidence and Examples

The historical graph contained PostCSS 6/7, js-yaml 3.14.1, sharp 0.27.2, Axios
0.21.1, two form-data versions, three ws versions, and the remaining named packages.
The current graph contains only PostCSS 8.5.26, js-yaml 4.3.1, and sharp 0.35.3 with
libvips 8.18.3.

## Limitations, Remaining Work, and Open Questions

Original repository alert numbers and dismissal timestamps cannot be recovered from
the empty Dependabot API. The advisory identity/path reconstruction is nonetheless
exact at the package-version level. Action pins now require deliberate maintenance.
The named advisory snapshot must be regenerated with `npm run
security:advisories` whenever the evaluated graph legitimately changes.

## Possible Article Angles

- Why dependency migrations can resolve alerts more safely than mass overrides.
- Auditing build-time inputs as attacker-controlled in pull-request CI.
- Combining npm audit, signature verification, lock inspection, and archived graphs.

## Suggested Narrative

Start with the surprising result—zero current vulnerabilities despite many old
alerts—then show how the Astro migration removed whole exploit paths, how three
remaining packages were checked beyond declared versions, and how workflow
execution was hardened for future regressions.

## Claims Requiring Human Review

Confirm whether organization security logs retain the vanished Dependabot alert
numbers if an exact alert-ID appendix is desired. Review the chosen cadence for
updating pinned GitHub Action commits.
