/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const authors = defineCollection({
  loader: glob({ base: "./astro/content/authors", pattern: "**/*.{yml,yaml}" }),
  schema: z.object({
    name: z.string().min(1),
    bio: z.string().min(1),
    url: z.url().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: "./astro/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    subtitle: z.string().optional(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: reference("authors"),
    language: z.enum(["en", "pt-BR"]).default("en"),
    translationKey: z.string().min(1).optional(),
    tags: z.array(z.string().min(1)).min(1),
    categories: z.array(z.string().min(1)).min(1),
    series: z.object({ name: z.string().min(1), order: z.number().int().positive() }).optional(),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
    legacyPath: z.string().startsWith("/").endsWith("/").optional(),
    crossPost: z.object({
      dev: z.boolean().default(false),
      medium: z.boolean().default(false),
    }).default({ dev: false, medium: false }),
  }),
});

export const collections = { authors, blog };
