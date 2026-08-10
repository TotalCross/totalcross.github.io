<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Astro site migration editorial report

## Editorial Summary

The TotalCross website now builds with Astro from a conventional source-only layout
and deploys through validated GitHub Pages Actions artifacts. The migration preserved
every observed public route and the existing visual identity while replacing an
obsolete Gatsby/generated-branch toolchain with typed content, automated checks, and
an explicit release and rollback contract.

## Original Plan versus Actual Outcome

All prerequisite and M0-M7 outcomes were delivered. The plan allowed interactive
Browser inspection, but the execution environment had no Browser backend; repository
automation, headless Playwright baselines, local production artifacts, and command-
line production checks supplied the observable evidence instead. No milestone was
blocked or weakened by that environment limitation.

## What Changed

- Rebuilt all legacy pages as responsive static Astro routes and preserved both 404
  forms, the root Tecdet article, and the historical TypeScript starter URL.
- Added typed Markdown/MDX authors and articles, taxonomy archives, RSS, sitemap
  compatibility, canonical/social metadata, JSON-LD, localization fixtures, and
  default-off DEV/Medium distribution.
- Replaced generated `master` publication with source-only `main` plus validated
  Pages artifacts, then removed Gatsby, React, old analytics, and obsolete source.
- Added repository licensing, resumable plan state, release/version policy, rollback
  tags, clean-source validation, and production smoke automation.

## Decisions and Trade-offs

The migration intentionally preserved the site's established layout and imagery
instead of redesigning it. Optional cross-posting is isolated from deployment and
requires explicit article intent; Medium remains manual because no supported publish
API was adopted. Historical branch tips remain available even though they are no
longer operational, favoring recoverability over aggressive history cleanup.

## Unexpected Problems and Discoveries

The legacy Sharp/libvips stack could not install natively on current Apple Silicon
and required a Rosetta-era baseline build. npm 11 exposed a Linux lockfile omission
during the artifact PR, which was corrected and proved from an empty dependency
tree. A final transitive `picomatch` advisory had a compatible lockfile-only fix.
GitHub does not own the certificate state for the Cloudflare-served custom domain,
although public HTTPS and HTTP redirection work correctly.

## Validation and Measurable Results

The final clean Node 24 install contains 660 packages with zero npm audit findings.
Thirteen unit tests pass; 143 policy-relevant files pass all-files license validation;
Astro reports zero diagnostics and builds 18 native pages. Generated validation finds
all 14 legacy routes, 20 HTML documents, zero broken references, complete RSS/sitemap
and archive behavior, excluded drafts, and paired translations. The deployed smoke
check accepts 28 required endpoints plus real 404 and HTTPS redirect behavior.

## Useful Evidence and Examples

Immutable route, asset, service, and visual baselines live under `.agent/baseline/`.
Milestone command outcomes and deployment identifiers are in
`.agent/evidence/astro-site-migration.md`; longer completed history is archived in
`.agent/archive/astro-site-migration-history.md`. Operational guidance is in the
README, deployment, cross-posting, releasing, and repository agent documents.

## Limitations, Remaining Work, and Open Questions

No migration implementation remains. GitHub's `https_enforced` setting remains false
because it has no managed certificate state for this custom domain; Cloudflare edge
behavior is already HTTPS-only in validation. Historical asset ownership and Tecdet
publication rights retain the conservative license classifications established by
the prerequisite plan. Live external article writes were deliberately not performed.

## Possible Article Angles

- Migrating a branch-generated Gatsby site to source-only Astro Pages artifacts.
- Preserving URL and visual contracts while replacing a legacy frontend toolchain.
- Using typed content and default-off distribution to make a static blog maintainable.
- Treating clean builds, immutable baselines, and rollback refs as migration features.

## Suggested Narrative

Frame the migration as modernization without amnesia: first capture what production
actually promises, then replace the machinery while keeping public behavior stable.
The result is smaller, reproducible, and easier to publish, but still carries explicit
evidence and recovery paths for the system it superseded.

## Claims Requiring Human Review

Legal and brand owners should still confirm historical image provenance and Tecdet
publication rights. A future platform owner may decide whether GitHub should manage
the custom-domain certificate directly or whether the current Cloudflare edge remains
the intended permanent arrangement.
