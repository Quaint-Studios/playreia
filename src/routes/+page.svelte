<script lang="ts">
	import { loadIcons } from '@iconify/svelte';
	import Hero from '$components/layout/Hero.svelte';
	import Section from '$components/layout/Section.svelte';
	import Meta from '$components/seo/Meta.svelte';
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
</script>

<Meta
	titlePrefix="Reia - "
	titleSuffix=""
	keywords={'reia, story, game, endless, explore endless, worlds, magical, version, rpg, rpg boss, hardest rpg bosses, adventure, action, managing, play, enjoy, revisit, replay, access, choice, main, story, quests, consequence, ignore, mini-quests, completing, abilities, events, short, prerequisite, explore, combat, dungeons, types, secondary, possibilities, stories, linear, ways, content, order, bosses, choices, quest, world, key, battles, unlock, environment, friends, economy, consequences, character, blog gameplay, news gameplay, focus, extensive, complete,experience, reward, store, rewards, slow-paced, fast-paced, infinite, lot, open-source, resources, leveling, fight, choose ,stronger, gear, focuses, spirits, means, players, time, section, create, participants, days, fleet, press-kit, type, battle, war, creating, in-game, music, island, cosmetics, owner, home, city, matter, unique, teleport, floating, lore, cost, prioritize, pay, coming, coming soon, buildings, invite, build, levels, gain, islands, connected, provide, enemies, dictate, spirit, stalls, list, venture, stored, numbers, claim, hire, gather, feel, selling, farming, manufacturing, future, expeditions, power, resource, features, specific,  land, automate, advantage, proper, centered, element, contribute, zone, planning, zones, difficulty, progress, vibrant, approach, theory, project, listening, feedback, community, development, code, free, github, propose, info, press-kit, main story, the story, the main, a game, the city, of reia, the economy, your character, unlock new, contribute to, the community, the progress, this project, spirits to, your island, section of, infinite city, the infinite, the game, play the, players that, focus on, story and, access to, story is, us contribute, power to, listening to, project is, and cosmetics, lore and, creating in-game, to provide, a focus, that zone, your spirit, your resource, to dictate, a specific, centered around, to gain, to claim, your spirits, islands you, can build, your floating island, cost goes, leveling up, will unlock, types of, of stories, a consequence, can revisit, reia you, you play, story quests, infinite dungeons, own island, economy managing, action adventure, reia is, an open-source, play now, worlds reia, magical worlds, endless magical, the main story, the infinite city, for this project, this project is, your spirits to, reia - explore, - explore endless, explore endless magical, endless magical worlds, game that free, game games for free, online game, games and online, free onlin e games, game and play, games to play, play game, games rpg, games playable, magical games, download game, choose your story games, adventure game, action game, role play game, magical story, making your own character, online game play, play games, playable games online, island games, games to play online, play online, with friends games, build your own game online, rpg games online, games that you can download, games you can play with friends, create a free game, action game play online, i play games, games to play, play choose your own adventure online, a game that you can download, games that i can play with, some games to play online, rpg game, ps5 rpg game, xbox rpg game, android rpg game, best android rpg game, iphone rpg game, best iphone rpg game, free iphone rpg game, github game, github game sites, github game websites, video game press kit, press kit, game press kit, press kit examples, orpg, orpg online, action-adventure game, online adventure game, choose your own adventure game online, adventure game online, fantasy game, my fantasy game best rpg story, rpg story games, best rpg story games, main story quests, software developer feedback examples, developer feedback examples, free rpg games, free rpg, free rpg day, best free rpg games, free rpg game for android, the main story is, reia - explore endless, endless magical worlds reia, explore endless magical worlds'}
	description="Explore endless worlds and embark on a magical adventure of a lifetime! Reia is an action-adventure RPG. Create and explore worlds. Download and play now!"
>
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Reia",
				"url": "https://www.playreia.com"
			}
		</script>
	{/snippet}
</Meta>

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