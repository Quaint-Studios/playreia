<script lang="ts">
	import { onMount } from 'svelte';
	import { quadIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import PlatformButton from '$components/core/PlatformButton.svelte';

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
			tag: 'windows',
			store: 'Windows',
			icon: 'mdi:windows'
		},
		{
			lead: 'Download for',
			tag: 'mac',
			store: 'Mac',
			icon: 'mdi:apple'
		},
		{
			lead: 'Download for',
			tag: 'linux',
			store: 'Linux',
			icon: 'mdi:linux'
		}
	];

	const consolePlatforms = [
		{
			lead: 'Download on',
			tag: 'xbox',
			store: 'XBOX X/S',
			icon: 'mdi:xbox'
		},
		{
			lead: 'Get it on',
			tag: 'playstation',
			store: 'PS4 | PS5',
			icon: 'mdi:playstation'
		},
		{
			lead: 'Get it on the',
			tag: 'switch',
			store: 'Switch',
			icon: 'mdi:nintendo-switch'
		}
	];

	const mobilePlatforms = [
		{
			lead: 'Download on the',
			tag: 'iphone',
			store: 'App Store',
			icon: 'mdi:apple'
		},
		{
			lead: 'Get it on',
			tag: 'android',
			store: 'Google play',
			icon: 'mdi:google-play'
		}
	];

	const platforms: Platforms[] = ['Desktop', 'Console', 'Mobile'];
	let currentPlatform: Platforms = $state('Desktop');
	let fadingPlatform = $state('Desktop' as Platforms);
	let showProgress = $state(false);

	onMount(() => {
		showProgress = true;
	});
</script>

<div class="platform-tabs metropolis">
	{#each platforms as platform, i}
		<div class="platform-tab-button">
			<button
				aria-label="{platform} Platform"
				onclick={() => {
					showProgress = true;
					fadingPlatform = platform;
				}}
			>
				{platform}
			</button>
			<span class="progress-container">
				{#if fadingPlatform === platform && showProgress}
					<span class="selected" in:fade></span>
					<span
						class="progress-bar"
						in:progress={{}}
						onintroend={() => {
							fadingPlatform = i === platforms.length - 1 ? platforms[0] : platforms[i + 1];
						}}
					></span>
				{/if}
			</span>
		</div>
	{/each}
</div>
<div class="platforms">
	{#if currentPlatform === 'Desktop' && fadingPlatform == 'Desktop'}
		<div
			class="platform-group"
			transition:fade
			onoutroend={() => (currentPlatform = fadingPlatform)}
		>
			{#each desktopPlatforms as { lead, tag, store, icon }}
				<PlatformButton {lead} {tag} {store} {icon} />
			{/each}
		</div>
	{:else if currentPlatform === 'Console' && fadingPlatform == 'Console'}
		<div
			class="platform-group"
			transition:fade
			onoutroend={() => (currentPlatform = fadingPlatform)}
		>
			{#each consolePlatforms as { lead, tag, store, icon }}
				<PlatformButton {lead} {tag} {store} {icon} />
			{/each}
		</div>
	{:else if currentPlatform === 'Mobile' && fadingPlatform == 'Mobile'}
		<div
			class="platform-group"
            transition:fade
			onoutroend={() => (currentPlatform = fadingPlatform)}
		>
			{#each mobilePlatforms as { lead, tag, store, icon }}
				<PlatformButton {lead} {tag} {store} {icon} />
			{/each}
		</div>
	{/if}
</div>


<style lang="postcss">
	.platforms {
		@apply flex w-full justify-center;
	}

	.platform-group {
		@apply flex items-center justify-center gap-4 scale-[.60] sm:scale-100 transition-[scale];
	}

	.platform-tabs {
        @apply !font-normal;
		@apply mb-2 sm:mb-4 flex w-full items-center justify-center gap-4;
	}
	.platform-tabs .progress-container {
		@apply relative block;
		@apply mt-2;
	}
	.platform-tabs .selected {
		@apply absolute bottom-0 left-0 h-[1px] w-full;
		@apply border-b-2 border-solid;
		border-color: rgba(255, 255, 255, 0.4);
	}
	.platform-tabs .progress-bar {
		@apply absolute bottom-0 left-0 h-[1px] w-0;
		@apply border-b-[3px] border-solid;
		@apply z-[2];
		border-color: rgba(255, 70, 70, 0.75);
	}

	.platform-tab-button {
		@apply relative;
	}

	.platform-tab-button button {
		@apply text-base sm:text-xl font-bold transition-[font-size];
	}
	.platform-tab-button button:hover {
		@apply cursor-pointer opacity-50;
	}
</style>
