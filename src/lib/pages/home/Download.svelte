<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { quadIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import PlatformButton from '$components/core/PlatformButton.svelte';
	import LinkedButton from '$components/layout/LinkedButton.svelte';

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

	let currentPlatform: Platforms = $state('Desktop' as Platforms);
	let fadingPlatform = $state('Desktop' as Platforms);
	let showProgress = $state(false);
	let starting = $state(true);

	onMount(() => {
		showProgress = true;
	});
</script>

<div class="platform-tabs metropolis">
	{#each platforms as platform, i}
		<button
			aria-label="{platform} Platform"
			onclick={() => {
				fadingPlatform = platform;
				showProgress = false;
				tick().then(() => {
					showProgress = true;
				});
			}}
		>
			<div class="platform-tab-button">
				<span class="text">{platform}</span>
				<span class="progress-container">
					{#if fadingPlatform === platform && showProgress}
						<span class="selected" in:fade></span>
						<span
							class="progress-bar"
							in:progress={{}}
							onintroend={() => {
								fadingPlatform = i === platforms.length - 1 ? platforms[0] : platforms[i + 1];
								showProgress = false;
								starting = false;
								tick().then(() => {
									showProgress = true;
								});
							}}
						></span>
					{/if}
				</span>
			</div>
		</button>
	{/each}
</div>
<div class="platforms">
	{#if starting}
		<div
			class="platform-group"
			out:fade={{ delay: 1 }}
			onoutroend={() => {
				fadingPlatform = platforms[1];
				currentPlatform = fadingPlatform;
				starting = false;
			}}
		>
			{#each desktopPlatforms as { lead, tag, store, icon }}
				<PlatformButton {lead} {tag} {store} {icon} />
			{/each}
		</div>
	{:else if currentPlatform === 'Desktop' && fadingPlatform === 'Desktop' && showProgress}
		<div
			class="platform-group"
			in:fade={{ delay: 1 }}
			out:fade={{ delay: 1 }}
			onoutroend={() => (currentPlatform = fadingPlatform)}
		>
			{#each desktopPlatforms as { lead, tag, store, icon }}
				<PlatformButton {lead} {tag} {store} {icon} />
			{/each}
		</div>
	{:else if currentPlatform === 'Console' && fadingPlatform === 'Console' && showProgress}
		<div
			class="platform-group"
			out:fade={{ delay: 1 }}
			onoutroend={() => (currentPlatform = fadingPlatform)}
		>
			{#each consolePlatforms as { lead, tag, store, icon }}
				<PlatformButton {lead} {tag} {store} {icon} />
			{/each}
		</div>
	{:else if currentPlatform === 'Mobile' && fadingPlatform === 'Mobile' && showProgress}
		<div
			class="platform-group"
			out:fade={{ delay: 1 }}
			onoutroend={() => (currentPlatform = fadingPlatform)}
		>
			{#each mobilePlatforms as { lead, tag, store, icon }}
				<PlatformButton {lead} {tag} {store} {icon} />
			{/each}
		</div>
	{/if}
</div>
<LinkedButton href="/download">Download now</LinkedButton>


<style lang="postcss">
	@reference '$appcss';

	.platforms {
		@apply flex w-full justify-center mb-8;
	}

	.platform-group {
		@apply flex scale-[.60] items-center justify-center gap-4 transition-[scale] sm:scale-100;
	}

	.platform-tabs {
		@apply font-normal;
		@apply mt-4 mb-2 flex w-full items-center justify-center gap-4 sm:mb-4;
	}
	.platform-tabs .progress-container {
		@apply relative block;
		@apply mt-2;
	}
	.platform-tabs .selected {
		@apply absolute bottom-1 left-0 h-[1px] w-full;
		@apply border-b-2 border-solid;
		border-color: rgba(255, 255, 255, 0.4);
	}
	.platform-tabs .progress-bar {
		@apply absolute bottom-1 left-0 h-[1px] w-0;
		@apply border-b-[3px] border-solid;
		@apply z-[2];
		border-color: var(--crimsonRed);
	}

	.platform-tab-button {
		@apply relative;
	}

	button .platform-tab-button {
		@apply text-base font-bold transition-[font-size] sm:text-xl;
	}
	button .platform-tab-button .text {
		@apply cursor-pointer text-white;
	}
	button:hover .platform-tab-button .text {
		@apply cursor-pointer opacity-80;
	}
	button:active .platform-tab-button,
	button:active .platform-tab-button .progress-container {
		@apply scale-95;
	}
</style>
