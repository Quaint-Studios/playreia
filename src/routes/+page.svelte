<script lang="ts">
	import { loadIcons } from '@iconify/svelte';
	import Hero from '$components/layout/Hero.svelte';
	import Section from '$components/layout/Section.svelte';
	import Seo from '$components/seo/Seo.svelte';
	import Download from '$lib/pages/home/Download.svelte';
	import CharacterList from '$components/layout/CharacterList.svelte';
	import Announcements from '$lib/pages/home/Announcements.svelte';
	import HomeContent from '$lib/pages/home/HomeContent.svelte';
	import BlogItem from '$components/layout/BlogItem.svelte';
	import { blogs } from '$lib/info';
	import BlogLoadMore from '$components/layout/BlogLoadMore.svelte';

	const platformIcons = [
		'mdi:windows',
		'mdi:apple',
		'mdi:linux',
		'mdi:xbox',
		'mdi:playstation',
		'mdi:nintendo-switch',
		'mdi:google-play'
	];

	loadIcons([...platformIcons]);

	let title = 'Explore an Endlessly Exciting Magical Adventure';
	let description =
		'Explore endless worlds and embark on a magical adventure of a lifetime! Reia is an action-adventure RPG. Create and explore worlds. Download and play now!';

	let { data } = $props();
</script>

<Seo
	{title}
	reverseDecoration={true}
	keywords={data.keywords}
	{description}
	locale={data.locale}
	url={data.url}
>
	{#snippet structured_data()}
		{@html `<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Reia",
				"url": "https://www.playreia.com"
			}
		</script>`}
	{/snippet}
</Seo>

<Hero />

<Section
	lead="<strong>Coming Soon</strong>"
	title="Download Reia for multiple platforms"
	titlePosition="center"
	contentPosition="center"
>
	<Download />
</Section>

<Section headerColor="var(--gold)" title="Announcements">
	<Announcements />
</Section>

<Section headerColor="var(--gold)" lead="Learn" title="Character Previews">
	<CharacterList />
</Section>

<Section headerColor="var(--gold)" title="Blog Posts">
	<div class="main-blog-container">
		{#each blogs.slice(0, 5) as blog}
			<BlogItem {...blog} />
		{/each}
		<BlogLoadMore />
	</div>
</Section>

<HomeContent />

<style lang="postcss">
	@reference '$appcss';

	.main-blog-container {
		@apply mx-auto mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3;
	}
</style>
