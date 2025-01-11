<script lang="ts">
	import NewsletterButton from '$components/footers/NewsletterButton.svelte';
	import Meta from '$components/seo/Meta.svelte';
	import alinks from '$constants/alinks';
</script>

<Meta
	titlePrefix=""
	title="Reia - Download the Game and Unlock your Magical Adventure"
	titleSuffix=""
	keywords={'reia, contribute, contribute to reia, open-source, open-source contributor, open-source contribution, open-source project, open-source development, open-source community, open-source software, open-source game, open-source game development, open-source game design, open-source game art, open-source game writing, open-source game programming, open-source game developer, open-source game designer, open-source game artist, open-source game writer, open-source game programmer, open-source game development community, open-source game design community, open-source game art community, open-source game writing community, open-source game programming community, open-source game developer community, open-source game designer community, open-source game artist community, open-source game writer community, open-source game programmer community'}
	description="Contribute to Reia's development. Whether you're a programmer, artist, designer, or writer, there's a place for you in the Reia community."
>
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Download Reia",
				"url": "https://www.playreia.com/download"
			}
		</script>
	{/snippet}
</Meta>

<div class="game newsletter">
	<div class="bg"></div>
	<span>Get notified</span>
	<h1>Get <strong>Reia Newsletter</strong> for an Adventure</h1>
	<NewsletterButton alt />
	<p>
		We'd love to include you in the <strong>game development of Reia</strong>. By subscribing to the
		newsletter, you can keep up to date with all of the major development and tests we do here. This
		also includes whenever we have special events. Newsletter members are also added to a waitlist
		to <strong>play the game early</strong>. We'll also send you <strong>weekly updates</strong> on the
		game's progress and notify you when we do tests and releases.
	</p>

	<h2>Download right now</h2>
	<p>
		You can download the game right now by visiting the <a
			href={alinks.github + '/releases'}
			target="_blank"
			rel="noopener">releases page on GitHub</a
		>. We're always looking for feedback and suggestions. If you have any, please feel free to
		<a href="/contact">contact us</a>
		or chat with us on <a href={alinks.discordMsg}>Discord</a>. The platforms we immediately support
		are Windows, Linux, and Android but we will be adding iOS and MacOS support as soon as we can.
		The limiting factor is the cost of the Apple Developer Program and the hardware to test on. The
		same goes for consoles.
	</p>
</div>

<style lang="postcss">
	h2 {
		@apply mt-12;
	}
	strong {
		@apply text-[--gold];
	}
	.newsletter {
		@apply relative flex h-dvh w-full flex-col items-center justify-center bg-[--midnight] px-3 py-12;
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
		@apply text-xl font-medium text-[--borderSilver];
	}
	h1 {
		@apply max-w-screen-md text-center text-4xl sm:text-5xl md:text-6xl;
	}
	p {
		@apply mt-6 max-w-screen-md text-center text-lg font-medium text-[--borderSilver] sm:text-xl;
	}
</style>
