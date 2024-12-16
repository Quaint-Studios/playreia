<script lang="ts">
	import { loadIcons } from '@iconify/svelte';
	import Hero from '$components/layout/Hero.svelte';
	import Section from '$components/layout/Section.svelte';
	import Meta from '$components/seo/Meta.svelte';
	import DownloadSection from '$lib/pages/home/DownloadSection.svelte';
	import SectionCard from '$components/layout/SectionCard.svelte';
	import CharacterList from '$components/layout/CharacterList.svelte';

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
	<DownloadSection />
</Section>

<Section headerColor="var(--gold)" title="Announcements">
	<div class="announcements">
		<SectionCard
			shout
			title="Join our Discord"
			url="https://discord.com/users/83303489945468928"
			cta="Message"
		>
			{#snippet img()}
				<enhanced:img
					src="$images/banners/discord.jpg?enhanced&w=428,512,1024"
					alt="Discord Banner"
					sizes="min(428px, 60vw)"
				/>
			{/snippet}
			Join our Discord server to chat with the developers and other players! Send a message to
			<code class="gold">makosai</code> and ask to join.
		</SectionCard>
		<SectionCard shout title="Alpha Tests" url="/newsletter" cta="Notify me">
			{#snippet img()}
				<enhanced:img
					src="$images/banners/newsletter.jpg?enhanced&w=428,512,1024"
					alt="Newsletter Banner"
					sizes="min(428px, 60vw)"
				/>
			{/snippet}
			Testing currently is private. But you can subscribe to our newsletter to get in on some cool multiplayer
			tests!
		</SectionCard>
		<SectionCard
			shout
			title="Folding@Home"
			url="/foldingathome"
			cta="Start folding"
		>
			{#snippet img()}
				<enhanced:img
					src="$images/banners/folding_at_home.jpg?enhanced&w=428,512,1024"
					alt="Newsletter Banner"
					sizes="min(428px, 60vw)"
					style="object-position: 100% 0;"
				/>
			{/snippet}
			"Folding" is your way to help fight diseases. Join our <a href="https://stats.foldingathome.org/team/1066033">team</a> and help us contribute to the cause.
			We're looking into distributing in-game rewards as an incentive!
		</SectionCard>
	</div>
</Section>

<Section headerColor="var(--gold)" lead="Learn" title="Character Previews">
	<CharacterList />
</Section>

<Section headerColor="var(--gold)" title="Blog Posts">
	<div class="mx-auto mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
		<SectionCard
			title="Update v1.0.0.5-pre-alpha | Changelogs are finally here!"
			date={new Date('January 1, 2024 12:02')}
			url="https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.5-pre-alpha"
			cta="View changelog"
			target="_blank"
			rel={['noopener', 'noreferrer']}
		>
			{#snippet img()}
				<enhanced:img
					src="$images/banners/wumpus.png?enhanced&w=428,512,1024"
					alt="Blog Banner"
					sizes="min(428px, 60vw)"
				/>
			{/snippet}
			Pre-alpha is coming along nicely! I'm excited to see where this goes. I hope you are too! This
			update is pretty big. It features a changelog, new main menu, vfx, new water shaders, more inventory
			updates, Discord SDK integration, and more.
		</SectionCard>
		<SectionCard
			title="Update v1.0.0.4-pre-alpha | Now with creepy health bars that follow you, an inventory layout change, and transparent colors!"
			date={new Date('October 2, 2023 10:02')}
			url="https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.4-pre-alpha"
			cta="View changelog"
			target="_blank"
			rel={['noopener', 'noreferrer']}
		>
			{#snippet img()}
				<enhanced:img
					src="$images/banners/wumpus.png?enhanced&w=428,512,1024"
					alt="Blog Banner"
					sizes="min(428px, 60vw)"
				/>
			{/snippet}
			It's almost time. We're getting closer. This update features health bars, a minimap, icons to identify
			entities on the minimap, inventory updates, and some fixes.
		</SectionCard>
		<SectionCard
			title="Update v1.0.0.3-pre-alpha | New character and animation."
			date={new Date('October 1, 2023 14:06')}
			url="https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.3-pre-alpha"
			cta="View changelog"
			target="_blank"
			rel={['noopener', 'noreferrer']}
		>
			{#snippet img()}
				<enhanced:img
					src="$images/banners/wumpus.png?enhanced&w=428,512,1024"
					alt="Blog Banner"
					sizes="min(428px, 60vw)"
				/>
			{/snippet}
			I don't believe anyone truly likes rigging and the time it consumes. Finally animated the character
			model. The character model has been changed.
		</SectionCard>
		<SectionCard
			title="Update v1.0.0.2-pre-alpha | Items and Inventory system, better lighting, better ui, papa-- oh."
			date={new Date('September 25, 2023 02:00')}
			url="https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.2-pre-alpha"
			cta="View changelog"
			target="_blank"
			rel={['noopener', 'noreferrer']}
		>
			{#snippet img()}
				<enhanced:img
					src="$images/banners/wumpus.png?enhanced&w=428,512,1024"
					alt="Blog Banner"
					sizes="min(428px, 60vw)"
				/>
			{/snippet}
			Okay, we have a stick to fight with now. But... we can't use it? What the!?! This update includes
			music, a Sound Manager, updates to the UI, and many more. Check it out!
		</SectionCard>
		<SectionCard
			title="Update v1.0.0.1-pre-alpha | Slowly getting there..."
			date={new Date('September 22, 2023 05:15')}
			url="https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.1-pre-alpha"
			cta="View changelog"
			target="_blank"
			rel={['noopener', 'noreferrer']}
		>
			{#snippet img()}
				<enhanced:img
					src="$images/banners/wumpus.png?enhanced&w=428,512,1024"
					alt="Blog Banner"
					sizes="min(428px, 60vw)"
				/>
			{/snippet}
			Only if we had something to fight with other than our fists. The lighting is improved. But... it
			could be better! We now have... COMBAT! You can click things. And more.
		</SectionCard>
		<SectionCard
			title="Update: v1.0.0.0-pre-alpha | This is the beginning! Migrating from Unity to Godot."
			date={new Date('September 21, 2023 14:59')}
			url="https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.0-pre-alpha"
			cta="View changelog"
		>
			{#snippet img()}
				<enhanced:img
					src="$images/banners/wumpus.png?enhanced&w=428,512,1024"
					alt="Blog Banner"
					sizes="min(428px, 60vw)"
				/>
			{/snippet}
			It works! We've successfully migrated from Unity to Godot. A basic level was created to test some
			features of the project. All Unity-related assets have been removed.
		</SectionCard>
	</div>
</Section>

<style lang="postcss">
	.announcements {
		@apply mx-auto mt-10 w-full;
		@apply flex flex-wrap justify-center gap-6 xl:grid xl:grid-cols-3;
	}
</style>
