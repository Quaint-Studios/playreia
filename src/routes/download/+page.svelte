<script lang="ts">
	import NewsletterButton from '$components/footers/NewsletterButton.svelte';
	import Meta from '$components/seo/Meta.svelte';
	import alinks from '$constants/alinks';
</script>

<Meta
	titlePrefix=""
	title="Reia - Download the Game and Unlock your Magical Adventure"
	titleSuffix=""
	keywords={'reia, download, download reia, download the game, download reia game, download reia action-adventure rpg, download reia action-adventure rpg game, download reia action-adventure rpg game for windows, download reia action-adventure rpg game for linux, download reia action-adventure rpg game for android, download reia action-adventure rpg game for ios, download reia action-adventure rpg game for macos, download reia action-adventure rpg game for console, download reia action-adventure rpg game for windows, download reia action-adventure rpg game for linux, download reia action-adventure rpg game for android, download reia action-adventure rpg game for ios, download reia action-adventure rpg game for macos, download reia action-adventure rpg game for console'}
	description="Download Reia, an action-adventure RPG game. Download the game for Windows, Linux, and Android. Coming soon to iOS, MacOS, and console. Get notified of updates and play the game early."
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
	<h1>Subscribe for Reia's <strong>Download Updates</strong></h1>
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
		@apply text-xl font-medium text-[--borderSilver];
	}
	h1 {
		@apply max-w-screen-md text-center text-4xl sm:text-5xl md:text-6xl;
	}
	p {
		@apply mt-6 max-w-screen-md text-center text-lg font-medium text-[--borderSilver] sm:text-xl;
	}
</style>
