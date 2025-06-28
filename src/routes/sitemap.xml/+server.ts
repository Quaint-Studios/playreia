import * as sitemap from 'super-sitemap';
import type { ParamValues, ParamValue } from 'super-sitemap';

import { CANONICAL_ORIGIN } from '$lib/info';
import sitemapData from '$lib/sitemap-data.json' assert { type: 'json' };

import type { RequestHandler } from '@sveltejs/kit';
import { BlogCategory } from '$lib/types';
import { localizeHref } from '$lib/paraglide/runtime';

export const prerender = true;

function getCategory(category: BlogCategory) {
	switch (category) {
		case BlogCategory.News:
			return 'news';
		case BlogCategory.Guide:
			return 'guide';
		case BlogCategory.Events:
			return 'events';
		case BlogCategory.PatchNotes:
			return 'patch-notes';
		case BlogCategory.GameUpdate:
			return 'game-update';
		case BlogCategory.DevBlog:
			return 'dev-blog';
		default:
			throw new Error('Invalid category');
	}
}

export const GET: RequestHandler = async () => {
	const posts: Record<string, { slug: string; date: string }[]> = {};

	const allBlogCategories = import.meta.glob(`$blog-categories/**/*.svx`, { eager: true });
	Object.entries(allBlogCategories).forEach(([slug, post]: [string, unknown]) => {
		const { updated, date, category }: BlogCategoryProps = (post as Record<string, unknown>)
			.metadata as BlogCategoryProps;

		const postData = {
			slug: slug.slice(slug.lastIndexOf('/') + 1, slug.lastIndexOf('.svx')),
			date: (updated ?? date)
				.split('-')
				.map((part) => part.padStart(2, '0'))
				.join('-')
				.replace(/T.*/, '')
		};

		const categorySlug = getCategory(category);

		if (!posts[categorySlug]) {
			posts[categorySlug] = [];
		}

		posts[categorySlug].push(postData);
	});

	const paramValues = Object.entries(posts).reduce((acc, [category, postList]) => {
		acc[`/${category}/[slug]`] = postList.map((post) => ({
			values: [post.slug],
			lastmod: post.date,
			changefreq: 'weekly',
			priority: 0.5
		}));
		return acc;
	}, {} as ParamValues);

	const allCategorySlugs = Object.values(BlogCategory).map(getCategory);
	for (const category of allCategorySlugs) {
		const key = `/${category}/[slug]`;
		if (!(key in paramValues)) {
			paramValues[key] = [];
		}
	}

	const data: Record<string, ParamValue[]> = sitemapData as Record<string, ParamValue[]>;
	const defaultLastmod = '2025-06-28';
	Object.keys(data).forEach((key) => {
		if (!data[key][0].lastmod) {
			data[key][0].lastmod = defaultLastmod;
		}
	});

	return await sitemap.response({
		origin: CANONICAL_ORIGIN,
		paramValues: {
			...paramValues,
			...data
		},
		excludeRoutePatterns: [
			'^.*/users/\\[id\\]',
			'^/demo(?:/.*)?',
			'^/logout',
			'^/play',
			'^/profile(?:/.*)?'
		],
		defaultChangefreq: 'monthly',
		defaultPriority: 0.5,
		sort: 'alpha',
		lang: {
			default: 'en',
			alternates: ['de', 'es', 'fr', 'ig', 'zh']
		},
		processPaths: (paths) => {
			return paths.map(({ path, ...rest }) => {
				if (path === '/') {
					return {
						...rest,
						path: '/',
						alternates: [
							{ lang: 'de', path: '/de' },
							{ lang: 'es', path: '/es' },
							{ lang: 'fr', path: '/fr' },
							{ lang: 'ig', path: '/ig' },
							{ lang: 'zh', path: '/zh' }
						]
					};
				}

				return {
					...rest,
					path: localizeHref(path, { locale: 'en' }),
					alternates: [
						{ lang: 'de', path: localizeHref(path, { locale: 'de' }) },
						{ lang: 'es', path: localizeHref(path, { locale: 'es' }) },
						{ lang: 'fr', path: localizeHref(path, { locale: 'fr' }) },
						{ lang: 'ig', path: localizeHref(path, { locale: 'ig' }) },
						{ lang: 'zh', path: localizeHref(path, { locale: 'zh' }) }
					]
				};
			});
		}
	});
};
