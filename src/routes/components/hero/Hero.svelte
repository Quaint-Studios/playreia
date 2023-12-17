<script>
	import AppStoreChip from '../platforms/AppStoreChip.svelte';
	import LinuxChip from '../platforms/LinuxChip.svelte';
	import MacChip from '../platforms/MacChip.svelte';
	import PsChip from '../platforms/PSChip.svelte';
	import PlayStoreChip from '../platforms/PlayStoreChip.svelte';
	import SwitchChip from '../platforms/SwitchChip.svelte';
	import WindowsChip from '../platforms/WindowsChip.svelte';
	import XboxChip from '../platforms/XboxChip.svelte';
	import HeroPlatformTab from './HeroPlatformTab.svelte';

	const chipFlex = '';
</script>

<div id="hero-section">
	<div id="hero-content">
		<div class="flex flex-col gap-1 items-center">
			<div class="text-lg font-bold mb-4">
				<a href="/download">Released on all platforms - Play now!</a>
			</div>
      <div class="relative font-bold text-lg flex flex-row gap-10">
        <HeroPlatformTab name="Desktop" />
        <HeroPlatformTab name="Console" />
        <HeroPlatformTab name="Mobile" />
      </div>
			<div id="hero-chips" class="show-desktop scale-[0.475] sm:scale-[0.6] md:scale-[0.70] lg:scale-75">
				<div id="desktop-chips" class="chip-flex">
					<WindowsChip />
					<MacChip />
					<LinuxChip />
				</div>
				<div id="console-chips" class="chip-flex">
					<XboxChip />
					<PsChip />
					<SwitchChip />
				</div>
				<div id="mobile-chips" class="chip-flex">
					<AppStoreChip />
					<PlayStoreChip />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#hero-section {
		@apply relative w-full h-4/5 min-h-[800px] bg-cover bg-center bg-no-repeat;
		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)),
			url('/rsc/img/hero_1.jpg?enhanced');
	}

	#hero-content {
		@apply relative w-full h-full flex justify-center items-end pb-10;
	}

	#hero-content {
	}

  #hero-content div.show-desktop #desktop-chips.chip-flex {
    display: flex;
  }

	#hero-content div .chip-flex {
		display: none;
	}

	.chip-flex {
		@apply mt-auto w-full max-w-[100vw] mb-1 grid grid-flow-col justify-center gap-10;
	}
</style>
