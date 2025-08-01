<script lang="ts">
	import Seo from '$components/seo/Seo.svelte';
	import alinks from '$constants/alinks';
	import { cdn, link } from '$lib/types';

	let title = 'Play Reia in your Browser';
	let description =
		'Play Reia, an action-adventure RPG game. Play in your browser or download on Windows, Mac, and Linux. Also available for iOS and Android. Coming soon to console.';
	// prettier-ignore
	const keywords=['reia', 'game', 'action', 'adventure', 'rpg', 'role-playing', 'role-playing game', 'action-adventure', 'action-adventure game', 'action rpg', 'adventure rpg', 'action-adventure rpg']

	let { data } = $props();
</script>

<Seo {title} {description} {keywords} reverseDecoration={true} locale={data.locale} url={data.url}>
	{#snippet structured_data()}
		{@html `<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "${title}",
				"url": "${data.url}",
			}
		</script>`}
	{/snippet}
</Seo>

<div class="game newsletter">
	<div class="bg"></div>
	<span>v1.1.0-alpha</span>
	<h1>Play Reia in your Browser</h1>
	<p>
		Congrats! You've found the secret web version of Reia. This is a test version of the game that
		we're using to develop the game in a browser. This is a <strong>work in progress</strong>
		and is not fully functional yet. Feel free to share any feedback or suggestions you have. If you
		have any, please
		<a href="/contact">contact us</a>
		or chat with us on
		<a href={alinks.discord}>Discord</a>
		.
	</p>
	<p>
		If it fails to load, chances are it's an uncommon issue where a file or image gets blocked by
		the browser because of the <a
			href="https://developer.mozilla.org/en-US/docs/Web/API/Window/crossOriginIsolated#cross-origin_isolating_a_document"
			{...link.externalnoref}
		>
			strict security settings
		</a>
		we apply. We're currently working on tweaking the settings to make it work perfectly on all browsers.
	</p>

	<div class="relative mt-16 aspect-video w-full max-w-5xl bg-black">
		<iframe
			title="Reia HTML5 Game"
			src="{cdn.site}/index.html"
			allow="cross-origin-isolated; autoplay; fullscreen; microphone; midi; clipboard-read; clipboard-write"
			class="relative h-full w-full"
			id="game-frame"
		>
			Your browser does not support the iframe tag.
		</iframe>
	</div>
</div>

<style lang="postcss">
	@reference '$appcss';

	#game-frame:focus-visible {
		@apply outline-none;
	}

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
