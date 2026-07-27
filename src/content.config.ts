import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/**
 * Tina writes these as flat single-document JSON files (no id wrapper), but
 * Astro's file loader needs entries keyed by id — so this parser wraps the
 * parsed object under a fixed id without touching the on-disk shape Tina owns.
 */
const singleton = (id: string) => (text: string) => ({ [id]: JSON.parse(text) });

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

const navLink = z.object({ label: z.string(), href: z.string() });

const settings = defineCollection({
	loader: file('content/settings/global.json', { parser: singleton('global') }),
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
	loader: file('content/home/index.json', { parser: singleton('index') }),
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
