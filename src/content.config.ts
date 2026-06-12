import { defineCollection } from "astro:content";
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const post = defineCollection({
  loader: glob({base: "./src/data/post", pattern: "**/*.{md,mdx}"}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    authors: z.array(z.string()),
    uploaded: z.coerce.date(),
    lastUpdated: z.coerce.date(),
    tags: z.array(z.string()),
    thumbnail: z.string()
  })
})

export const collections = { post };
