<script lang="ts">
	import { page } from '$app/stores';
	import BlogItem from '$components/layout/BlogItem.svelte';
	import Content from '$components/layout/Content.svelte';
	import Paginator from '$components/layout/Paginator.svelte';
	import Section from '$components/layout/Section.svelte';
	import Wumpus from '$images/banners/wumpus.png?enhanced&w=720;540;360';

	let currentPage = Number($page.url.searchParams.get('page')) || 1;

	let { data } = $props();
	const { posts, pages } = data;
</script>

<Content>
	<h1 class="page-title">The Reia Blog and Stories</h1>
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
