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
		'hero.cta': 'Plan een kennismaking',
		'hero.ctaSecondary': 'Bekijk de ceremonies',
		'hero.photoLabel': 'FOTO — sfeerbeeld bruidspaar, liggend, veel lucht',
		'about.cta': 'Lees mijn verhaal',
		'about.photoAlt': 'Portret Mariëtte',
		'about.photoLabel': 'FOTO — portret Mariëtte,\nbuiten, natuurlijk licht',
		'ceremony.cta': 'Deze ceremonie aanvragen',
		'werkwijze.eyebrow': 'Zo werkt het',
		'locations.eyebrow': 'Locaties',
		'testimonials.title': 'Wat bruidsparen zeggen',
		'testimonials.prev': 'Vorige ervaring',
		'testimonials.next': 'Volgende ervaring',
		'faq.title': 'Veelgestelde vragen',
		'faq.intro': 'Staat jullie vraag er niet bij? Bel gerust:',
		'contact.eyebrow': 'Contact',
		'contact.name': 'Naam',
		'contact.email': 'E-mail',
		'contact.message': 'Bericht',
		'contact.submit': 'Plan een kennismaking',
		'contact.date': 'Trouwdatum',
		'contact.dateUnknown': 'Nog geen vaste datum',
		'contact.ceremony': 'Welke ceremonie?',
		'contact.ceremonyUnsure': 'Weet ik nog niet',
		'contact.optional': 'optioneel',
		'contact.consentBefore': 'Ik ga akkoord met de',
		'contact.consentLink': 'privacyverklaring',
		'contact.consentAfter': '',
		'contact.sending': 'Even geduld…',
		'contact.successTitle': 'Dank jullie wel!',
		'contact.successText': 'Jullie bericht is binnen. Ik reageer meestal binnen een dag, per mail of telefoon.',
		'contact.mailtoTitle': 'Bijna klaar',
		'contact.mailtoText': 'Jullie mailprogramma opent met het bericht al ingevuld; druk daar op versturen. Opent er niets? Mail dan naar',
		'contact.error': 'Het versturen is niet gelukt. Probeer het nog eens, of mail direct naar',
		'contact.errName': 'Vul je naam in.',
		'contact.errEmail': 'Vul een e-mailadres in waarop ik kan antwoorden.',
		'contact.errConsent': 'Vink dit aan, dan mag ik jullie gegevens gebruiken om te reageren.',
		'contact.nextTitle': 'Na het versturen',
		'contact.next1': 'Ik reageer meestal binnen een dag.',
		'contact.next2': 'We spreken af voor koffie, bij mij thuis of via videobellen.',
		'contact.next3': 'Gratis en vrijblijvend — klikt het, dan pas praten we over data.',
		'contact.mailSubject': 'Kennismaking via jetmarried.nl',
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
		'hero.cta': 'Arrange a first meeting',
		'hero.ctaSecondary': 'See the ceremonies',
		'hero.photoLabel': 'PHOTO — couple, landscape, plenty of sky',
		'about.cta': 'Read my story',
		'about.photoAlt': 'Portrait of Mariëtte',
		'about.photoLabel': 'PHOTO — portrait of Mariëtte,\noutdoors, natural light',
		'ceremony.cta': 'Enquire about this ceremony',
		'werkwijze.eyebrow': 'How it works',
		'locations.eyebrow': 'Locations',
		'testimonials.title': 'What couples say',
		'testimonials.prev': 'Previous review',
		'testimonials.next': 'Next review',
		'faq.title': 'Frequently asked questions',
		'faq.intro': 'Is your question not listed? Just give me a call:',
		'contact.eyebrow': 'Contact',
		'contact.name': 'Name',
		'contact.email': 'Email',
		'contact.message': 'Message',
		'contact.submit': 'Arrange a first meeting',
		'contact.date': 'Wedding date',
		'contact.dateUnknown': 'No fixed date yet',
		'contact.ceremony': 'Which ceremony?',
		'contact.ceremonyUnsure': 'Not sure yet',
		'contact.optional': 'optional',
		'contact.consentBefore': 'I agree to the',
		'contact.consentLink': 'privacy statement',
		'contact.consentAfter': '',
		'contact.sending': 'One moment…',
		'contact.successTitle': 'Thank you!',
		'contact.successText': 'Your message has arrived. I usually reply within a day, by email or phone.',
		'contact.mailtoTitle': 'Almost there',
		'contact.mailtoText': 'Your mail app opens with the message filled in; just press send there. Nothing opened? Email me at',
		'contact.error': "Sending didn't work. Please try again, or email me directly at",
		'contact.errName': 'Please fill in your name.',
		'contact.errEmail': 'Please fill in an email address I can reply to.',
		'contact.errConsent': 'Please tick this so I may use your details to reply.',
		'contact.nextTitle': 'After you send this',
		'contact.next1': 'I usually reply within a day.',
		'contact.next2': 'We meet for coffee, at my home or by video call.',
		'contact.next3': 'Free and without obligation — only if it clicks do we talk dates.',
		'contact.mailSubject': 'First meeting via jetmarried.nl',
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
		'hero.cta': 'Kennenlernen vereinbaren',
		'hero.ctaSecondary': 'Zeremonien ansehen',
		'hero.photoLabel': 'FOTO — Brautpaar, quer, viel Himmel',
		'about.cta': 'Meine Geschichte lesen',
		'about.photoAlt': 'Porträt Mariëtte',
		'about.photoLabel': 'FOTO — Porträt Mariëtte,\ndraußen, natürliches Licht',
		'ceremony.cta': 'Diese Zeremonie anfragen',
		'werkwijze.eyebrow': 'So läuft es ab',
		'locations.eyebrow': 'Orte',
		'testimonials.title': 'Was Brautpaare sagen',
		'testimonials.prev': 'Vorherige Stimme',
		'testimonials.next': 'Nächste Stimme',
		'faq.title': 'Häufig gestellte Fragen',
		'faq.intro': 'Ist eure Frage nicht dabei? Ruft einfach an:',
		'contact.eyebrow': 'Kontakt',
		'contact.name': 'Name',
		'contact.email': 'E-Mail',
		'contact.message': 'Nachricht',
		'contact.submit': 'Kennenlernen vereinbaren',
		'contact.date': 'Hochzeitsdatum',
		'contact.dateUnknown': 'Noch kein festes Datum',
		'contact.ceremony': 'Welche Zeremonie?',
		'contact.ceremonyUnsure': 'Weiß ich noch nicht',
		'contact.optional': 'optional',
		'contact.consentBefore': 'Ich stimme der',
		'contact.consentLink': 'Datenschutzerklärung',
		'contact.consentAfter': 'zu',
		'contact.sending': 'Einen Moment…',
		'contact.successTitle': 'Vielen Dank!',
		'contact.successText': 'Eure Nachricht ist angekommen. Ich melde mich meist innerhalb eines Tages, per Mail oder Telefon.',
		'contact.mailtoTitle': 'Fast geschafft',
		'contact.mailtoText': 'Euer Mailprogramm öffnet sich mit der fertigen Nachricht; dort nur noch auf Senden drücken. Öffnet sich nichts? Schreibt mir an',
		'contact.error': 'Das Senden hat nicht geklappt. Versucht es noch einmal oder schreibt mir direkt an',
		'contact.errName': 'Bitte gebt euren Namen ein.',
		'contact.errEmail': 'Bitte gebt eine E-Mail-Adresse ein, an die ich antworten kann.',
		'contact.errConsent': 'Bitte hakt das an, damit ich eure Daten für meine Antwort nutzen darf.',
		'contact.nextTitle': 'Nach dem Absenden',
		'contact.next1': 'Ich melde mich meist innerhalb eines Tages.',
		'contact.next2': 'Wir treffen uns auf einen Kaffee, bei mir oder per Videoanruf.',
		'contact.next3': 'Kostenlos und unverbindlich — erst wenn es passt, sprechen wir über Termine.',
		'contact.mailSubject': 'Kennenlernen über jetmarried.nl',
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
