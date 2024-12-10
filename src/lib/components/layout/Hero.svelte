<script lang="ts">
	import Lazy from 'svelte-lazy';

	import Link from '$components/core/Link.svelte';
	import colors from '$constants/colors';
</script>

<section class="hero">
	<div class="image">
		<Lazy keep={true} height="700px">
			<enhanced:img
				class="image"
				src="$images/hero/hero_1.jpg"
				alt="A forest, flower field, and path"
				title="Flower Field and Path"
			/>
		</Lazy>
	</div>
	<div class="gradient"></div>
	<div class="content poppins">
		<h1 class="poppins">
			Play <strong>Reia</strong> and <strong>Explore</strong> a game with endless magical worlds!
		</h1>
		<p>
			Reia is an action-adventure RPG and also an open-source game. Play offline or online with
			friends, or login for an MMO experience! Create and explore worlds, manage your own economy
			and products, and restore Reia's world via the story. Choose the way you want to play.
		</p>

		<div class="cta">
			<Link button primary href="/game" backgroundColor={colors.primary} hoverColor={colors.dark} color={colors.light} roundness="large" size="large">Play now</Link>
			<Link button primary href="/newsletter" backgroundColor={colors.deepPurpleHighlight} color={colors.light} hoverColor={colors.link} roundness="large" size="large">Join the Newsletter</Link>
		</div>
	</div>
</section>

<style lang="postcss">
	.hero {
		@apply h-[45rem] w-full;
		@apply text-[--light];
		@apply relative;
	}

	.hero .content {
		@apply absolute left-0 top-0 max-w-[25rem] sm:max-w-[34rem];
		@apply mx-4 sm:ml-12 h-full font-bold text-[--light];
		@apply transition-[margin_max-width] ease-in-out duration-150;
		@apply flex flex-col justify-center;
	}
	.hero .content h1 {
		@apply transition-[font-size] ease-in-out duration-150;
		@apply mb-4 text-4xl sm:text-5xl;
	}
	.hero .content h1 strong {
		@apply font-bold text-[--tertiary];
	}
	.hero .content p {
		@apply mb-6 font-medium;
	}
	.cta {
		@apply flex w-full items-center justify-start gap-4;
	}

	.hero .image {
		@apply absolute top-0 h-[45rem] w-full object-cover object-center;
	}

	.gradient {
		@apply absolute left-0 top-0 mb-[-10rem] h-full w-full;
		background-image: linear-gradient(
			to bottom right,
			rgba(0, 0, 0, 0.4),
			50%,
			rgba(0, 0, 0, 0) 60%,
			rgba(0, 0, 0, 0)
		);
	}

	@media (min-width: 768px) {
		.gradient {
			background-image: linear-gradient(
				to right,
				rgba(0, 0, 0, 0.4),
				rgba(0, 0, 0, 0) 50%,
				rgba(0, 0, 0, 0)
			) !important;
		}
	}
</style>
