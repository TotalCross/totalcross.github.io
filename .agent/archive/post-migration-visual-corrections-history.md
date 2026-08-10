<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Post-migration visual corrections history

## M0 — Narrow regression baseline

Completed 2026-08-10 without implementation changes. The source head contract,
favicon/icon binaries, footer, legacy social component, license header model, and one
existing generated artifact were inspected directly. The regression is bounded to a
malformed tiny favicon plus incomplete head metadata, six footer text placeholders,
missing external-link protections, and source SPDX comments emitted into 19 generated
HTML documents. Large-image delivery remains assigned to the follow-up ExecPlan.
