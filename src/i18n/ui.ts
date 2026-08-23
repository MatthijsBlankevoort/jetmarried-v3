/**
 * Central language table. Adding a language means: add it here, add the same
 * code to `locales` in tina/config.ts, and create content/<code>/.
 */
export const locales = ['nl', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'nl';

/** Label in the header switcher. */
export const localeLabel: Record<Locale, string> = { nl: 'NL', en: 'EN', de: 'DE' };
/** BCP 47 tag for <html lang>, hreflang and date formatting. */
export const localeTag: Record<Locale, string> = { nl: 'nl-NL', en: 'en-GB', de: 'de-DE' };

export const isLocale = (value: unknown): value is Locale => locales.includes(value as Locale);
export const toLocale = (value: unknown): Locale => (isLocale(value) ? value : defaultLocale);

/**
 * Route param for `[...locale]`. The default language lives at the root, so it
 * has no prefix and therefore no param.
 */
export const localeParam = (locale: Locale) => (locale === defaultLocale ? undefined : locale);

/** Absolute path for `path` in `locale` — localePath('de', '/blog/') → '/de/blog/'. */
export const localePath = (locale: Locale, path = '/') => (locale === defaultLocale ? path : `/${locale}${path}`);

/** Strips the locale prefix off a pathname — '/de/blog/' → '/blog/'. */
export const stripLocale = (pathname: string) => {
	const match = locales.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
	return match ? pathname.slice(match.length + 1) || '/' : pathname;
};

const ui = {
	nl: {
		'site.title': 'Jetmarried — Mariëtte Boot, trouwambtenaar op Texel',
		'site.description':
			'Een ceremonie moet passen als een warme jas. Ik luister, schrijf jullie verhaal op en spreek het uit alsof ik erbij was.',
		'header.nav': 'Hoofdmenu',
		'header.mobileNav': 'Mobiel menu',
		'header.menuToggle': 'Menu openen',
		'header.language': 'Taal',
		'hero.cta': 'Ja, ik wil',
		'hero.ctaSecondary': 'Bekijk de ceremonies',
		'hero.photoLabel': 'FOTO — sfeerbeeld bruidspaar, liggend, veel lucht',
		'about.cta': 'Lees mijn verhaal',
		'about.photoAlt': 'Portret Mariëtte',
		'about.photoLabel': 'FOTO — portret Mariëtte,\nbuiten, natuurlijk licht',
		'ceremony.cta': 'Deze ceremonie aanvragen',
		'werkwijze.eyebrow': 'Zo werkt het',
		'locations.eyebrow': 'Locaties',
		'testimonials.title': 'Wat bruidsparen zeggen',
		'faq.title': 'Veelgestelde vragen',
		'faq.intro': 'Staat jullie vraag er niet bij? Bel gerust:',
		'contact.eyebrow': 'Contact',
		'contact.name': 'Naam',
		'contact.email': 'E-mail',
		'contact.message': 'Bericht',
		'contact.consent': 'Ik ga akkoord met de privacyverklaring',
		'contact.submit': 'Versturen',
		'blog.eyebrow': 'Blog',
		'blog.teaserTitle': 'Uit mijn blog',
		'blog.all': 'Alle verhalen',
		'blog.indexTitle': 'Verhalen van Jetmarried',
		'blog.pageTitle': 'Blog — Jetmarried',
		'blog.back': '← Alle verhalen',
	},
	en: {
		'site.title': 'Jetmarried — Mariëtte Boot, wedding celebrant on Texel',
		'site.description':
			'A ceremony should fit like a warm coat. I listen, write your story down and speak it as if I had been there myself.',
		'header.nav': 'Main menu',
		'header.mobileNav': 'Mobile menu',
		'header.menuToggle': 'Open menu',
		'header.language': 'Language',
		'hero.cta': 'Yes, I do',
		'hero.ctaSecondary': 'See the ceremonies',
		'hero.photoLabel': 'PHOTO — couple, landscape, plenty of sky',
		'about.cta': 'Read my story',
		'about.photoAlt': 'Portrait of Mariëtte',
		'about.photoLabel': 'PHOTO — portrait of Mariëtte,\noutdoors, natural light',
		'ceremony.cta': 'Enquire about this ceremony',
		'werkwijze.eyebrow': 'How it works',
		'locations.eyebrow': 'Locations',
		'testimonials.title': 'What couples say',
		'faq.title': 'Frequently asked questions',
		'faq.intro': 'Is your question not listed? Just give me a call:',
		'contact.eyebrow': 'Contact',
		'contact.name': 'Name',
		'contact.email': 'Email',
		'contact.message': 'Message',
		'contact.consent': 'I agree to the privacy statement',
		'contact.submit': 'Send',
		'blog.eyebrow': 'Blog',
		'blog.teaserTitle': 'From my blog',
		'blog.all': 'All stories',
		'blog.indexTitle': 'Stories from Jetmarried',
		'blog.pageTitle': 'Blog — Jetmarried',
		'blog.back': '← All stories',
	},
	de: {
		'site.title': 'Jetmarried — Mariëtte Boot, Traurednerin auf Texel',
		'site.description':
			'Eine Zeremonie soll passen wie ein warmer Mantel. Ich höre zu, schreibe eure Geschichte auf und erzähle sie, als wäre ich dabei gewesen.',
		'header.nav': 'Hauptmenü',
		'header.mobileNav': 'Mobiles Menü',
		'header.menuToggle': 'Menü öffnen',
		'header.language': 'Sprache',
		'hero.cta': 'Ja, ich will',
		'hero.ctaSecondary': 'Zeremonien ansehen',
		'hero.photoLabel': 'FOTO — Brautpaar, quer, viel Himmel',
		'about.cta': 'Meine Geschichte lesen',
		'about.photoAlt': 'Porträt Mariëtte',
		'about.photoLabel': 'FOTO — Porträt Mariëtte,\ndraußen, natürliches Licht',
		'ceremony.cta': 'Diese Zeremonie anfragen',
		'werkwijze.eyebrow': 'So läuft es ab',
		'locations.eyebrow': 'Orte',
		'testimonials.title': 'Was Brautpaare sagen',
		'faq.title': 'Häufig gestellte Fragen',
		'faq.intro': 'Ist eure Frage nicht dabei? Ruft einfach an:',
		'contact.eyebrow': 'Kontakt',
		'contact.name': 'Name',
		'contact.email': 'E-Mail',
		'contact.message': 'Nachricht',
		'contact.consent': 'Ich stimme der Datenschutzerklärung zu',
		'contact.submit': 'Absenden',
		'blog.eyebrow': 'Blog',
		'blog.teaserTitle': 'Aus meinem Blog',
		'blog.all': 'Alle Geschichten',
		'blog.indexTitle': 'Geschichten von Jetmarried',
		'blog.pageTitle': 'Blog — Jetmarried',
		'blog.back': '← Alle Geschichten',
	},
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLocale];

/**
 * Usage in a component: `const t = useTranslations(Astro.currentLocale);`
 * Falls back to the default language when a key has not been translated yet.
 */
export const useTranslations = (locale?: string | null) => {
	const current = toLocale(locale);
	return (key: UIKey): string => ui[current][key] ?? ui[defaultLocale][key];
};

/** Formats a date in the given language, e.g. '10 april 2023' / '10 April 2023'. */
export const formatDate = (date: Date, locale: Locale) =>
	date.toLocaleDateString(localeTag[locale], { day: 'numeric', month: 'long', year: 'numeric' });
