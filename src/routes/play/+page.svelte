<script lang="ts">
	import Meta from '$components/seo/Meta.svelte';
	import alinks from '$constants/alinks';
	import Game from '$lib/pages/game/Game.svelte';
	import { link } from '$lib/types';
</script>

<Meta
	titlePrefix=""
	title="Reia - Play Reia in your Browser"
	titleSuffix=""
	keywords={'reia, game, action, adventure, rpg, role-playing, role-playing game, action-adventure, action-adventure game, action rpg, adventure rpg, action-adventure rpg'}
	description="Play Reia, an action-adventure RPG game. Play in your browser or download on Windows, Mac, and Linux. Also available for iOS and Android. Coming soon to console."
>
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Download or Play Reia Now",
				"url": "https://www.playreia.com/game"
			}
		</script>
	{/snippet}
</Meta>

<div class="game newsletter">
	<div class="bg"></div>
	<span>v1.1.0-alpha</span>
	<h1>Play Reia in your Browser</h1>
	<p>
		Congrats! You've found the secret web version of Reia. This is a test version of the game that
		we're using to develop the game in a browser. This is a <strong>work in progress</strong> and is
		not fully functional yet. Feel free to share any feedback or suggestions you have. If you have
		any, please <a href="/contact">contact us</a>
		or chat with us on <a href={alinks.discord}>Discord</a>.
	</p>
	<p>
		If it fails to load, chances are it's an uncommon issue where a file or image gets blocked by
		the browser because of the <a
			href="https://developer.mozilla.org/en-US/docs/Web/API/Window/crossOriginIsolated#cross-origin_isolating_a_document"
			{...link.externalnoref}>strict security settings</a
		> we apply. We're currently working on tweaking the settings to make it work perfectly on all browsers.
	</p>

	<div class="relative mt-16 aspect-video w-full max-w-5xl bg-black px-4">
		<Game />
	</div>
</div>

<style lang="postcss">
	@reference '$appcss';

	strong {
		@apply text-r-gold;
	}
	.newsletter {
		@apply relative flex min-h-dvh w-full flex-col items-center justify-center px-3 py-36;
	}
	.newsletter > * {
		@apply z-10;
	}
	.newsletter .bg {
		@apply absolute z-0 h-[calc(100dvh-128px)] w-[calc(100dvw-64px)];
		@apply bg-transparent bg-contain bg-center bg-no-repeat opacity-5 sm:opacity-[3%];
		background-image: url('/images/backgrounds/magic-circle.svg');
	}

	span {
		@apply text-xl font-medium text-(--borderSilver);
	}
	h1 {
		@apply max-w-(--breakpoint-md) text-center text-4xl sm:text-5xl md:text-6xl;
	}
	p {
		@apply mt-6 max-w-(--breakpoint-md) text-center text-lg font-medium text-(--borderSilver) sm:text-xl;
	}
</style>
