import * as sitemap from 'super-sitemap';
import type { ParamValues } from 'super-sitemap';

import { website } from '$lib/info';
import sitemapData from './sitemap-data.json' assert { type: 'json' };

import type { RequestHandler } from '@sveltejs/kit';
import { BlogCategory } from '$lib/types';
import { assert } from 'vitest';

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
		const { updated, date, category }: BlogCategoryProps = (post as Record<string, unknown>).metadata as BlogCategoryProps;

		const postData = {
			slug: slug.slice(slug.lastIndexOf('/') + 1, slug.lastIndexOf('.svx')),
			date: (updated ?? date)
				.split('-')
				.map((part) => part.padStart(2, '0'))
				.join('-')
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
			lastmod: `${post.date}T00:00:00Z`,
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

	const data: ParamValues = sitemapData;

	return await sitemap.response({
		origin: website,
		paramValues: {
			...paramValues,
			...data,
		},
		excludeRoutePatterns: ['^/users/\\[id\\]', '^/demo(?:/.*)?', '^/logout']
	});
};
