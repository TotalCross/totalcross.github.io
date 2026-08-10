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

Status on 2026-08-10: complete. Playwright 1.62.1 with its headless Chromium shell
captured the eight viewport images from the immutable deployed artifact at
`master=6c82739530d09e70ff15fd04786584d9b94d7ff7`, served from a temporary local
directory. External requests were blocked so analytics and other remote resources
could not make the baseline nondeterministic. The live edge remained covered by the
separate M0 HTTP crawl.

| Image | Size | SHA-256 |
| --- | --- | --- |
| `legacy-home-1440x900.png` | 1440×900 | `37f53bd1c3d211740bde6d0d3830511de4919816d45cd8f4ac80c06786c9a54e` |
| `legacy-home-390x844.png` | 390×844 | `20c333deb4bd9d092753be94518f03888e45e8d35ef2bedbeabc9a4f2dd237cb` |
| `legacy-why-totalcross-1440x900.png` | 1440×900 | `23ffece1f14dd852c2686a376f15db6f06d4d6b1686580ab219946c55a113177` |
| `legacy-why-totalcross-390x844.png` | 390×844 | `4bc8730111105913fc257de78edf7690b586986bda97193579e35dd88dd08195` |
| `legacy-blog-1440x900.png` | 1440×900 | `1a4f7c68147d02096dad9c1cda0320589e4371da06ed062ca41b28d815ea52f6` |
| `legacy-blog-390x844.png` | 390×844 | `faf3a546a1df999e5cc33c9c8ecdd8af2834c56802627677b43cf39f5d6878cd` |
| `legacy-traffic-control-system-by-tecdet-1440x900.png` | 1440×900 | `bbb6df01b26e0ed694cefda8191b720a77d9629cf7854d334d3242a5856e32b6` |
| `legacy-traffic-control-system-by-tecdet-390x844.png` | 390×844 | `0395887119f0f87ea32372ac3715f1af2456734b7f0b6476d4e7de3e432456dd` |
