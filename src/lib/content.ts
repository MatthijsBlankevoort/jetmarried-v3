import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { locales, localePath, type Locale } from '../i18n/ui';

/** Site settings for one language. */
export const getSettings = async (locale: Locale) => (await getEntry('settings', locale))!.data;

/** Homepage content for one language. */
export const getHome = async (locale: Locale) => (await getEntry('home', locale))!.data;

/**
 * The filename part of a post id ('de/ja-ik-wil' → 'ja-ik-wil').
 *
 * This is the post's identity, not its URL: it stays the same in every
 * language, which is what ties the translations of an article together — both
 * here and in the 'Vertalingen' panel in the CMS. Never rename a file in one
 * language only.
 */
export const postKey = (id: string) => id.split('/').slice(1).join('/');

/**
 * The slug the post is published under: the translated override when the
 * editor filled one in, the filename otherwise.
 */
export const postSlug = (post: CollectionEntry<'posts'>) => post.data.slug?.trim() || postKey(post.id);

/** All posts in one language, newest first. */
export const getPosts = async (locale: Locale) =>
	(await getCollection('posts', ({ id }) => id.startsWith(`${locale}/`))).sort(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
	);

/**
 * Where this post lives in every language, for the language switcher and the
 * hreflang alternates. Slugs may differ per language, so the counterpart is
 * looked up by filename rather than derived from the URL.
 *
 * A language without a translation of this article falls back to its blog
 * index, so the switcher never leads to a 404. That fallback is flagged as
 * `translated: false`: it is fine to link to, but it must not be advertised as
 * an hreflang alternate, which is a claim that the two pages say the same thing.
 */
export const postAlternates = async (post: CollectionEntry<'posts'>) => {
	const key = postKey(post.id);
	const translations = await getCollection('posts', ({ id }) => postKey(id) === key);

	return locales.map((locale) => {
		const match = translations.find(({ id }) => id.startsWith(`${locale}/`));
		return {
			locale,
			path: localePath(locale, match ? `/blog/${postSlug(match)}/` : '/blog/'),
			translated: !!match,
		};
	});
};
