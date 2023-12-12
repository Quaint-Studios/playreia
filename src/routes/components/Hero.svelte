<script>
	import PlatformChip from './PlatformChip.svelte';
</script>

<div class="relative">
	<div id="dither" class="fixed left-0 top-0 w-full h-36"></div>
	<enhanced:img src="$lib/assets/hero_1.jpg" alt="Temp Game Background" class="z-[-1]" />
	<PlatformChip platform="Windows" />
</div>

<style>
	#dither {
		background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}
</style>
