---
name: logical-commits
description: Prepare coherent, reviewable Conventional Commits while preserving unrelated work in the TotalCross website repository. Use before staging or committing any repository change, when separating mixed diffs, or when recording an ExecPlan milestone or completed implementation slice.
---
<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Logical commits

Commit one completed responsibility at a time. A commit must be independently
understandable and leave the repository in a coherent, resumable state.

## Workflow

1. Read the active `.agent/state/` file when the task uses an ExecPlan, then inspect
   `git status --short`.
2. Review a focused diff and diff stat. Separate unrelated responsibilities before
   staging; leave unrelated user changes untouched.
3. Run the focused validation appropriate to the completed slice. Do not rerun full
   builds or test matrices before every commit; milestone-final validation remains
   governed by the active ExecPlan.
4. Stage only explicit paths belonging to the slice. Never use broad staging when
   unrelated changes are present.
5. Immediately before committing, inspect `git diff --cached --stat`,
   `git diff --cached`, and `git diff --cached --check`. Correct accidental scope,
   generated output, secrets, and formatting errors.
6. Write the subject and message in English using Conventional Commits. State the
   observable change or reason, not merely the filenames.
7. Commit, recheck `git status --short`, and update the active state/evidence at the
   next logical boundary so another agent can resume from the recorded commit.

Use a meaningful scope when it helps navigation. Representative subjects include:

- `chore(license): establish SPDX licensing policy`
- `feat(astro): add shared site layout`
- `feat(blog): add typed article collections`
- `ci(pages): deploy static artifact with GitHub Pages`

Do not create artificial WIP/checkpoint commits. If the staged diff cannot be
described by one precise subject without using “and” for unrelated behavior, split
it into separate logical commits.
