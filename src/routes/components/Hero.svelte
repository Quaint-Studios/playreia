<script>
	import AppStoreChip from './platforms/AppStoreChip.svelte';
	import MacChip from './platforms/MacChip.svelte';
	import PsChip from './platforms/PSChip.svelte';
	import PlayStoreChip from './platforms/PlayStoreChip.svelte';
	import SwitchChip from './platforms/SwitchChip.svelte';
	import WindowsChip from './platforms/WindowsChip.svelte';
	import XboxChip from './platforms/XboxChip.svelte';

  import Hero_1 from '$lib/assets/hero_1.jpg?enhanced';

	const chipFlex = 'mt-auto w-full max-w-[100vw] mb-1 grid grid-flow-col justify-center gap-10';
</script>

<div class="relative w-full h-max">
	<div>
		<div class="dither"></div>
		<enhanced:img src="$lib/assets/hero_1.jpg" alt="Temp Game Background" class="relative z-[-2] w-full h-4/5 object-cover" />

	</div>
	<div class="absolute w-full h-full flex justify-center items-end pb-10 bottom-0">
		<div class="flex flex-col gap-1">
			<div class={chipFlex}>
				<WindowsChip />
				<MacChip />
			</div>
			<div class={chipFlex}>
				<XboxChip />
				<PsChip />
				<SwitchChip />
			</div>
			<div class={chipFlex}>
				<AppStoreChip />
				<PlayStoreChip />
			</div>
		</div>
	</div>
</div>

<style>
	.dither {
    @apply absolute left-0 top-0 w-full h-36 z-[-1];
		background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}
  .heroBG {
    @apply w-full h-4/5 bg-cover;
    background-image: Hero_1
  }
</style>
