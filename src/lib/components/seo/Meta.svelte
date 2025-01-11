<script lang="ts">
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';

	interface Props {
		titlePrefix?: string;
		titleSuffix?: string;
		title?: string;
		description?: string;
		og_description?: string;
		keywords?: string;
		author?: string;
		reia_logo_meta?: string;
		canonical?: boolean;
		locale?: string;
		structured: Snippet<[]>;
		children?: Snippet<[]>;
	}

	let {
		titlePrefix = '',
		titleSuffix = ' - Reia',
		title = 'Explore an Endlessly Exciting Magical Adventure',
		description = "Explore endless worlds and embark on a magical adventure of a lifetime! Reia is an action-adventure RPG and also an open-source game. Play offline or online with friends, or login for an MMO experience! Create and explore worlds, manage your own economy and products, and restore Reia's world via the story. Choose the way you want to play.",
		og_description = 'Explore endless worlds and embark on a magical adventure of a lifetime! Enjoy an amazing story, combat, crafting, and more in a game that will continue to grow in an open-source environment. ',
		keywords = 'Play, Play the way you want, Story, Story-Focused Game, Story Game, Combat, Combat-Focused, Reia, riea, reia 2023, reia game, rhea game, rhea, reia video, reia godot, reia godot 4, reia godot4, reia Android, reia Apple, reia iOS, reia iPhone, reia mobile, reia PC, reia Desktop, reia Console, reia Playstation, reia PS4, reia PS5, reia Microsoft, reia XBOX, reia register, reia pre-register, reia beautiful, Reia indie, reia good, reia graphics, reia launch, play reia, playreia, reia test, reia release, reia registration, reia review, reia video, game, action, adventure, 3d, open world, dungeons, story, magic, multiplayer, multi player, singleplayer, single player, online, offline, video-game, videogame, video game, indie, MMO, MMORPG, oRPG, godot, godot4, indie, windows, windows 10, mac, macos, macosx, linux, PC, Desktop, PS4, PS5, XBOX, Switch, Nintendo Switch, best mobile game, best pc game, MMO PlayStation, MMORPG PS4, Action RPG, MMO game, multiple platforms, multiplayer game, multiplayer mobile game, action role-playing game, indie game, indie company, small indie company, listen to feedback, community, open-source game, code, github, github game, character creator, open world exploration, action adventure, character creation, character creator, character customization, skill tree, passive, income, economy',
		author = 'Quaint Studios',
		reia_logo_meta = '/reia_logo_meta.png',
		canonical = true,
		locale = 'en_US',
		structured,
		children
	}: Props = $props();

	let _title = `${titlePrefix}${title}${titleSuffix}`;
</script>

<svelte:head>
	{#if canonical}
		<link rel="canonical" href={`https://www.playreia.com${$page.url.pathname}`} />
	{/if}

	<title>{_title}</title>

	<meta name="title" content={_title} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="theme-color" content="#081247" />
	<meta name="robots" content="index, follow" />
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="language" content="en" />
	<meta name="revisit-after" content="3 days" />
	<meta name="author" content={author} />
	{@render structured()}

	<meta property="og:logo" content="${$page.url.origin}/pwa/android-chrome-192x192.png" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${$page.url.origin}${$page.url.pathname}`} />
	<meta property="og:title" content={_title} />
	<meta property="og:description" content={og_description} />
	<meta property="og:image" content={`${$page.url.origin}${reia_logo_meta}`} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={`${$page.url.origin}${$page.url.pathname}`} />
	<meta property="twitter:title" content={_title} />
	<meta property="twitter:description" content={og_description} />
	<meta property="twitter:image" content={`${$page.url.origin}${reia_logo_meta}`} />

	{#if children}
		{@render children()}
	{/if}
</svelte:head>
