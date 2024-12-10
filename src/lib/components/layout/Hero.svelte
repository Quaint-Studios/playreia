<script lang="ts">
	import Lazy from 'svelte-lazy';

	import Link from '$components/core/Link.svelte';
</script>

<section class="section hero">
	<div class="hero-content">
		<h2><strong>Explore</strong> endless magical worlds in <strong>Reia</strong>!</h2>
		<p>
			Reia is an action-adventure RPG and also an open-source game. Play offline or online with
			friends, or login for an MMO experience! Create and explore worlds, manage your own economy
			and products, and restore Reia's world via the story. Choose the way you want to play.
		</p>

		<div class="cta">
			<Link button primary href="/game">Play now</Link>
			<Link button href="/newsletter">Join the Newsletter</Link>
		</div>
	</div>
	<div class="hero-image">
		<Lazy keep={true} height="700px">
			<enhanced:img
				class="hero-image"
				src="$images/hero/hero_1.jpg"
				alt="A forest, flower field, and path"
				title="Flower Field and Path"
			/>
		</Lazy>
	</div>
	<div class="hero-gradient"></div>
</section>

<style lang="postcss">
	.hero {
		@apply relative w-full;
		@apply -mt-[102.667px] pb-14 pt-[105px];
	}

	.hero-image {
		@apply absolute left-0 top-0 h-full w-full;
		@apply object-cover;
		z-index: -1;
	}

	.hero-content {
		@apply px-10 pb-10 pt-24;
		@apply max-w-[450px] md:max-w-[614px];
	}
	.hero-content h2 {
		@apply block text-4xl font-bold sm:text-4xl md:text-5xl lg:text-5xl;
	}
	.hero-content p {
		@apply block pt-8 font-medium;
	}
	.hero-content strong {
		@apply text-secondary-500 font-bold;
	}

	.cta {
		@apply pr-8 pt-8;
		@apply flex items-center justify-start gap-4;
	}

	.hero-gradient {
		@apply absolute left-0 top-0 mb-[-10rem] h-full w-full;
		z-index: -1;
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
