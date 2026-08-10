/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { copyFileSync, mkdirSync } from "node:fs";

const dist = new URL("../dist/", import.meta.url);
const legacy404Directory = new URL("404/", dist);

mkdirSync(legacy404Directory, { recursive: true });
copyFileSync(new URL("404.html", dist), new URL("index.html", legacy404Directory));

console.log("prepare-dist: preserved /404.html and /404/");
