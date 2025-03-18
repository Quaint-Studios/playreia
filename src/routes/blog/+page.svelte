<script lang="ts">
	import { page } from '$app/state';
	import BlogItem from '$components/layout/BlogItem.svelte';
	import Content from '$components/layout/Content.svelte';
	import Paginator from '$components/layout/Paginator.svelte';
	import Section from '$components/layout/Section.svelte';
	import Meta from '$components/seo/Meta.svelte';
	import Wumpus from '$images/banners/wumpus.png?enhanced&w=720;540;360';

	let currentPage = Number(page.url.searchParams.get('page')) || 1;

	let { data } = $props();
	const { posts, pages } = data;
</script>

<Meta
	titlePrefix=""
	title="Blog, News, Guide, Events, Patch Notes and Dev Blogs"
	titleSuffix=" - Reia"
	keywords={'reia, story, game, endless, explore endless, worlds, magical, version, rpg, rpg boss, hardest rpg bosses, adventure, action, managing, play, enjoy, revisit, replay, access, choice, main, story, quests, consequence, ignore, mini-quests, completing, abilities, events, short, prerequisite, explore, combat, dungeons, types, secondary, possibilities, stories, linear, ways, content, order, bosses, choices, quest, world, key, battles, unlock, environment, friends, economy, consequences, character, blog gameplay, news gameplay, focus, extensive, complete,experience, reward, store, rewards, slow-paced, fast-paced, infinite, lot, open-source, resources, leveling, fight, choose ,stronger, gear, focuses, spirits, means, players, time, section, create, participants, days, fleet, press-kit, type, battle, war, creating, in-game, music, island, cosmetics, owner, home, city, matter, unique, teleport, floating, lore, cost, prioritize, pay, coming, coming soon, buildings, invite, build, levels, gain, islands, connected, provide, enemies, dictate, spirit, stalls, list, venture, stored, numbers, claim, hire, gather, feel, selling, farming, manufacturing, future, expeditions, power, resource, features, specific,  land, automate, advantage, proper, centered, element, contribute, zone, planning, zones, difficulty, progress, vibrant, approach, theory, project, listening, feedback, community, development, code, free, github, propose, info, press-kit, main story, the story, the main, a game, the city, of reia, the economy, your character, unlock new, contribute to, the community, the progress, this project, spirits to, your island, section of, infinite city, the infinite, the game, play the, players that, focus on, story and, access to, story is, us contribute, power to, listening to, project is, and cosmetics, lore and, creating in-game, to provide, a focus, that zone, your spirit, your resource, to dictate, a specific, centered around, to gain, to claim, your spirits, islands you, can build, your floating island, cost goes, leveling up, will unlock, types of, of stories, a consequence, can revisit, reia you, you play, story quests, infinite dungeons, own island, economy managing, action adventure, reia is, an open-source, play now, worlds reia, magical worlds, endless magical, the main story, the infinite city, for this project, this project is, your spirits to, reia - explore, - explore endless, explore endless magical, endless magical worlds, game that free, game games for free, online game, games and online, free onlin e games, game and play, games to play, play game, games rpg, games playable, magical games, download game, choose your story games, adventure game, action game, role play game, magical story, making your own character, online game play, play games, playable games online, island games, games to play online, play online, with friends games, build your own game online, rpg games online, games that you can download, games you can play with friends, create a free game, action game play online, i play games, games to play, play choose your own adventure online, a game that you can download, games that i can play with, some games to play online, rpg game, ps5 rpg game, xbox rpg game, android rpg game, best android rpg game, iphone rpg game, best iphone rpg game, free iphone rpg game, github game, github game sites, github game websites, video game press kit, press kit, game press kit, press kit examples, orpg, orpg online, action-adventure game, online adventure game, choose your own adventure game online, adventure game online, fantasy game, my fantasy game best rpg story, rpg story games, best rpg story games, main story quests, software developer feedback examples, developer feedback examples, free rpg games, free rpg, free rpg day, best free rpg games, free rpg game for android, the main story is, reia - explore endless, endless magical worlds reia, explore endless magical worlds'}
	description="This blog delivers news on Reia. Catch up with news updates, guides, events, patch notes, game updates, and dev logs all about Reia. Learn more about the development process, new art, and releases. Get all of the news on the game here."
>
	{#snippet structured()}
		<script type="application/ld+json">
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
				"dateModified": "2025-1-10"
			}
		</script>
	{/snippet}
</Meta>

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
