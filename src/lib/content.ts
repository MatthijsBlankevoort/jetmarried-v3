import { getCollection, getEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';

/** Site settings for one language. */
export const getSettings = async (locale: Locale) => (await getEntry('settings', locale))!.data;

/** Homepage content for one language. */
export const getHome = async (locale: Locale) => (await getEntry('home', locale))!.data;

/** The slug part of a post id ('de/ja-ik-wil' → 'ja-ik-wil'). */
export const postSlug = (id: string) => id.split('/').slice(1).join('/');

/** All posts in one language, newest first. */
export const getPosts = async (locale: Locale) =>
	(await getCollection('posts', ({ id }) => id.startsWith(`${locale}/`))).sort(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
	);
