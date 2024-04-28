<script>
	import Hero from '$lib/components/hero/Hero.svelte';
	import Meta from '$lib/components/head/meta.svelte';
	import InfoSection from '$lib/components/section/InfoSection.svelte';
	import InfoBlog from '$lib/components/section/InfoBlog.svelte';

	import AboutReia from '$lib/components/articles/AboutReia.svx';
	import Waitlist from '$lib/components/newsletter/Waitlist.svelte';
	import EventsInfoCard from '$lib/components/section/info_cards/EventsInfoCard.svelte';
	import DiscordInfoCard from '$lib/components/section/info_cards/DiscordInfoCard.svelte';
	import InfoGrid from '$lib/components/section/InfoGrid.svelte';

	let info;

	/** @type {Array<BlogItem>} */
	let blogItems = [
		{
			title: 'Version 1.0.0.0',
			url: '/blog/version-1-0-0-0',
			preview: 'This is the beginning! Migrating from Unity to Godot.',

			imageAlt: 'v1.0.0.0',
			imageTitle: 'Version 1.0.0.0'
		},
		{
			title: 'Version 1.0.0.1',
			url: '/blog/version-1-0-0-1',
			preview: 'Slowly getting there...',

			imageAlt: 'v1.0.0.1',
			imageTitle: 'Version 1.0.0.1'
		},
		{
			title: 'Version 1.0.0.2',
			url: '/blog/version-1-0-0-2',
			preview: 'Items and Inventory system, better lighting, better ui, papa-- oh.',

			imageAlt: 'v1.0.0.2',
			imageTitle: 'Version 1.0.0.2'
		}
	];
</script>

<Hero />
<InfoSection title="Info">
	<InfoGrid slot="content">
		<EventsInfoCard />
		<DiscordInfoCard />
	</InfoGrid>
</InfoSection>
<InfoSection title="Blog">
	<InfoBlog slot="content" items={blogItems} />
</InfoSection>
<InfoSection title="Explore"></InfoSection>
<AboutReia />

<Meta
	titlePrefix="Reia - "
	titleSuffix=""
	keywords={'reia, story, game, endless, explore endless, worlds, magical, version, rpg, rpg boss, hardest rpg bosses, adventure, action, managing, play, enjoy, revisit, replay, access, choice, main, story, quests, consequence, ignore, mini-quests, completing, abilities, events, short, prerequisite, explore, combat, dungeons, types, secondary, possibilities, stories, linear, ways, content, order, bosses, choices, quest, world, key, battles, unlock, environment, friends, economy, consequences, character, blog gameplay, news gameplay, focus, extensive, complete,experience, reward, store, rewards, slow-paced, fast-paced, infinite, lot, open-source, resources, leveling, fight, choose ,stronger, gear, focuses, spirits, means, players, time, section, create, participants, days, fleet, press-kit, type, battle, war, creating, in-game, music, island, cosmetics, owner, home, city, matter, unique, teleport, floating, lore, cost, prioritize, pay, coming, coming soon, buildings, invite, build, levels, gain, islands, connected, provide, enemies, dictate, spirit, stalls, list, venture, stored, numbers, claim, hire, gather, feel, selling, farming, manufacturing, future, expeditions, power, resource, features, specific,  land, automate, advantage, proper, centered, element, contribute, zone, planning, zones, difficulty, progress, vibrant, approach, theory, project, listening, feedback, community, development, code, free, github, propose, info, press-kit, main story, the story, the main, a game, the city, of reia, the economy, your character, unlock new, contribute to, the community, the progress, this project, spirits to, your island, section of, infinite city, the infinite, the game, play the, players that, focus on, story and, access to, story is, us contribute, power to, listening to, project is, and cosmetics, lore and, creating in-game, to provide, a focus, that zone, your spirit, your resource, to dictate, a specific, centered around, to gain, to claim, your spirits, islands you, can build, your floating island, cost goes, leveling up, will unlock, types of, of stories, a consequence, can revisit, reia you, you play, story quests, infinite dungeons, own island, economy managing, action adventure, reia is, an open-source, play now, worlds reia, magical worlds, endless magical, the main story, the infinite city, for this project, this project is, your spirits to, reia - explore, - explore endless, explore endless magical, endless magical worlds, game that free, game games for free, online game, games and online, free onlin e games, game and play, games to play, play game, games rpg, games playable, magical games, download game, choose your story games, adventure game, action game, role play game, magical story, making your own character, online game play, play games, playable games online, island games, games to play online, play online, with friends games, build your own game online, rpg games online, games that you can download, games you can play with friends, create a free game, action game play online, i play games, games to play, play choose your own adventure online, a game that you can download, games that i can play with, some games to play online, rpg game, ps5 rpg game, xbox rpg game, android rpg game, best android rpg game, iphone rpg game, best iphone rpg game, free iphone rpg game, github game, github game sites, github game websites, video game press kit, press kit, game press kit, press kit examples, orpg, orpg online, action-adventure game, online adventure game, choose your own adventure game online, adventure game online, fantasy game, my fantasy game best rpg story, rpg story games, best rpg story games, main story quests, software developer feedback examples, developer feedback examples, free rpg games, free rpg, free rpg day, best free rpg games, free rpg game for android, the main story is, reia - explore endless, endless magical worlds reia, explore endless magical worlds'}
	description="Explore endless worlds and embark on a magical adventure of a lifetime! Reia is an action-adventure RPG. Create and explore worlds. Download and play now!"
>
	<script type="application/ld+json" slot="structured">
		{
			"@context": "https://schema.org/",
			"@type": "WebSite",
			"name": "Reia",
			"url": "https://www.playreia.com"
		}
	</script>
</Meta>
