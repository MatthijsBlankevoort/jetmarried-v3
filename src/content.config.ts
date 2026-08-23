import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content is stored one folder per language (content/<locale>/…), the layout
 * TinaCMS writes to. Each collection therefore globs across all languages and
 * uses the locale as (part of) the entry id:
 *
 *   settings / home → id is the locale, e.g. 'de'
 *   posts           → id is '<locale>/<slug>', e.g. 'de/ja-ik-wil'
 *
 * Use the helpers in src/lib/content.ts to read them instead of getEntry directly.
 */
const localeOf = ({ entry }: { entry: string }) => entry.split('/')[0];
const localeAndSlug = ({ entry }: { entry: string }) => {
	const [locale, , ...rest] = entry.split('/');
	return `${locale}/${rest.join('/').replace(/\.mdx?$/, '')}`;
};

const posts = defineCollection({
	loader: glob({ pattern: '*/posts/**/*.mdx', base: './content', generateId: localeAndSlug }),
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
	loader: glob({ pattern: '*/settings/global.json', base: './content', generateId: localeOf }),
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
	loader: glob({ pattern: '*/home/index.json', base: './content', generateId: localeOf }),
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
