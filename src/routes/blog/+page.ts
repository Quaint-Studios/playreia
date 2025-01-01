import type { BlogCategory } from '$lib/types';
import type { Component } from 'svelte';

interface Props {
	slug: string;
	title: string;
	description: string;
	date: string;
	author: Author;
	category: BlogCategory;
	readTime: number;
}

const postFiles = import.meta.glob('$blog-categories/**/*.svx', { eager: true });

export async function load({ url }) {
	const posts = Object.entries(postFiles).map(([slug, post]: [string, unknown]) => {
		const { title, description, date, author, category, readTime }: Props = (post as Record<string, unknown>)
			.metadata as Props;
		const content: Component = (post as Record<string, unknown>).default as Component;

		return {
			slug: slug.slice(slug.lastIndexOf('/') + 1, slug.lastIndexOf('.svx')),
			title,
			description,
			date,
			author,
			category,
			readTime: readTime || 1,
			content
		};
	});

	posts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	const page = Number(url.searchParams.get('page')) || 1;

	try {
		return {
			posts: page === 1 ? posts.slice(0, 7) : posts.slice((page - 1) * 6 + 1, page * 6 + 1),
			pages: Math.ceil((posts.length - 1) / 6)
		};
	} catch {
		return {
			posts: [],
			pages: 0
		};
	}
}
