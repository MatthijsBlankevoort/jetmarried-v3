import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content is grouped by type, with the language one level below — the layout
 * TinaCMS shows as folders inside a single collection:
 *
 *   content/settings/<locale>.json     → entry id is the locale, e.g. 'de'
 *   content/home/<locale>.json         → entry id is the locale, e.g. 'de'
 *   content/posts/<locale>/<slug>.mdx  → entry id is '<locale>/<slug>'
 *
 * Use the helpers in src/lib/content.ts to read them instead of getEntry directly.
 */
const withoutExtension = ({ entry }: { entry: string }) => entry.replace(/\.[^.]+$/, '');

const posts = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './content/posts', generateId: withoutExtension }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		excerpt: z.string(),
		cover: z.string().optional(),
		coverLabel: z.string().default('FOTO — nieuw artikel'),
	}),
});

const navLink = z.object({ label: z.string(), href: z.string() });

const settings = defineCollection({
	loader: glob({ pattern: '*.json', base: './content/settings', generateId: withoutExtension }),
	schema: z.object({
		logoUrl: z.string(),
		headerCta: z.string(),
		nav: z.array(navLink),
		contactName: z.string(),
		phone: z.string(),
		phoneHref: z.string(),
		email: z.string(),
		kvk: z.string(),
		priceNote: z.string(),
		footerSocials: z.array(navLink),
	}),
});

const ceremony = z.object({
	id: z.string(),
	title: z.string(),
	imageLabel: z.string(),
	image: z.string().optional(),
	description: z.string(),
	bullets: z.array(z.string()),
});

const step = z.object({
	number: z.string(),
	title: z.string(),
	text: z.string(),
	tag: z.string(),
});

const location = z.object({
	name: z.string(),
	imageLabel: z.string(),
	image: z.string().optional(),
});

const testimonial = z.object({
	quote: z.string(),
	author: z.string(),
	highlight: z.boolean().default(false),
});

const faqItem = z.object({ q: z.string(), a: z.string() });

const twoLineTitle = z.object({ titleLine1: z.string(), titleLine2: z.string() });

const home = defineCollection({
	loader: glob({ pattern: '*.json', base: './content/home', generateId: withoutExtension }),
	schema: z.object({
		hero: twoLineTitle.extend({ text: z.string(), image: z.string().optional() }),
		marqueeText: z.string(),
		about: twoLineTitle.extend({
			eyebrow: z.string(),
			paragraph1Before: z.string(),
			motto: z.string(),
			paragraph1After: z.string(),
			paragraph2: z.string(),
			image: z.string().optional(),
		}),
		ceremoniesIntro: z.object({ title: z.string(), text: z.string() }),
		ceremonies: z.array(ceremony),
		werkwijze: z.object({ title: z.string(), steps: z.array(step) }),
		locationsIntro: z.object({ title: z.string(), text: z.string() }),
		locations: z.array(location),
		testimonialsLinkLabel: z.string(),
		testimonials: z.array(testimonial),
		faq: z.array(faqItem),
		contact: twoLineTitle.extend({ text: z.string() }),
	}),
});

export const collections = { posts, settings, home };
