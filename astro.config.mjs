// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	// Absolute URLs for the hreflang alternates — change this if the domain differs.
	site: 'https://www.jetmarried.nl',
	integrations: [mdx()],
	i18n: {
		defaultLocale: 'nl',
		locales: ['nl', 'en', 'de'],
		routing: {
			// Dutch stays on `/`, the other languages get a `/en/` or `/de/` prefix.
			prefixDefaultLocale: false,
		},
	},
});
