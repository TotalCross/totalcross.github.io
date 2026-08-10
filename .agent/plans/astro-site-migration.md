<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Migrate totalcross.com from Gatsby to Astro

This ExecPlan follows the structure and resume discipline defined by
`TotalCross/totalcross-depot-tools/.agent/PLANS.md`. M0A copies that contract into
the target repository and establishes licensing/agent policy through the supporting
ExecPlan `.agent/plans/repository-policy-and-agent-tooling.md`; after that, the local
`.agent/PLANS.md` and root `AGENTS.md` govern execution.

## Purpose / Big Picture

Migrate `TotalCross/totalcross.github.io` from Gatsby 2 / React 16 to a current
Astro static site while preserving the TotalCross visual identity, useful assets,
public content, and public URL contracts. Production remains
`https://totalcross.com`.

At completion the repository has one source branch, GitHub Actions Pages artifact
deployment, no generated deployment branch, a Markdown/MDX blog, optional
English/Portuguese content, versioning/changelog, and isolated optional cross-posting.

This is a platform migration, not a redesign. Reuse current brand assets and visual
patterns; change visual behavior only for correctness, accessibility, responsiveness,
or a documented migration constraint.

## Working Set and Resume Protocol

Target repository: `TotalCross/totalcross.github.io`.
Current source/default branch: `site`.
Current generated deployment branch: `master`.

During execution place this plan at `.agent/plans/astro-site-migration.md`. Install
and execute `.agent/plans/repository-policy-and-agent-tooling.md` first as M0A. Use:

- `.agent/PLANS.md`: local copy of the shared ExecPlan contract installed by M0A.
- `.agent/state/astro-site-migration.md`: first read on resume; rewrite with active
  milestone, last logical commit, active paths, next action, completed/deferred
  validation, blockers, and resume command.
- `.agent/evidence/astro-site-migration.md`: append compact evidence, command status,
  route counts, artifact/log paths, and limitations. Search selectively.
- `.agent/archive/astro-site-migration-history.md`: completed detail and retired
  decisions; do not read by default.
- `.agent/reports/astro-site-migration-editorial.md`: milestone/final factual handoff.

On resume read state first, then only the active plan section and paths named by
state. Do not routinely reread the whole plan, repository, generated output, old
evidence, or Gatsby files no longer relevant.

Keep source files ideally below 20 KB or about 600 lines. This is a soft limit.
Split by responsibility before growing a monolithic layout, page, workflow helper,
SEO module, or publication adapter. Correctness may justify exceptions, but record
the reason. If this active ExecPlan itself must materially exceed 20 KB, split the
remaining work into a follow-on ExecPlan instead of inflating this file.

## Execution Policy

Minimize token consumption. Inspect a path once, record useful conclusions in state
or evidence, and reuse them. Prefer targeted reads, narrow searches, concise command
output, and `git diff --stat`. Avoid repeated tree scans, dependency inventories,
screenshots, full builds, or full test matrices.

Implementation comes first inside a milestone. Validation is the milestone's last
implementation stage. Do not run build/lint/test matrices after every edit or
commit. Run an early command only to unblock implementation or diagnose a concrete
failure, and record why. At milestone closure run the smallest validation set that
proves the milestone once; escalate only on failure or when closing a production,
URL, release, or deployment contract.

After M0A, use `.agents/skills/logical-commits/SKILL.md` before staging/committing:
make frequent coherent commits in English, follow Conventional Commits, and never
mix unrelated local changes. Do not rerun full validation for every commit; milestone
validation remains the final implementation stage. Before state-changing Git or
GitHub operations, recheck status, branch, remote state, and HEAD.

## Progress

- [x] M0A — Repository licensing and agent tooling prerequisite.
- [x] M0 — Baseline and migration guardrails.
- [x] M1 — Astro foundation and visual system.
- [x] M2 — Public page and route parity.
- [ ] M3 — Blog, SEO, feeds, and localization readiness.
- [ ] M4 — Versioning, changelog, and release metadata.
- [ ] M5 — Modern GitHub Pages cutover.
- [ ] M6 — Optional cross-posting.
- [ ] M7 — Legacy removal and final handoff.

## Current Architecture and Scope

M0A added the repository license policy, root `AGENTS.md`, local planning contract,
validation/fix tooling, CI gate, and repository skills. The current source uses
Gatsby 2.26.x, React 16,
Styled Components, Gatsby Remark,
Gatsby image plugins, GraphQL page queries, and a legacy Pages workflow. A push to
`site` invokes an old Gatsby publishing action, builds `public/`, and writes generated
output to `master`. GitHub Pages serves the root of `master` using legacy branch
publishing.

Relevant source paths include `src/pages`, `src/components`, `src/templates`,
`src/imgs`, `static`, `content/assets`, and `content/blog`. The existing blog already
has `/blog/`, a post template, Markdown processing, syntax highlighting, RSS support,
and one real Tecdet article. Preserve its public URL even if new posts use
`/blog/<slug>/`.

Inventory legacy analytics/tracking and starter metadata; migrate only intentional
integrations. Brand redesign, backend rendering, accounts, CMS, and unrelated docs
migration are out of scope. Production remains static on GitHub Pages.

## Plan of Work

### M0A — Repository licensing and agent tooling prerequisite

Execute `.agent/plans/repository-policy-and-agent-tooling.md` before broad Astro
implementation. It copies the referenced shared `PLANS.md` into `.agent/PLANS.md`,
adds root `AGENTS.md`, adopts SPDX policy with `2026 Amalgam Solucoes em TI Ltda.`
(MIT project source, CC BY 4.0 original blog/editorial content, protected brand assets,
and preserved third-party terms), implements conservative license check/fix scripts,
adds automatic CI header/license validation, and creates the repository-local
`license-validation` and `logical-commits` skills.

Acceptance: that supporting ExecPlan is complete and committed; subsequent milestones
can create, move, validate, and commit files under one local policy without rereading
cross-repository instructions.

### M0 — Baseline and migration guardrails

Capture immutable `site`/`master` refs, Pages configuration, public routes, important
assets, metadata/navigation/tracking, and representative desktop/mobile screenshots.
Keep inventories compact and machine-readable.

Update `README.md` and add concise `AGENTS.md` if useful so the final branch model,
commands, file-size guidance, commit policy, validation cadence, and no-generated-
output rule are explicit. Do not change production publishing yet.

Acceptance: public routes/assets are accounted for, legacy production is recoverable,
and migration policy is documented.

Final validation: run the existing Gatsby production build once and record result
and generated route count. Capture the visual baseline once.

### M1 — Astro foundation and visual system

Add current Astro with TypeScript and a committed lockfile. Configure static output
and `site: 'https://totalcross.com'`. Introduce small, responsibility-oriented
`src/layouts`, `src/components`, `src/styles`, `src/assets`, `src/content`, and
`public` areas.

Extract the current design system into CSS tokens/typography/layout primitives.
Port shared header, navigation, footer, page shell, hero variants, buttons, and
other reused pieces. Prefer `.astro` components for static UI; keep React only for
behavior that truly needs client-side interactivity.

Inventory assets from Gatsby source/static/content locations. Preserve public asset
paths when compatibility matters; otherwise move to `src/assets` and use Astro
optimization. Avoid duplicate large assets.

Acceptance: a representative shell/home slice matches the current identity at
mobile and desktop sizes without unnecessary client framework JavaScript.

Final validation: `astro check`, production build, and focused shell/home visual
comparison.

### M2 — Public page and route parity

Port all existing institutional pages and their shared sections. Preserve routes,
observable trailing-slash behavior, navigation/footer targets, external links,
content, and important asset URLs. Split oversized page implementations into
section components instead of rebuilding monoliths.

Add a route-parity check driven by the M0 manifest. Prefer preserving a route over
inventing redirect behavior that GitHub Pages cannot reliably provide.

Acceptance: every legacy public route has an Astro equivalent and representative
pages retain layout, responsive behavior, content, and brand assets.

Final validation: Astro check/build, broken-link and route-manifest checks, then one
mobile/desktop visual-regression pass for the migrated route set.

### M3 — Blog, SEO, feeds, and localization readiness

Use Astro content collections/content layer with typed metadata for title,
description, publish/update dates, author, language, translation key, tags,
categories, series, draft status, cover image, and cross-post intent. Markdown is
default; use MDX only when a post needs embedded interactive components.

Use `/blog/<slug>/` for new English articles, preserve the Tecdet route, and reserve
`/pt-br/blog/<slug>/` for optional Portuguese translations. Generate self-canonical
URLs and `hreflang` only when translations exist.

Implement `/blog/`, article layout, authors, tags/categories, optional series
navigation, heading anchors/table of contents, developer-friendly code rendering,
responsive media/tables, dates, and drafts excluded from production.

Add sitemap, RSS, canonical/social/robots metadata and appropriate JSON-LD. Point site
navigation to `/blog/`; external platforms are distribution channels only.

Acceptance: the migrated article plus a non-production fixture/draft prove content
schema, list/article rendering, feeds, metadata, and translation linking.

Final validation: content validation, build, link check, RSS/sitemap checks, and
metadata inspection for a small representative set.

### M4 — Versioning, changelog, and release metadata

Replace Gatsby starter package metadata with real repository metadata. Use SemVer
for the site implementation. Treat the Astro production cutover as `v1.0.0`: the
repository has no intentional release tags and the existing `0.1.0` is starter
metadata. Future version bumps represent site/platform capability or compatibility;
ordinary content-only blog posts do not require a software release.

Add `CHANGELOG.md` in Keep-a-Changelog style with `Unreleased`. Record notable site,
URL/navigation, deployment, analytics, blog-system, and cross-posting changes, not
each article's editorial history.

Document release procedure: update version/changelog, validate, tag the exact production
source commit as annotated `vX.Y.Z`, then optionally create a matching GitHub Release.
Do this only after source and production artifact are final and rechecked.

Acceptance: version source, changelog rules, tag semantics, and release procedure are
clear and reproducible.

Final validation: package/changelog consistency and dry-run release checks; do not
create the remote tag/release yet.

### M5 — Modern GitHub Pages cutover

Add PR CI and production Pages deployment using supported Actions, explicit Astro
build, `actions/upload-pages-artifact`, and `actions/deploy-pages`. Configure required
permissions, the `github-pages` environment, and concurrency so newer deployments
supersede stale pending work.

Promote source history from `site` to `main` without merging generated `master`
history. Make `main` the default/source branch. Switch Pages Source to GitHub
Actions only after a successful artifact build exists. Keep `totalcross.com` as the
custom domain and enable/enforce HTTPS once GitHub reports the domain healthy.

Record final Gatsby source/deployment refs before cutover. Do not delete `site`,
`master`, `site-2020`, or `site-2021` during the production switch.

Acceptance: `main` contains source only; merge/push to `main` builds and deploys a
Pages artifact to `totalcross.com`; no generated files are committed; routes, 404,
and critical assets work after cutover.

Final validation: full production build and route/link checks, then one deployed
smoke crawl and representative visual check.

### M6 — Optional cross-posting

Cross-posting is OFF by default. Publishing to `totalcross.com` must not require DEV
or Medium credentials, configuration, availability, or success. External publishing
runs only when explicitly requested by article metadata or manual workflow input.

For DEV, add a small idempotent Forem adapter with canonical URL, draft/publish intent,
Actions-secret credentials, and external state sufficient to update rather than
duplicate posts. For Medium, provide only an optional supported import/manual
preparation path; do not depend on its legacy unsupported API.

Run distribution only after canonical deployment. External failure must not affect
Pages. Provide manual inputs for article, destination, draft/publish intent, and dry
run; automatic DEV writes require explicit article opt-in.

Acceptance: default articles produce no external write; an opted-in fixture creates
the expected DEV dry-run payload/canonical URL; Medium preparation requires no
unsupported API.

Final validation: adapter fixture/unit tests and workflow dry runs only; no live
external publication merely for testing.

### M7 — Legacy removal and final handoff

After Astro production is proven, remove Gatsby/`gh-pages` infrastructure, dead starter
metadata, obsolete commented code, `.DS_Store`, and verified-unused dependencies or
assets. Remove React only if no intentional island needs it. Preserve old branch tips
with archival tags; delete legacy/stale branches only after rollback is unnecessary
and their purpose is confirmed.

Finalize `README.md`, `AGENTS.md` if added, `CHANGELOG.md`, state/evidence/archive,
and editorial report. Create `v1.0.0` only from the final validated production
source commit after confirming the deployment corresponds to it.

Acceptance: fresh clone -> install -> check -> build is documented and succeeds;
Pages uses only source + artifact; blog works with cross-posting disabled; optional
distribution is isolated; no unexplained Gatsby-era operational path remains.

Final validation: fresh-clone build/check, final route crawl, version/changelog
consistency, and production smoke verification.

## Surprises & Discoveries

- The target repository currently has no `AGENTS.md`; keep this plan self-contained
  and add concise repository guidance if agent maintenance will continue.
- The blog already exists in Gatsby. Migrate its useful contracts instead of
  rebuilding from assumptions.
- `master` is generated deployment output, not source history; never merge it into
  the new `main`.
- Medium's legacy API is unsupported for new integrations; keep Medium optional and
  manual/import based unless a supported API is verified during execution.
- The local `/blog/` and Tecdet article are live, but primary navigation currently
  points BLOG to `https://blog.totalcross.com/`; M3 must intentionally switch it to
  the canonical local blog rather than treating the external link as route truth.
- `/using-typescript/` is an accidental Gatsby starter page but returns 200 in
  production. Preserve it or provide an explicit redirect during M2.
- GitHub Pages serves `totalcross.com` through legacy `master:/`; HTTPS works through
  the observed edge, but the Pages setting does not enforce HTTPS. M5 must recheck
  domain health before enabling enforcement.
- The Codex in-app Browser has no backend in this execution environment. Interactive
  inspection is optional and non-blocking; automated repository tooling, headless
  Playwright, screenshots, and command-line checks are the validation path unless a
  human-only observation is explicitly requested.
- The locked Gatsby 2 Sharp/libvips stack cannot install natively on Darwin ARM64.
  The baseline succeeds under Rosetta with Node 14/npm 6; this legacy architecture
  dependency is additional justification for replacing the toolchain rather than
  modifying it solely for migration baseline validation.

Add only discoveries that change remaining work; move resolved history to archive.

## Decision Log

- Decision: licensing/agent tooling is a prerequisite supporting ExecPlan; source
  uses MIT, original blog content CC BY 4.0, brand assets are excluded, third-party
  terms are preserved, and new project-owned notices use `2026 Amalgam Solucoes em
  TI Ltda.` via SPDX. Date: 2026-08-10.
- Decision: Astro static output + GitHub Pages artifacts; no server features.
  Rationale: GitHub Pages remains production. Date: 2026-08-10.
- Decision: preserve current visual identity/assets; no redesign in migration.
  Rationale: reduce scope and brand risk. Date: 2026-08-10.
- Decision: `main` becomes sole source branch; generated output is not versioned.
  Rationale: remove `site -> master` legacy publishing. Date: 2026-08-10.
- Decision: new English posts use `/blog/<slug>/`; Portuguese is optional under
  `/pt-br/blog/<slug>/`; preserve existing article URLs. Date: 2026-08-10.
- Decision: cross-posting is opt-in and post-deployment. External distribution can
  never block the canonical site. Date: 2026-08-10.
- Decision: automate DEV through supported Forem APIs; use Medium import/manual
  flow unless a supported API exists at execution time. Date: 2026-08-10.
- Decision: site implementation uses SemVer and `CHANGELOG.md`; content-only posts
  do not require releases; Astro cutover is `v1.0.0`. Date: 2026-08-10.
- Decision: keep Astro source under `astro/` and reuse `static/` plus `src/imgs/`
  during M1-M6, then move to conventional `src/` and `public/` in M7. Rationale:
  preserve the working Gatsby recovery path and avoid duplicate large artwork until
  public route parity has passed. Date: 2026-08-10.

## Validation and Acceptance

Validate at milestone boundaries as the final stage. If a check fails, diagnose the
failed surface, fix it, and rerun the narrowest relevant check before repeating a
larger matrix.

Final acceptance requires: automatic SPDX/license validation and safe fix tooling;
repository-local planning/commit/license skills; route and visual parity; reusable
assets preserved;
clean Astro static build; source-only `main`; GitHub Pages artifact deployment to
`totalcross.com`; healthy HTTPS; typed canonical blog with RSS/sitemap/social and
structured metadata; blog publication with no cross-post credentials; optional,
idempotent DEV distribution; no Medium dependency on unsupported APIs; coherent
version/changelog/tag policy; and no required Gatsby/`gh-pages` deployment path.

## Risks and Open Questions

- Browser-only Gatsby/React behavior may surface during migration. Keep temporary
  React islands rather than rewriting behavior blindly.
- Existing asset URLs may be externally referenced; preserve until inventory proves
  safe to change.
- Pages/custom-domain/environment/branch-protection changes require remote settings
  and may require owner permissions. Re-read state immediately before changing them.
- Analytics/GTM/Hotjar ownership may be unclear. Preserve only intentionally active
  tracking and document anything needing owner confirmation.
- DEV organization/API credentials may not exist; they must never block the site.
- Historical brand/third-party assets may have uncertain ownership; the license
  validator must report ambiguity rather than relabeling those files.

## Idempotence and Recovery

Port additively and validate before deleting the Gatsby equivalent. Keep immutable
final Gatsby source/deployment refs before cutover. Builds and checks must be safe to
rerun. Pages uses deployment concurrency. Cross-post dry-run never writes externally
and real publication checks existing external state before creating duplicates.

Before branch, Pages, tag, release, or deletion changes, fetch remote state and
confirm expected HEAD. If it changed, stop that operation and reconcile; never force
unrelated history.

If Pages cutover fails, restore legacy Pages source from the recorded `master` ref
while leaving Astro source intact. If cross-posting partially fails, keep the
canonical site untouched and retry only the failed destination after checking
whether a remote article was already created.

## Outcomes & Retrospective

Populate this section with facts at milestone checkpoints and completion. The final
summary records route/visual parity, intentional differences, build/deploy behavior,
blog capabilities, version/tag, dependency reduction, cross-post status, and known
limitations, with pointers to evidence/history.

The final editorial report follows the sections required by `.agent/PLANS.md`; do not
duplicate its contents in the active plan.

M0A completed through `.agent/plans/repository-policy-and-agent-tooling.md`. Its five
logical commits end at `a44ea2d`; the final all-files policy check accepted 115
policy-relevant files and left the Gatsby publication path available for recovery.

## Revision Note

2026-08-10: Revised to split licensing/agent tooling into a prerequisite supporting
ExecPlan so both files remain below the soft size limit. The migration now requires
local `PLANS.md`, SPDX policy/validation+fix, agent skills, opt-in cross-posting,
versioning/changelog, logical English Conventional Commits, and milestone-final
validation optimized for low token use.
