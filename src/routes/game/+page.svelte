<script lang="ts">
	import { link } from '$lib/types';
	import NewsletterButton from '$components/footers/NewsletterButton.svelte';
	import Seo from '$components/seo/Seo.svelte';
	import alinks from '$constants/alinks';

	let title = 'Play an action adventure RPG game';
	let description =
		'Play Reia, an action-adventure RPG game. Play in your browser or download on Windows, Mac, and Linux. Also available for iOS and Android. Coming soon to console.';
	// prettier-ignore
	const keywords = ['reia', 'game', 'action', 'adventure', 'rpg', 'role-playing', 'role-playing game', 'action-adventure', 'action-adventure game', 'action rpg', 'adventure rpg', 'action-adventure rpg'];
	let { data } = $props();
</script>

<Seo {title} {description} {keywords} reverseDecoration={true} locale={data.locale} url={data.url}>
	{#snippet structured_data()}
		{@html `<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Download or play Reia now",
				"url": "${data.url}",
			}
		</script>`}
	{/snippet}
</Seo>

<div class="game newsletter">
	<div class="bg"></div>
	<span>Get notified</span>
	<h1>
		Get <strong>Reia Newsletter</strong>
		for an Adventure
	</h1>
	<NewsletterButton alt />
	<p>
		We'd love to include you in the <strong>game development of Reia</strong>
		. By subscribing to the newsletter, you can keep up to date with all of the major development and
		tests we do here. This also includes whenever we have special events. Newsletter members are also
		added to a waitlist to
		<strong>play the game early</strong>
		. We'll also send you
		<strong>weekly updates</strong>
		on the game's progress and notify you when we do tests and releases.
	</p>

	<h2>Play right now</h2>
	<p>
		You can play the game right now by visiting the <a
			href={alinks.github + '/releases'}
			{...link.external}
		>
			releases page on GitHub
		</a>
		. We're always looking for feedback and suggestions. If you have any, please feel free to
		<a href="/contact">contact us</a>
		or chat with us on
		<a href={alinks.discord} {...link.external}>Discord</a>
		.
	</p>
</div>

<style lang="postcss">
	@reference '$appcss';

	h2 {
		@apply mt-12;
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
