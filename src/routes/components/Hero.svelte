<script>
	import AppStoreChip from './platforms/AppStoreChip.svelte';
	import MacChip from './platforms/MacChip.svelte';
	import PsChip from './platforms/PSChip.svelte';
	import PlayStoreChip from './platforms/PlayStoreChip.svelte';
	import SwitchChip from './platforms/SwitchChip.svelte';
	import WindowsChip from './platforms/WindowsChip.svelte';
	import XboxChip from './platforms/XboxChip.svelte';

	const chipFlex = '';
</script>

<div id="hero-section">
	<div id="hero-content">
		<div class="flex flex-col gap-1 scale-[0.4] sm:scale-[0.6] md:scale-[0.70] lg:scale-75">
			<div class="chip-flex">
				<WindowsChip />
				<MacChip />
			</div>
			<div class="chip-flex">
				<XboxChip />
				<PsChip />
				<SwitchChip />
			</div>
			<div class="chip-flex">
				<AppStoreChip />
				<PlayStoreChip />
			</div>
		</div>
	</div>
</div>

<style>
	#hero-section {
		@apply relative w-full h-4/5 min-h-[800px] bg-cover bg-center bg-no-repeat;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.0)), url("/rsc/img/hero_1.jpg?enhanced")
	}

	#hero-content {
		@apply relative w-full h-full flex justify-center items-end pb-10;
	}

.chip-flex {
  @apply mt-auto w-full max-w-[100vw] mb-1 grid grid-flow-col justify-center gap-10;
}
</style>
