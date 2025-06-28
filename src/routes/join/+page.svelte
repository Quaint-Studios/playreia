<script lang="ts">
	import DiscordButton from './../../components/DiscordButton.svelte';
	import NewsletterButton from '$components/footers/NewsletterButton.svelte';
	import Meta from '$components/seo/Meta.svelte';
	import { ProgressRing } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import BlueSkyButton from '../../components/BlueSkyButton.svelte';
	import BrandButton from '../../components/BrandButton.svelte';
	import GitHubButton from '../../components/GitHubButton.svelte';
</script>

<Meta
	titlePrefix=""
	title="Join Reia Discord, Newsletter, BlueSky - Magical Adventures Awaits"
	titleSuffix=""
	keywords={'reia, newsletter, discord, bluesky, social media, game, development, tests, family, waitlist, play, early, early access, early-access, updates, weekly, progress, notify, tests, releases'}
	description="Join Reia's newsletter, discord, and follow on on BlueSky to be a part of the community. Get notified of all the major development and tests we do here."
>
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Be a part of the Reia Community",
				"url": "https://www.playreia.com/join",
				"potentialAction": {
					"@type": "SubscribeAction",
					"target": "https://www.playreia.com/join",
					"description": "Join Reia's newsletter, discord, and follow on BlueSky to learn more about the game and be a part of the community."
				}
			}
		</script>
	{/snippet}
</Meta>

<div class="newsletter">
	<div class="bg"></div>
	<span>Discord, Newsletters, BlueSky</span>
	<h1>Join Reia's Community for an Adventure</h1>

	<div class="brand-buttons">
		<DiscordButton />
		<BlueSkyButton />
	</div>

	<p>
		We'd love to include you in the <strong>game development of Reia</strong>. Join our community to
		get the latest updates, participate in tests, and be a part of the adventure. Whether you want
		to join our <a href="https://discord.playreia.com">Discord</a>, follow us on
		<a href="https://bsky.app/profile/playreia.com">BlueSky</a>, or subscribe to our
		<strong>Newsletter</strong>, we have something for everyone!
	</p>

	<NewsletterButton alt />

	<p class="text-r-gold-2">Are you a programmer or artist?</p>

	<div class="max-w-[400px] mt-6">
		<GitHubButton />
	</div>
</div>

<style lang="postcss">
	@reference '$appcss';

	.brand-buttons {
		@apply flex w-full max-w-(--breakpoint-md) items-center justify-center gap-4;
		@apply pt-8 sm:flex-row sm:gap-6;
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
