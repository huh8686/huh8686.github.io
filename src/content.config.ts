import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    paper: z.object({
      title: z.string(),
      authors: z.string(),
      venue: z.string(),
      year: z.number(),
    }),
    topic: z.enum([
      'correspondence-and-pose',
      'reconstruction',
      'neural-rendering',
      'understanding',
    ]),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { papers };
