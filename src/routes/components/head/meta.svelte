<script>
  import { assets } from '$app/paths';
import { page } from '$app/stores';

	/** @type {string} */
	export let title;
	export let description =
		"Explore endless worlds and embark on a magical adventure of a lifetime! Reia is an action-adventure RPG and also an open-source game. Play offline or online with friends, or login for an MMO experience! Create and explore worlds, manage your own economy and products, and restore Reia's world via the story. Choose the way you want to play.";
</script>

<svelte:head>
	<title>{title}</title>
	<!-- <link rel="canonical" href="https://playreia.com" /> -->
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Reia, riea, reia 2023, reia game, rhea game, rhea, reia video, reia godot, reia godot 4, reia godot4, reia Android, reia Apple, reia iOS, reia iPhone, reia mobile, reia PC, reia Desktop, reia Console, reia Playstation, reia PS4, reia PS5, reia Microsoft, reia XBOX, reia register, reia pre-register, reia beautiful, Reia indie, reia good, reia graphics, reia launch, play reia, playreia, reia test, reia release, reia registration, reia review, reia video, game, action, adventure, 3d, open world, dungeons, story, magic, multiplayer, multi player, singleplayer, single player, online, offline, video-game, videogame, video game, indie, MMO, MMORPG, oRPG, godot, godot4, indie, windows, windows 10, mac, macos, macosx, linux, PC, Desktop, PS4, PS5, XBOX, Switch, Nintendo Switch, best mobile game,  best pc game, MMO PlayStation, MMORPG PS4, Action RPG, MMO game, multiple platforms, multiplayer game, multiplayer mobile game, action role-playing game, indie game, indie company, small indie company, listen to feedback, community, open-source game, code, github, github game"
	/>
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="3 days" />
	<meta name="author" content="Quaint Studios" />
	<slot name="structured" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="websiste" />
  <meta property="og:url" content={`${$page.url.origin}${$page.url.pathname}`} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={`%sveltekit.assets%/meta_logo.png`} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={`${$page.url.origin}${$page.url.pathname}`} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={`%sveltekit.assets%/meta_logo.png`} />

	<slot />
</svelte:head>
