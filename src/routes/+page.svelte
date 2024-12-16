<script lang="ts">
	import Lazy from 'svelte-lazy';
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
		<SectionCard shout title="Folding@Home" url="/foldingathome" cta="Start folding">
			{#snippet img()}
				<enhanced:img
					src="$images/banners/folding_at_home.jpg?enhanced&w=428,512,1024"
					alt="Folding@Home Banner"
					sizes="min(428px, 60vw)"
					style="object-position: 100% 0;"
				/>
			{/snippet}
			"Folding" is your way to help combat diseases like cancers and Alzheimer's disease. Join our
			<a
				target="_blank"
				rel="noopener noreferer"
				href="https://stats.foldingathome.org/team/1066033">team</a
			> and help us contribute. We're looking into distributing in-game rewards as an incentive!
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

<!-- What is Reia? -->
<Section headerColor="var(--gold)" title="Exploring the World of Reia" titlePosition="left">
	<div class="blog-container">
		<div class="bg">
			<strong>An Exciting Action Adventure RPG.</strong>
		</div>
		<p class="blog col">
			Reia is a vast and immersive fantasy game filled with a thrilling storyline and action-filled
			combat. Enjoy an amazing story, combat, crafting, and more in a game that will continue to
			grow in an open-source environment. As you embark on your adventure, you'll be able to also
			experience what wonders the game has to offer. Explore the Infinite City and conquer various
			dungeons. Experience intricate crafting and gathering. Control and customize your floating
			player-owned island. And if you're feeling creative, you can even distribute in-game content
			for everyone to enjoy both free and paid! Play the way you want and never feel forced to play
			a certain way. Reia ensures a captivating experience that will leave you eagerly anticipating
			the magical adventures to come.
		</p>

		<div class="bg">
			<strong>
				Focus on the Story, Combat, milking the economy, managing your own Island, Infinite
				Dungeons, and more.
			</strong>
		</div>
		<p class="blog col">
			A fantasy game that's open-source, action, adventure, and an RPG; that's Reia. We really want
			you to be able to play the way you want. Focus on the story, combat, crafting, and your own
			floating island! There is an extensive story for you to play through with many possibilities
			that you can revisit in the same playthrough. That means there's no need to remake your
			character to experience more content. For the players that want to focus purely on combat and
			improving their stats to the max, they can also focus their gameplay on that and ignore the
			other aspects. Aside from story and combat, there's also the economy, managing and designing
			your own island, creating in-game content such as music and cosmetics to sell, automated
			battles to conquer more resources, and infinite dungeons that net you powerful gear. While
			this game is still in early access, it's a game with a lot to accomplish. With each piece put
			together, that's one more piece of content for you to enjoy. Let's dive into what content the
			game will have to offer.
		</p>
	</div>
</Section>

<!-- Adventurous Storyline -->
<Section headerColor="var(--gold)" title="Adventurous Storyline" titlePosition="left">
	<div class="blog-container">
		<div class="bg">
			<strong>Each choice has a consequence in your main life. But wait there's more…</strong>
		</div>
		<p class="blog">
			If focusing on the story is your choice then go for it. A story could give you experience as a
			reward or even new equipment. Some stories will unlock new bosses for you to fight, new events
			that reward you each time you play them, and access to other quests.
		</p>

		<p class="blog">
			There are three types of stories in Reia: <strong>Main Story</strong>,
			<strong>Quests</strong>, and <strong>Mini-Quests</strong>. The main story focuses on Reia
			herself. Each section of the main story is a requirement for a large chunk of quests. The
			major difference between the main story and quests is that the main story is linear and the
			quests can be done in whatever order you want. Mini-quests are like quests but are short.
			Obvious, right? But quests can also be extremely long or short as well. Let's get into more
			detail about each type of story in Reia.
		</p>

		<h3>Main Story</h3>
		<p class="blog">
			When completing a section of the main story you'll, as mentioned before, unlock access to new
			quests. This is a standard prerequisite. The main story can also enable to you unlock new
			Spirits and abilities too. In Reia, you spend most of your time repairing the realm and making
			it better than it was before the invasion. Collecting Spirits to unlock new abilities is one
			of the rewards you get access to from completing the main story. You'll still have to complete
			the Spirit's quest to be able to use them. But the prerequisite will require the main story to
			start the quest.
		</p>

		<h3>Quests</h3>
		<p class="blog">
			A quest focuses more on telling your story. While you play the role as one of the voices of
			Reia, you have the ability to make your own choices. And with each choice, there's a
			consequence. One of the key features of Reia though is that with those consequences, you're
			not locked out of certain rewards forever. You can revisit the past and replay the story with
			different outcomes, gaining unique rewards for doing so with a slight drawback. These
			drawbacks are usually cosmetic. But whenever you do future quests, your past choices will
			influence them.
		</p>

		<h3>Mini-Quests</h3>
		<p class="blog">
			These short stories stitch together key events in the lore and can even be something as
			trivial as planting a potato. Something so simple that comes in handy in a quest later down
			the line. They'll still reward you with experience but it will be much less.
		</p>

		<p class="blog">
			Those three types of stories leave you with plenty of content to peruse through. Whether you
			prefer your stories linear or in your own order, you have two options!
		</p>
	</div>
</Section>

<Section headerColor="var(--gold)" title="Combat with Action" titlePosition="left">
	<div class="blog-container">
		<div class="bg">
			<strong>Ignore the story and stomp out the enemies! Focus on getting stronger.</strong>
		</div>
		<p class="blog">
			For the players that enjoy the thrill of heart-wrenching combat, whether it's fast-paced or
			slow-paced, this is for you. If you're not a huge fan of the story then you can focus on the
			combat. Fight endlessly and only complete the parts of the story which unlocks content that'll
			enhance your combat experience.
		</p>

		<h3>How Reia's Combat Systems are Influenced</h3>
		<p class="blog">
			One of the things that sparked the creation of Reia as a game was some amazing combat in other
			games. The feeling that if you were hit by a well-telegraphed attack then you should expect a
			well-deserved loss of brain cells from your character. Well, well, well… If it isn't the
			consequences of your own actions.
		</p>
		<p class="blog">
			It doesn't matter if you're fighting bosses, mini-bosses, or just your average enemy. We want
			most of the content to feel engaging. Some content should remain calm for players that would
			like a slow-paced experience. So you can still play the game on the side while working or
			reading a book if that's the case! The focus here is to provide content that requires
			different levels of attention and rewarding you accordingly.
		</p>

		<h3>Diversifying your Playstyle with Spirits</h3>
		<p class="blog">
			Additionally, when you gather more spirits you also diversify the possibilities you can build
			your playstyle around. Each spirit will unlock new passives. Leveling up your character will
			do the same. Leveling up your spirit will allow you to branch out into the skill tree as your
			character gets more efficient at using a spirit. This means you can eventually mix more
			spirits together in unique ways.
		</p>

		<h3>Governing Cities and War</h3>
		<p class="blog">
			PvP and team-based gameplay will also be a focus. While you can own an island, you can also
			have a group of players, a Fleet, that own a city. These battles are large-scale and takes a
			few days to complete. It involves first declaring war against the city. Then scheduling pay
			rates for all participants in the first wave. The battle has strategic elements to it that are
			still being finalized. The focus though is allowing participants to gain something great out
			of it and not just having the rewards from capturing the city go to the owner of the Fleet.
		</p>

		<p class="blog">
			Whoever is the owner of the city will have power to dictate taxes, prioritize imports and
			exports, creating and destroying buildings, and more. They’ll essentially be governing the
			city. A profitable endeavor in most areas. After a battle is over, the city can’t be warred
			for another two days by other Fleets or another week by the same Fleet. To prevent a
			bombardment of attacks, a deposit is required to declare war. The cost goes down as time
			passes. A small percentage of this cost goes to the owner of the island if they keep it and
			the rest goes to the economy of the game.
		</p>
	</div>
</Section>

<Section headerColor="var(--gold)" title="The Infinite City" titlePosition="left">
	<div class="blog-container">
		<div class="bg">
			<strong>A unique dungeon and exploring experience with hidden features.</strong>
		</div>
		<Lazy keep={true} class="blog-banner">
			<enhanced:img
				src="$images/pages/home/InfiniteCity_GENERATED.jpeg?enhanced&w=1920;1280;720"
				alt="The Infinite City"
				title="The Infinite City - Reia"
				sizes="min(1280px, 100vw)"
			/>
		</Lazy>
		<p class="blog">
			If that’s not enough, then venture into the Infinite City. A collection of dungeons in an open
			world environment where the deeper you go the stronger the monsters get. Unlock checkpoints to
			teleport to them later and to teleport back. But be careful, returning from the Infinite City
			poses risks. If you’ve received any rewards from a dungeon, the City will try to claim it
			back. The loot isn’t yours forever unless you can make it out. And the only way you can
			teleport is by waystones. Teleport tablets or spells do not work in the Infinite City.
		</p>

		<h3>The Dangers of The Infinite City</h3>
		<p class="blog">
			The Infinite City houses many threats. It’s not your typical hostile area. While there are
			many enemies that want to rip and tear you to to shreds, that’s not the only thing you’ll have
			to worry about. If you want to avoid those enemies, you have another way to traverse the
			vastness of these infinite dungeons. There are areas that require you to complete intuitive
			puzzles to advance forward rather than fighting your way through. But, beware, if you fail the
			puzzles there will be consequences. It’s a trade-off for the calm nature of this route.
		</p>

		<h3>Sharing or Selling your Discoveries</h3>
		<p class="blog">
			When you make your way through the Infinite City and conquer a dungeon, if you brought a map
			with you then you’ll have the option of using it. You can record your findings at that
			location. This is useful because a player can purchase your map from you and when they use it
			themselves, they’ll be able to choose an undiscovered place on their own map to change to
			match the copy. However, if the location is already discovered then they’ll just have to
			complete that area and then they can overwrite it with the copy they obtained! The catch
			though is that the cost to copy a map will increase the more you use it on the same dungeon.
		</p>

		<h3>Risks and Rewards</h3>
		<p class="blog">
			When you’ve completed any form of activity in the Infinite City, you’ll get loot. You can also
			use that loot immediately. But, it’s not yours to keep just yet. Until you can return to a
			safezone, the Infinite City will maintain a grasp on your newly obtained loot. You’ll soon
			come to realize that as you venture closer towards the safezone there will be a series of
			challenges you’re presented with. These challenges could be debuffs on you, buffs for enemies,
			modified spawns, or even sudden death within a time limit. The deeper you venture in certain
			areas, the more lethal the risks. But you’ll still be rewarded for your risks.
		</p>
	</div>
</Section>

<style lang="postcss">
	.announcements {
		@apply mx-auto mt-10 w-full;
		@apply flex flex-wrap justify-center gap-6 xl:grid xl:grid-cols-3;
	}
</style>
