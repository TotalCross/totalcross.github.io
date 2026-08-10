/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { getCollection, type CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;

export async function getPublishedPosts() {
  return (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );
}

export function postSlug(post: BlogEntry) {
  return post.id.split("/").at(-1) ?? post.id;
}

export function postPath(post: BlogEntry) {
  if (post.data.legacyPath) return post.data.legacyPath;
  const slug = postSlug(post);
  return post.data.language === "pt-BR" ? `/pt-br/blog/${slug}/` : `/blog/${slug}/`;
}

export function taxonomySlug(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function translationsFor(post: BlogEntry, posts: BlogEntry[]) {
  if (!post.data.translationKey) return [];
  return posts.filter((candidate) => candidate.id !== post.id && candidate.data.translationKey === post.data.translationKey);
}

export function seriesFor(post: BlogEntry, posts: BlogEntry[]) {
  if (!post.data.series) return [];
  return posts
    .filter((candidate) =>
      candidate.data.language === post.data.language &&
      candidate.data.series?.name === post.data.series?.name,
    )
    .sort((a, b) => (a.data.series?.order ?? 0) - (b.data.series?.order ?? 0));
}
