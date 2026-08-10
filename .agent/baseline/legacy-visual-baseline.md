<!--
SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
SPDX-License-Identifier: MIT
-->

# Legacy production visual baseline

Capture production at `https://totalcross.com` before M1 visual implementation.
Use the following stable comparison set:

- `/` at 1440×900 and 390×844;
- `/why-totalcross/` at 1440×900 and 390×844;
- `/blog/` at 1440×900 and 390×844;
- `/traffic-control-system-by-tecdet/` at 1440×900 and 390×844.

Store images under `.agent/baseline/screenshots/` with
`legacy-<route>-<viewport>.png` names. Capture full pages plus viewport screenshots
when the browser surface supports both.

Status on 2026-08-10: blocked because the installed Browser plugin reported no
available browser backend after its prescribed discovery and troubleshooting flow.
Do not substitute an unrelated browser-control surface. Retry before closing M0.
