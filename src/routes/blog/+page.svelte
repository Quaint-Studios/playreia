<script lang="ts">
	import BlogItem from '$components/layout/BlogItem.svelte';
	import Content from '$components/layout/Content.svelte';
	import Section from '$components/layout/Section.svelte';
	import Wumpus from '$images/banners/wumpus.png?enhanced&w=720;540;360';
	import { BlogCategory } from '$lib/types';
	interface BlogData {
		href: string;
		title: string;
		description: string;
		image: string;
		date: string;
		author: Author;
		category: BlogCategory;
		readTime: number; // Average WPM is 238.
	}

	const authors: Author[] = [
		{ id: '459394642', username: 'author1', name: 'Author 1' },
		{ id: '346546867', username: 'author2', name: 'Author 2' },
		{ id: '985892235', username: 'author3', name: 'Author 3' },
		{ id: '194697653', username: 'author4', name: 'Author 4' },
		{ id: '434998346', username: 'author5', name: 'Author 5' },
		{ id: '534036346', username: 'author6', name: 'Author 6' }
	];

	/*
	 * * 1. News
	 * * 2. Guide
	 * * 3. Events
	 * * 4. Patch Notes
	 * * 5. Game Update
	 * * 6. Dev Blog
	 */

	const blogData: BlogData[] = [
		{
			href: '/blog/exciting-updates',
			title: 'News: Exciting Updates Coming Soon!',
			description: 'Stay tuned for the latest news.',
			image: Wumpus,
			date: '2024-12-01',
			author: authors[0],
			category: BlogCategory.News,
			readTime: 5
		},
		{
			href: '/blog/master-the-game',
			title: 'Guide: How to Master the Game',
			description: 'Tips and tricks for success.',
			image: Wumpus,
			date: '2024-12-02',
			author: authors[1],
			category: BlogCategory.Guide,
			readTime: 10
		},
		{
			href: '/blog/upcoming-tournaments',
			title: 'Events: Upcoming Tournaments',
			description: 'Join the fun and compete.',
			image: Wumpus,
			date: '2024-12-03',
			author: authors[2],
			category: BlogCategory.Events,
			readTime: 7
		},
		{
			href: '/patch-notes/from-unity-to-godot',
			title: 'Patch Notes 0: Migrating from Unity to Godot',
			description:
				"This is the beginning, v1.0.0.0-pre-alpha of Reia. Learn about how we've migrated over from Unity to Godot.",
			image: Wumpus,
			date: '2024-12-04',
			author: authors[3],
			category: BlogCategory.PatchNotes,
			readTime: 3
		},
		{
			href: '/blog/new-features',
			title: 'Game Update: New Features Added',
			description: 'Explore the new content.',
			image: Wumpus,
			date: '2024-12-05',
			author: authors[4],
			category: BlogCategory.GameUpdate,
			readTime: 8
		},
		{
			href: '/blog/dev-blog-1',
			title: 'Dev Blog: Behind the Scenes',
			description: 'Insights from the development team.',
			image: Wumpus,
			date: '2024-12-06',
			author: authors[5],
			category: BlogCategory.DevBlog,
			readTime: 6
		}
	];
</script>

<Content>
	<h1 class="page-title">The Reia Blog and Stories</h1>
	<Section>
		<div class="lg-grid">
			<BlogItem
				href={blogData[0].href}
				title={blogData[0].title}
				description={blogData[0].description}
				image={blogData[0].image}
				date={blogData[0].date}
				author={blogData[0].author}
				category={blogData[0].category}
				readTime={blogData[0].readTime}
				size="large"
			/>
		</div>

		<div class="md-grid">
			{#each blogData.slice(1) as blogItem}
				<BlogItem
					href={blogItem.href}
					title={blogItem.title}
					description={blogItem.description}
					image={blogItem.image}
					date={blogItem.date}
					author={blogItem.author}
					category={blogItem.category}
					readTime={blogItem.readTime}
					size="medium"
				/>
			{/each}
		</div>
	</Section>
</Content>

<style lang="postcss">
	.lg-grid, .md-grid {
		@apply max-w-screen-xl;
	}
	.lg-grid {
		@apply mx-auto grid grid-cols-1 mb-12;
	}
	.md-grid {
		@apply mx-auto grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3;
	}
</style>
