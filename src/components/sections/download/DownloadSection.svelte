<script lang="ts">
	import { fade } from 'svelte/transition';

	import SectionTitle from '../SectionTitle.svelte';
	import SectionSubtitle from '../SectionSubtitle.svelte';
	import PlatformButton from './PlatformButton.svelte';
	import { quadIn } from 'svelte/easing';
	import { onMount, tick } from 'svelte';

	function progress(_node: HTMLSpanElement, { duration = 4000, easing = quadIn }) {
		return {
			duration: duration,
			css: (t: number) => {
				const eased = easing(t);
				return `width: ${100 * t}%`;
			}
		};
	}

	const desktopPlatforms = [
		{
			lead: 'Download for',
      tag: "windows",
			store: 'Windows',
			icon: 'mdi:windows'
		},
		{
			lead: 'Download for',
      tag: "mac",
			store: 'Mac',
			icon: 'mdi:apple'
		},
		{
			lead: 'Download for',
      tag: "linux",
			store: 'Linux',
			icon: 'mdi:linux'
		}
	];

	const consolePlatforms = [
		{
			lead: 'Download on',
      tag: "xbox",
			store: 'XBOX X/S',
			icon: 'mdi:xbox'
		},
		{
			lead: 'Get it on',
      tag: "playstation",
			store: 'PS4 | PS5',
			icon: 'mdi:playstation'
		},
		{
			lead: 'Get it on the',
      tag: "switch",
			store: 'Switch',
			icon: 'mdi:nintendo-switch'
		}
	];

	const mobilePlatforms = [
		{
			lead: 'Download on the',
      tag: "iphone",
			store: 'App Store',
			icon: 'mdi:apple'
		},
		{
			lead: 'Get it on',
      tag: "android",
			store: 'Google play',
			icon: 'mdi:google-play'
		}
	];

	const platforms: Platforms[] = ['Desktop', 'Console', 'Mobile'];
	let currentPlatform: Platforms = 'Desktop';
	$: transitioning = false;
	$: showProgress = false;

	onMount(() => {
		showProgress = true;
	});
</script>

<div class="section download">
	<SectionTitle>Coming Soon</SectionTitle>
	<SectionSubtitle>Play Reia across multiple platforms</SectionSubtitle>
	<div class="platforms">
		{#if currentPlatform === 'Desktop' && !transitioning}
			<div class="platform-group" in:fade out:fade>
				{#each desktopPlatforms as { lead, tag, store, icon }}
					<PlatformButton {lead} {tag} {store} {icon} />
				{/each}
			</div>
		{:else if currentPlatform === 'Console' && !transitioning}
			<div class="platform-group" in:fade out:fade>
				{#each consolePlatforms as { lead, tag, store, icon }}
					<PlatformButton {lead} {tag} {store} {icon} />
				{/each}
			</div>
		{:else if currentPlatform === 'Mobile' && !transitioning}
			<div class="platform-group" in:fade out:fade>
				{#each mobilePlatforms as { lead, tag, store, icon }}
					<PlatformButton {lead} {tag} {store} {icon} />
				{/each}
			</div>
		{/if}
	</div>
	<div class="platform-tabs">
		{#each platforms as platform, i}
			<div class="platform-tab-button">
				<button
					aria-label="{platform} Platform"
					on:click={() => {
						showProgress = false;
						tick().then(() => (showProgress = true));
						transitioning = true;
						currentPlatform = platform;
					}}
				>
					{platform}
				</button>
				<span class="progress-container">
					{#if currentPlatform === platform && showProgress}
						<span class="selected" in:fade out:fade />
						<span
							class="progress-bar"
							in:progress={{}}
							on:introend={() => {
                transitioning = true;
								currentPlatform = i === platforms.length - 1 ? platforms[0] : platforms[i + 1];
							}}
              out:fade
              on:outroend={() => (transitioning = false)}
						/>
					{/if}
				</span>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.section {
		@apply !bg-[rgb(var(--color-primary-800))];
	}

	.platform-group {
		@apply flex justify-center items-center gap-4 mt-8;
	}

	.platform-tabs {
		@apply font-bold;
		@apply flex justify-center items-center gap-4 mt-6 w-full;
	}
	.platform-tabs .progress-container {
		@apply relative block;
		@apply mt-2;
	}
	.platform-tabs .selected {
		@apply absolute w-full h-[1px] left-0 bottom-0;
		@apply border-b-2 border-solid;
		border-color: rgba(255, 255, 255, 0.4);
	}
	.platform-tabs .progress-bar {
		@apply absolute w-0 h-[1px] left-0 bottom-0;
		@apply border-b-[3px] border-solid;
		@apply z-[2];
		border-color: rgba(255, 70, 70, 0.75);
	}

	.platform-tab-button {
		@apply relative;
	}

	.platform-tab-button button {
		@apply text-xl;
	}
	.platform-tab-button button:hover {
		@apply cursor-pointer opacity-50;
	}
</style>
