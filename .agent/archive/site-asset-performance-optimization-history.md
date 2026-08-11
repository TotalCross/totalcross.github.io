<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Site asset performance optimization history

## M0 — Deterministic asset baseline

Completed 2026-08-10 without changing image delivery. A dependency-light reporter
uses explicit Sharp metadata plus repository/output traversal to rank source and
generated media. A tested fallback-resource graph provides representative page
payload proxies without claiming browser/network fidelity. The first fresh build
proved every 30.09 MiB source media byte was copied into generated output, with home
and get-started proxies at 16.34 MiB and 9.07 MiB respectively.
