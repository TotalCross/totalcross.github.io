<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Repository policy and agent tooling evidence

- 2026-08-10, P0 baseline: `feat/astro-site-migration` pointed to `999f35b`, the
  same commit as `site`, `origin/site`, and `origin/HEAD`; only the two supplied
  ExecPlans were untracked.
- 2026-08-10, P0 planning contract: copied
  `TotalCross/totalcross-depot-tools/.agent/PLANS.md` verbatim from commit
  `83528e55751b2dc749a9f54e0a443620552195be` into `.agent/PLANS.md`. The source
  checkout contained unrelated untracked files; the copy used the committed blob,
  not the working-tree file.
- 2026-08-10, P0 validation: `cmp` confirmed the local contract is byte-identical
  to the recorded committed blob; `git diff --check` passed. Root `AGENTS.md` is 32
  lines and names the plan resume protocol, both required skills, file-size
  guideline, preservation rule, and four proportional validation levels.
- 2026-08-10, P1 inventory: 77 tracked `src/` files, including 39 PNG files and
  upstream `src/normalize.css`; one customer article and image under the Tecdet blog
  path; four `static/` files; no pre-existing repository license. `package.json`
  declared the Gatsby starter's `0BSD` license before correction.
- 2026-08-10, P1 policy: added root MIT terms, SPDX license texts for MIT and
  CC-BY-4.0, brand and third-party license references, plain-language `NOTICE.md`,
  and five ordered REUSE annotations. The annotation syntax follows REUSE
  Specification 3.3 (`https://reuse.software/spec/`).
- 2026-08-10, P1 validation: Python `tomllib` parsed `REUSE.toml` as version 1 with
  five annotations; all four expected files were present under `LICENSES/`;
  `package.json` reported `MIT`; `git diff --check` passed.
- 2026-08-10, P2 implementation: added the 107-line Git-aware CLI, 107-line policy
  module, 125-line header module, and 53-line test file. Canonical package commands
  are `license:check`, `license:check:all`, `license:fix`, and `license:test`.
- 2026-08-10, P2 validation: `npm run license:test` passed 5/5 tests covering safe
  addition/idempotence, Markdown frontmatter, different-holder/license refusal,
  exact duplicate normalization, and REUSE glob matching. `npm run license:check`
  reported `checked=5 compliant=5 mapped=1 issues=0`; `git diff --check` passed.
- 2026-08-10, P3 skills: skill-creator scaffolding produced both required
  `SKILL.md` and `agents/openai.yaml` files. Final skills contain no auxiliary
  resources or scaffold TODOs and name the canonical repository workflows.
- 2026-08-10, P3 validation: skill-creator `quick_validate.py` reported `Skill is
  valid!` for both skills using an isolated temporary PyYAML environment, which was
  removed afterward. Targeted license validation reported
  `checked=4 compliant=4 issues=0`; `git diff --check` passed.
