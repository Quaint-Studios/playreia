<script>
	import HeroPlatformChips from './HeroPlatformChips.svelte';
</script>

<div id="hero-section">
	<div id="hero-wrapper">
		<div class="flex flex-col gap-1 items-center">
			<div class="text-lg font-bold mb-4">
				<a href="/download">Coming soon to all platforms - Play now!</a>
			</div>
			<HeroPlatformChips />
		</div>
	</div>
</div>

<style>
	#hero-section {
		@apply relative w-full h-4/5 min-h-[800px] bg-cover bg-center bg-no-repeat;
		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)),
			url('/rsc/img/hero_1.jpg?enhanced');
	}

	#hero-wrapper {
		@apply relative w-full h-full flex justify-center items-end pb-10;
	}
</style>
