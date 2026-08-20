import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * The "work" collection = your case studies.
 * Each case study is one .mdx file in src/content/work/.
 * To add a project: copy an existing file, rename it, edit the frontmatter + body.
 * The filename (minus .mdx) becomes the URL slug: my-project.mdx -> /work/my-project
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    // --- shown on cards + case study header ---
    title: z.string(),
    summary: z.string(), // one or two sentences, shown on cards
    company: z.string().optional(), // e.g. "Qualia" or "Personal project"
    role: z.string(), // e.g. "Lead Product Designer"
    timeline: z.string(), // e.g. "2024 · 3 months"
    tags: z.array(z.string()).default([]), // e.g. ["UX", "Design System"]

    // --- cover image (optional). Put images in /public/work/ and reference as "/work/foo.jpg" ---
    cover: z.string().optional(),
    coverAlt: z.string().optional(),

    // --- case-study "TL;DR" band (all optional; sensible fallbacks) ---
    problem: z.string().optional(), // one-line problem statement (falls back to summary)
    team: z.string().optional(), // e.g. "Solo · with 2 engineers + 1 PM"
    metric: z
      .object({ value: z.string(), label: z.string() })
      .optional(), // the headline result, e.g. { value: "-40%", label: "signup drop-off" }

    // --- controls ---
    ai: z.boolean().default(false), // an AI/ML project — surfaced by the "Show AI work" filter
    featured: z.boolean().default(false), // show on the homepage
    order: z.number().default(0), // lower = earlier in lists
    draft: z.boolean().default(false), // hide from the live site
  }),
});

export const collections = { work };
