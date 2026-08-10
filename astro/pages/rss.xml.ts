/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getPublishedPosts, postPath } from "../lib/content";

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getPublishedPosts()).filter((post) => post.data.language === "en");
  return rss({
    title: "TotalCross Blog",
    description: "Everything about embedded systems development",
    site: site ?? "https://totalcross.com",
    customData: "<language>en-us</language>",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: postPath(post),
      categories: [...post.data.categories, ...post.data.tags],
    })),
  });
};
