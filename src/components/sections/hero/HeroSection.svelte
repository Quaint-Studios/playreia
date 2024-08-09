<script lang="ts">
	import Lazy from 'svelte-lazy';

	import Divider from '../Divider.svelte';
	import SectionAnchor from '../SectionAnchor.svelte';
	import SectionButton from '../SectionButton.svelte';
</script>

<section class="section hero">
	<div class="hero-content">
		<h2><strong>Explore</strong> endless magical worlds in <strong>Reia</strong>!</h2>
		<h3>
			Reia is an action-adventure RPG and also an open-source game. Play offline or online with
			friends, or login for an MMO experience! Create and explore worlds, manage your own economy
			and products, and restore Reia's world via the story. Choose the way you want to play.
		</h3>

		<div class="cta">
			<SectionAnchor href="/play">Play Now</SectionAnchor>
			<SectionButton aria_label="Newsletter">Join the Newsletter</SectionButton>
		</div>
	</div>
	<div class="hero-image">
		<Lazy keep={true}>
			<enhanced:img
				class="hero-image"
				src="$assets/images/hero/hero_1.jpg"
				alt="A forest, flower field, and path"
				title="Flower Field and Path"
			/>
		</Lazy>
	</div>
	<div class="hero-gradient" />
</section>

<style lang="postcss">
	.hero {
		@apply relative w-full;
		@apply pt-[105px];
	}

	.hero-image {
		@apply absolute w-full top-0 left-0;
		@apply object-cover h-[calc(100%+5rem)];
		z-index: -1;
	}

	.hero-content {
		@apply pt-24 px-10 pb-10;
		@apply max-w-[370rpx] sm:max-w-[390px] md:max-w-[614px];
	}
	.hero-content h2 {
		@apply block text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold;
	}
	.hero-content h3 {
		@apply block font-medium pt-8;
	}
	.hero-content strong {
		@apply font-bold text-secondary-500;
	}

	.cta {
		@apply pt-8 pr-8;
		@apply flex gap-4 items-center justify-start;
	}

	.hero-gradient {
		@apply w-full absolute mb-[-10rem] top-0 left-0;
		z-index: -1;
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
		.hero-gradient {
			background-image: linear-gradient(
				to right,
				rgba(0, 0, 0, 0.4),
				rgba(0, 0, 0, 0) 50%,
				rgba(0, 0, 0, 0)
			) !important;
		}
	}
</style>
