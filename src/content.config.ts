import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './content/posts' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		excerpt: z.string(),
		cover: z.string().optional(),
		coverLabel: z.string().default('FOTO — nieuw artikel'),
	}),
});

export const collections = { posts };
