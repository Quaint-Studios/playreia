<script>
	import { fade } from 'svelte/transition';
	import AppStoreChip from '../platforms/AppStoreChip.svelte';
	import LinuxChip from '../platforms/LinuxChip.svelte';
	import MacChip from '../platforms/MacChip.svelte';
	import PsChip from '../platforms/PSChip.svelte';
	import PlayStoreChip from '../platforms/PlayStoreChip.svelte';
	import SwitchChip from '../platforms/SwitchChip.svelte';
	import WindowsChip from '../platforms/WindowsChip.svelte';
	import XboxChip from '../platforms/XboxChip.svelte';
	import HeroPlatformTab from './HeroPlatformTab.svelte';

	/**
	 * @type {TabData}
	 */
	const tabData = {};

	/** @type {Tabs | "Transitioning"} */
	let currentTab = 'Desktop';
	let transitioning = false;
	/**
	 * @param selection
	 * @returns {Tabs}
	 */
	function getNextTab(/** @type Tabs */ selection) {
		/** @type {Array<Tabs>} */
		const choices = ['Desktop', 'Console', 'Mobile'];

		const found = choices.findIndex((elem) => elem == selection);

		if (found == -1) {
			return 'Desktop';
		}

		if (found == choices.length - 1) {
			return choices[0];
		} else {
			return choices[found + 1];
		}
	}
	const platformTabs = {
		clicked(/** @type {Tabs} */ selection) {
			for (let [key, value] of Object.entries(tabData)) {
				if (key != selection) {
					value.hideTab();
				}
			}

			switch (selection) {
				case 'Desktop':
				case 'Console':
				case 'Mobile':
					if (currentTab != selection && transitioning == false) transitioning = true;
					else if (transitioning) transitioning = false;
					currentTab = selection;
					tabData[selection]?.showTab();
					break;
			}
		},
		clickNext(/** @type Tabs */ selection) {
			platformTabs.clicked(getNextTab(selection));
		}
	};

	function finalNext(/** @type {Tabs} */ selection) {
		if (transitioning) {
			transitioning = false;
		}
	}
</script>

<div class="relative font-bold text-lg flex flex-row gap-10">
	<HeroPlatformTab
		value="Desktop"
		onClick={platformTabs.clicked}
		onNext={platformTabs.clickNext}
		bind:tabData={tabData.Desktop}
		starter={true}
	/>
	<HeroPlatformTab
		value="Console"
		onClick={platformTabs.clicked}
		onNext={platformTabs.clickNext}
		bind:tabData={tabData.Console}
	/>
	<HeroPlatformTab
		value="Mobile"
		onClick={platformTabs.clicked}
		onNext={platformTabs.clickNext}
		bind:tabData={tabData.Mobile}
	/>
</div>
<div id="hero-chips" class="scale-[0.475] sm:scale-[0.6] md:scale-[0.70] lg:scale-75">
	{#if currentTab == 'Desktop' && !transitioning}
		<div
			id="desktop-chips"
			class="chip-flex"
			in:fade
			out:fade
			on:outroend={() => finalNext('Desktop')}
		>
			<WindowsChip href="/download?windows" />
			<MacChip href="/download?mac" />
			<LinuxChip href="/download?linux" />
		</div>
	{/if}
	{#if currentTab == 'Console' && !transitioning}
		<div
			id="console-chips"
			class="chip-flex"
			in:fade
			out:fade
			on:outroend={() => finalNext('Console')}
		>
			<XboxChip href="/download?xbox" />
			<PsChip href="/download?ps" />
			<SwitchChip href="/download?switch" />
		</div>
	{/if}
	{#if currentTab == 'Mobile' && !transitioning}
		<div
			id="mobile-chips"
			class="chip-flex"
			in:fade
			out:fade
			on:outroend={() => finalNext('Mobile')}
		>
			<AppStoreChip href="/download?appstore" />
			<PlayStoreChip href="/download?playstore" />
		</div>
	{/if}
</div>

<style>
	#hero-wrapper div .chip-flex {
		display: flex;
	}

	.chip-flex {
		@apply mt-auto w-full max-w-full flex justify-center gap-10;
	}
</style>
