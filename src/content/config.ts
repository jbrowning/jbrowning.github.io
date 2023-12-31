import { z, defineCollection } from "astro:content";

const blogSchema = ({ image }) =>
  z.object({
    title: z.string(),
    previewText: z.string().optional(),
    heroImage: image().optional(),
    tags: z.array(z.string()).optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional(),
  });

const blogCollection = defineCollection({
  type: "content",
  schema: blogSchema,
});

const projectSchema = ({ image }) =>
  z.object({
    title: z.string(),
    description: z.string().optional(),
    link: z.string().url().optional(),
    thumbnail: image().optional(),
    tags: z.array(z.string()).optional(),
    order: z.number(),
    screenshots: z
      .array(
        z.object({
          original: z.string(),
          thumb: z.string(),
        })
      )
      .optional(),
  });

const projectsCollection = defineCollection({
  type: "content",
  schema: projectSchema,
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
