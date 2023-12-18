<script>
	import HeroContent from './HeroContent.svelte';
	import HeroPlatformChips from './HeroPlatformChips.svelte';
</script>

<div id="hero-section">
	<div id="hero-wrapper">
		<HeroContent />
		<div class="w-full flex flex-col gap-1 items-center">
			<div class="text-lg font-bold mb-4">
				<a href="/download">Coming soon to all platforms - Play now!</a>
			</div>
			<HeroPlatformChips />
		</div>
	</div>
</div>

<style>
	#hero-section {
		@apply relative w-full h-4/5 min-h-[740px] flex justify-center items-end bg-cover bg-center bg-no-repeat;
		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)),
			url('/rsc/img/hero_1.jpg?enhanced');
	}

	#hero-wrapper {
		@apply relative flex w-full h-full shrink flex-col justify-between content-between items-center px-10 pt-48 pb-10;
	}
</style>
