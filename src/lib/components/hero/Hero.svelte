<script>
	import HeroContent from './HeroContent.svelte';
	import HeroPlatformChips from './HeroPlatformChips.svelte';

	import Lazy from 'svelte-lazy';
</script>

<div id="hero-section">
	<Lazy keep={true}>
		<enhanced:img
			class="hero-img"
			src="$lib/assets/img/hero/hero_1.jpg"
			alt="A forest, flower field, and path"
			title="Flower Field and Path"
		/>
	</Lazy>
	<div class="hero-gradient"></div>
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
		@apply text-on-primary-token relative w-full flex justify-center items-end bg-cover bg-center bg-no-repeat pb-40;
	}

	#hero-section .hero-img {
		@apply object-cover absolute w-full top-0 left-0;
		height: calc(100% + 10rem);
	}

	#hero-section .hero-gradient {
		@apply w-full absolute mb-[-10rem];
		height: calc(100% + 10rem);
		background-image: linear-gradient(
			to bottom right,
			rgba(0, 0, 0, 0.4),
			50%,
			rgba(0, 0, 0, 0) 60%,
			rgba(0, 0, 0, 0)
		);
	}

	@media (min-width: 768px) {
		#hero-section .hero-gradient {
			background-image: linear-gradient(
				to right,
				rgba(0, 0, 0, 0.4),
				rgba(0, 0, 0, 0) 50%,
				rgba(0, 0, 0, 0)
			) !important;
		}
	}

	#hero-wrapper {
		@apply relative flex w-full h-full shrink flex-col justify-between content-between items-center px-10 pt-48 pb-10;
	}
</style>
