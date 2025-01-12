<script lang="ts">
	import NewsletterButton from '$components/footers/NewsletterButton.svelte';
	import Meta from '$components/seo/Meta.svelte';
	import alinks from '$constants/alinks';
</script>

<Meta
	titlePrefix=""
	title="Reia - Play an Action Adventure RPG Game"
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

	<h2>Play right now</h2>
	<p>
		You can play the game right now by visiting the <a
			href={alinks.github + '/releases'}
			target="_blank"
			rel="noopener">releases page on GitHub</a
		>. We're always looking for feedback and suggestions. If you have any, please feel free to
		<a href="/contact">contact us</a>
		or chat with us on <a href={alinks.discordMsg}>Discord</a>.
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
		@apply relative flex min-h-dvh w-full flex-col items-center justify-center bg-[--midnight] px-3 py-36;
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

	.container {
		@apply relative mt-5 flex h-min w-full max-w-[325px] items-center justify-center;
	}

	.container input {
		@apply w-full bg-[--midnight3] py-3.5 pl-3 pr-[135px] text-white;
	}
	.container input::placeholder {
		@apply text-[--borderSilver];
	}
	.container input#newsletter-page-email.error {
		@apply !border-[1px] !border-solid !border-[#ff4646] border-opacity-70;
	}
	.container input#newsletter-page-email:focus {
		@apply border-[1px] border-solid border-[--borderSilver] !bg-[--midnight5];
		box-shadow: 0 0 0 1px var(--midnight7);
	}

	button :global(figure) {
		@apply animate-spin;
	}
	button {
		width: 122px;
		height: 40.8px;
		@apply absolute right-[5px] my-auto flex justify-center rounded-lg2 font-bold;
		@apply bg-[--midnight6] py-2 text-white hover:bg-[--gold2];
	}
	button:active {
		@apply scale-[0.98];
	}
	.container #newsletter-page-email {
		@apply w-full rounded-xl !border-none !outline-none;
	}
</style>
