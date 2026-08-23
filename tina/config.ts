import { defineConfig } from 'tinacms';
import type { Collection, TinaField } from 'tinacms';

const branch = process.env.TINA_BRANCH || process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master';

/**
 * Tina has no built-in i18n, so every language gets its own folder under
 * content/<locale>/ and its own set of collections. The field definitions below
 * are shared, so a new language means adding one entry to this list — nothing else.
 * Keep the codes in sync with `locales` in src/i18n/ui.ts.
 */
const locales = [
	{ code: 'nl', label: 'Nederlands' },
	{ code: 'en', label: 'English' },
	{ code: 'de', label: 'Deutsch' },
] as const;

const settingsFields: TinaField[] = [
	{ type: 'image', name: 'logoUrl', label: 'Logo' },
	{ type: 'string', name: 'headerCta', label: 'Header CTA-tekst' },
	{
		type: 'object',
		name: 'nav',
		label: 'Navigatie',
		list: true,
		ui: { itemProps: (item) => ({ label: item?.label }) },
		fields: [
			{ type: 'string', name: 'label', label: 'Label' },
			{ type: 'string', name: 'href', label: 'Link (anchor — houd deze gelijk in alle talen)' },
		],
	},
	{ type: 'string', name: 'contactName', label: 'Naam' },
	{ type: 'string', name: 'phone', label: 'Telefoonnummer (weergave)' },
	{ type: 'string', name: 'phoneHref', label: 'Telefoonnummer (tel-link, zonder spaties)' },
	{ type: 'string', name: 'email', label: 'E-mailadres' },
	{ type: 'string', name: 'kvk', label: 'KVK-nummer' },
	{ type: 'string', name: 'priceNote', label: 'Prijsnotitie', ui: { component: 'textarea' } },
	{
		type: 'object',
		name: 'footerSocials',
		label: 'Footer-links',
		list: true,
		ui: { itemProps: (item) => ({ label: item?.label }) },
		fields: [
			{ type: 'string', name: 'label', label: 'Label' },
			{ type: 'string', name: 'href', label: 'Link' },
		],
	},
];

const homeFields: TinaField[] = [
	{
		type: 'object',
		name: 'hero',
		label: 'Hero',
		fields: [
			{ type: 'string', name: 'titleLine1', label: 'Titel — regel 1' },
			{ type: 'string', name: 'titleLine2', label: 'Titel — regel 2 (eerste woord wordt cursief)' },
			{ type: 'string', name: 'text', label: 'Tekst', ui: { component: 'textarea' } },
			{ type: 'image', name: 'image', label: 'Achtergrondfoto' },
		],
	},
	{ type: 'string', name: 'marqueeText', label: 'Marquee-tekst' },
	{
		type: 'object',
		name: 'about',
		label: 'Over Mariëtte',
		fields: [
			{ type: 'string', name: 'eyebrow', label: 'Eyebrow' },
			{ type: 'string', name: 'titleLine1', label: 'Titel — regel 1' },
			{ type: 'string', name: 'titleLine2', label: 'Titel — regel 2' },
			{ type: 'string', name: 'paragraph1Before', label: 'Alinea 1 — voor de lijfspreuk', ui: { component: 'textarea' } },
			{ type: 'string', name: 'motto', label: 'Lijfspreuk' },
			{ type: 'string', name: 'paragraph1After', label: 'Alinea 1 — na de lijfspreuk', ui: { component: 'textarea' } },
			{ type: 'string', name: 'paragraph2', label: 'Alinea 2', ui: { component: 'textarea' } },
			{ type: 'image', name: 'image', label: 'Portretfoto' },
		],
	},
	{
		type: 'object',
		name: 'ceremoniesIntro',
		label: 'Ceremonies — intro',
		fields: [
			{ type: 'string', name: 'title', label: 'Titel' },
			{ type: 'string', name: 'text', label: 'Tekst', ui: { component: 'textarea' } },
		],
	},
	{
		type: 'object',
		name: 'ceremonies',
		label: 'Ceremonies',
		list: true,
		ui: { itemProps: (item) => ({ label: item?.title }) },
		fields: [
			{ type: 'string', name: 'id', label: 'ID (anchor — houd deze gelijk in alle talen)' },
			{ type: 'string', name: 'title', label: 'Titel' },
			{ type: 'string', name: 'imageLabel', label: 'Placeholder-tekst (als er geen foto is)' },
			{ type: 'image', name: 'image', label: 'Foto' },
			{ type: 'string', name: 'description', label: 'Beschrijving', ui: { component: 'textarea' } },
			{ type: 'string', name: 'bullets', label: 'Kenmerken', list: true },
		],
	},
	{
		type: 'object',
		name: 'werkwijze',
		label: 'Zo werkt het',
		fields: [
			{ type: 'string', name: 'title', label: 'Titel' },
			{
				type: 'object',
				name: 'steps',
				label: 'Stappen',
				list: true,
				ui: { itemProps: (item) => ({ label: item?.title }) },
				fields: [
					{ type: 'string', name: 'number', label: 'Nummer' },
					{ type: 'string', name: 'title', label: 'Titel' },
					{ type: 'string', name: 'text', label: 'Tekst', ui: { component: 'textarea' } },
					{ type: 'string', name: 'tag', label: 'Label' },
				],
			},
		],
	},
	{
		type: 'object',
		name: 'locationsIntro',
		label: 'Locaties — intro',
		fields: [
			{ type: 'string', name: 'title', label: 'Titel' },
			{ type: 'string', name: 'text', label: 'Tekst', ui: { component: 'textarea' } },
		],
	},
	{
		type: 'object',
		name: 'locations',
		label: 'Locaties',
		list: true,
		ui: { itemProps: (item) => ({ label: item?.name }) },
		fields: [
			{ type: 'string', name: 'name', label: 'Naam' },
			{ type: 'string', name: 'imageLabel', label: 'Placeholder-tekst (als er geen foto is)' },
			{ type: 'image', name: 'image', label: 'Foto' },
		],
	},
	{ type: 'string', name: 'testimonialsLinkLabel', label: 'Testimonials — link-label' },
	{
		type: 'object',
		name: 'testimonials',
		label: 'Testimonials',
		list: true,
		ui: { itemProps: (item) => ({ label: item?.author }) },
		fields: [
			{ type: 'string', name: 'quote', label: 'Quote', ui: { component: 'textarea' } },
			{ type: 'string', name: 'author', label: 'Auteur' },
			{ type: 'boolean', name: 'highlight', label: 'Uitgelicht' },
		],
	},
	{
		type: 'object',
		name: 'faq',
		label: 'Veelgestelde vragen',
		list: true,
		ui: { itemProps: (item) => ({ label: item?.q }) },
		fields: [
			{ type: 'string', name: 'q', label: 'Vraag' },
			{ type: 'string', name: 'a', label: 'Antwoord', ui: { component: 'textarea' } },
		],
	},
	{
		type: 'object',
		name: 'contact',
		label: 'Contact',
		fields: [
			{ type: 'string', name: 'titleLine1', label: 'Titel — regel 1' },
			{ type: 'string', name: 'titleLine2', label: 'Titel — regel 2' },
			{ type: 'string', name: 'text', label: 'Tekst', ui: { component: 'textarea' } },
		],
	},
];

const postFields: TinaField[] = [
	{ type: 'string', name: 'title', label: 'Titel', isTitle: true, required: true },
	{ type: 'datetime', name: 'date', label: 'Datum' },
	{ type: 'string', name: 'excerpt', label: 'Samenvatting', ui: { component: 'textarea' } },
	{ type: 'image', name: 'cover', label: 'Coverfoto' },
	{ type: 'string', name: 'coverLabel', label: 'Placeholder-tekst (als er geen foto is)' },
	{ type: 'rich-text', name: 'body', label: 'Inhoud', isBody: true },
];

const singleton = { global: true, allowedActions: { create: false, delete: false } } as const;

const collections: Collection[] = locales.flatMap(({ code, label }) => [
	{
		name: `settings_${code}`,
		label: `Site-instellingen — ${label}`,
		path: `content/${code}/settings`,
		format: 'json',
		ui: singleton,
		fields: settingsFields,
	},
	{
		name: `home_${code}`,
		label: `Homepage — ${label}`,
		path: `content/${code}/home`,
		format: 'json',
		ui: singleton,
		fields: homeFields,
	},
	{
		name: `posts_${code}`,
		label: `Blog — ${label}`,
		path: `content/${code}/posts`,
		format: 'mdx',
		fields: postFields,
	},
]);

export default defineConfig({
	branch,
	clientId: process.env.TINA_CLIENT_ID || null,
	token: process.env.TINA_TOKEN || null,
	build: {
		outputFolder: 'admin',
		publicFolder: 'public',
	},
	media: {
		tina: {
			mediaRoot: 'uploads',
			publicFolder: 'public',
		},
	},
	schema: { collections },
});
