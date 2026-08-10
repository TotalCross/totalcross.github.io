#!/usr/bin/env node
/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { readArticle } from "./cross-post/content.mjs";
import { upsertDev } from "./cross-post/forem.mjs";
import { createDistributionPlan, verifyCanonicalDeployment } from "./cross-post/plan.mjs";

function argumentsFrom(argv) {
  const options = { destination: "dev", intent: "draft", trigger: "automatic", dryRun: false };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--dry-run") options.dryRun = true;
    else if (["--article", "--destination", "--intent", "--trigger"].includes(argument)) options[argument.slice(2).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = argv[++index];
    else throw new Error(`Unknown argument: ${argument}`);
  }
  if (!options.article) throw new Error("--article is required");
  if (!["dev", "medium"].includes(options.destination)) throw new Error("--destination must be dev or medium");
  if (!["draft", "publish"].includes(options.intent)) throw new Error("--intent must be draft or publish");
  if (!["automatic", "manual"].includes(options.trigger)) throw new Error("--trigger must be automatic or manual");
  return options;
}

async function main() {
  const options = argumentsFrom(process.argv.slice(2));
  const article = readArticle(process.cwd(), options.article);
  const plan = createDistributionPlan(article, options);
  if (plan.status === "skipped" || options.dryRun) {
    console.log(JSON.stringify({ dryRun: options.dryRun, article: article.id, canonicalUrl: article.canonicalUrl, ...plan }, null, 2));
    return;
  }
  if (article.draft) throw new Error("A draft source cannot be distributed before canonical deployment");
  await verifyCanonicalDeployment(article.canonicalUrl);
  if (options.destination === "medium") {
    console.log(JSON.stringify({ article: article.id, ...plan }, null, 2));
    return;
  }
  const result = await upsertDev(plan.payload, { apiKey: process.env.DEVTO_API_KEY });
  console.log(JSON.stringify({ article: article.id, canonicalUrl: article.canonicalUrl, ...result }, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
