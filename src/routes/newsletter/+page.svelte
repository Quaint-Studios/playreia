<script lang="ts">
	import NewsletterButton from '$components/footers/NewsletterButton.svelte';
	import Meta from '$components/seo/Meta.svelte';
	import { ProgressRing } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
</script>

<Meta
	titlePrefix=""
	title="Reia Newsletter - Be a part of the Family and Adventure"
	titleSuffix=""
	keywords={'reia, newsletter, game, development, tests, family, waitlist, play, early, early access, early-access, updates, weekly, progress, notify, tests, releases'}
	description="Join the Reia newsletter and be a part of the family. Get notified of all the major development and tests we do here. Newsletter members are also added to a waitlist to play the game early."
>
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Join Reia's Newsletter to be a part of the Family and Adventure",
				"url": "https://www.playreia.com/newsletter",
				"potentialAction": {
					"@type": "SubscribeAction",
					"target": "https://www.playreia.com/newsletter",
					"description": "Subscribe to the Reia RPG Newsletter for a regular email newsletter with news and updates."
				}
			}
		</script>
	{/snippet}
</Meta>

<div class="newsletter">
	<div class="bg"></div>
	<span>Be a part of the family</span>
	<h1>Join the <strong>Reia Newsletter</strong> for an Adventure</h1>
	<NewsletterButton alt />
	<p>
		We'd love to include you in the <strong>game development of Reia</strong>. By subscribing to the
		newsletter, you can keep up to date with all of the major development and tests we do here. This
		also includes whenever we have special events. Newsletter members are also added to a waitlist
		to <strong>play the game early</strong>. We'll also send you <strong>weekly updates</strong> on the
		game's progress and notify you when we do tests and releases.
	</p>
</div>

<style lang="postcss">
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
		@apply max-w-(--breakpoint-md) text-center text-4xl sm:text-5xl md:text-6xl;
	}
	p {
		@apply mt-6 max-w-(--breakpoint-md) text-center text-lg font-medium text-(--borderSilver) sm:text-xl;
	}
</style>
