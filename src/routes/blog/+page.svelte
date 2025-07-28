<script lang="ts">
	import { page } from '$app/state';
	import BlogItem from '$components/layout/BlogItem.svelte';
	import Content from '$components/layout/Content.svelte';
	import Paginator from '$components/layout/Paginator.svelte';
	import Section from '$components/layout/Section.svelte';
	import Seo from '$components/seo/Seo.svelte';
	import Wumpus from '$images/banners/wumpus.png?enhanced&w=720;540;360';

	let { data } = $props();
	const { currentPage, posts, pages } = data;

	let title = 'Blog, News, Guide, Events, Patch Notes and Dev Blogs';
	let description =
		'This blog delivers news on Reia. Catch up with news updates, guides, events, patch notes, game updates, and dev logs all about Reia. Learn more about the development process, new art, and releases. Get all of the news on the game here.';
</script>

<Seo {title} {description} locale={data.locale} url={data.url}>
	{#snippet structured_data()}
		{@html `<script type="application/ld+json">
			{
				"@context": "https://schema.org",
				"@type": "BlogPosting",
				"mainEntityOfPage": {
					"@type": "WebPage",
					"@id": "https://www.playreia.com/blog"
				},
				"headline": "All Blog and News Posts",
				"description": "A compilation of news, patch notes, dev blogs, and updates regarding Reia and all things related to the game.",
				"image": "",
				"author": {
					"@type": "Organization",
					"name": "Reia",
					"url": "https://www.playreia.com/about"
				},
				"publisher": {
					"@type": "Organization",
					"name": "Reia",
					"logo": {
						"@type": "ImageObject",
						"url": "https://www.playreia.com/reia_logo_meta.png"
					}
				},
				"datePublished": "2023-12-23",
				"dateModified": "2025-07-27"
			}
		</script>`}
	{/snippet}
</Seo>

<Content>
	<h1 class="page-title">Blogs and Stories</h1>
	<Section>
		{#if posts.length === 0}
			<div class="flex min-h-[50dvh] w-full items-center justify-center">
				<p class="w-full text-center text-2xl">No posts found.</p>
			</div>
		{:else if currentPage === 1}
			<div class="lg-grid">
				<BlogItem
					href="/{posts[0].category.toLowerCase().replaceAll(' ', '-')}/{posts[0].slug}"
					title={posts[0].title}
					description={posts[0].description}
					image={Wumpus}
					date={posts[0].date}
					author={posts[0].author}
					category={posts[0].category}
					readTime={posts[0].readTime}
					size="large"
				/>
			</div>

			<div class="md-grid">
				{#each posts.slice(1, 7) as post}
					<BlogItem
						href="/{post.category.toLowerCase().replaceAll(' ', '-')}/{post.slug}"
						title={post.title}
						description={post.description}
						image={Wumpus}
						date={post.date}
						author={post.author}
						category={post.category}
						readTime={post.readTime}
						size="medium"
					/>
				{/each}
			</div>
		{:else}
			<div class="md-grid">
				{#each posts.slice(0, 6) as post}
					<BlogItem
						href="/{post.category.toLowerCase().replaceAll(' ', '-')}/{post.slug}"
						title={post.title}
						description={post.description}
						image={Wumpus}
						date={post.date}
						author={post.author}
						category={post.category}
						readTime={post.readTime}
						size="medium"
					/>
				{/each}
			</div>
		{/if}
		<div class="mt-4 w-full">
			<Paginator page={currentPage} count={pages} />
		</div>
	</Section>
</Content>

<style lang="postcss">
	@reference '$appcss';

	.lg-grid,
	.md-grid {
		@apply max-w-screen-xl;
	}
	.lg-grid {
		@apply mx-auto mb-12 grid grid-cols-1;
	}
	.md-grid {
		@apply mx-auto grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3;
	}
</style>
