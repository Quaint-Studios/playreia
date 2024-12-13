<script lang="ts">
	import Lazy from 'svelte-lazy';

	import Link from '$components/core/Link.svelte';
	import colors from '$constants/colors';
	import Icon, { loadIcons } from '@iconify/svelte';

	let altGradient = $state(false);

	loadIcons(['solar:play-bold', 'line-md:email-alert-filled']);
</script>

<section class="hero">
	<div class="image">
		<Lazy keep={true} height="500px">
			<enhanced:img
				class="image"
				src="$images/hero/hero_1.jpg?enhanced&w=3840;2048;1920;1280"
				alt="A forest, flower field, and path"
				title="Flower Field and Path"
				sizes="min(1280px, 100vw)"
			/>
		</Lazy>
	</div>
	<div class="gradient"></div>
	<div class="section-gradient" class:alt={altGradient}><Icon onclick={()=> { altGradient = !altGradient }} class="cursor-pointer hover:pt-2 transition-[padding-top]" icon="solar:alt-arrow-down-bold-duotone" font-size={72} /></div>
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
			<Link
				label="Play now"
				button
				primary
				href="/game"
				backgroundColor={colors.blueHighlight}
				color={colors.white}
				hoverColor={colors.black}
				roundness="large"
				size="large"
			>
				<div class="flex justify-center gap-2">
					<Icon icon="solar:play-bold" />
					<span class="w-full text-nowrap">Play now</span>
				</div>
			</Link>
			<Link
				label="Newsletter"
				button
				primary
				href="/newsletter"
				backgroundColor={colors.midnightBlue}
				color={colors.white}
				hoverColor={colors.border}
				borderColor={colors.midnightBlue}
				roundness="large"
				size="large"
			>
				<div class="flex items-center justify-center gap-2">
					<Icon icon="line-md:email-alert-filled" />
					<span class="w-full text-nowrap">Notify me</span>
				</div>
			</Link>
		</div>
	</div>
</section>

<style lang="postcss">
	.hero {
		@apply bg-[--deepPurpleHighlight];
		@apply h-[45rem] w-full;
		@apply text-[--light];
		@apply relative;
	}

	.hero .content {
		@apply absolute left-0 top-0 max-w-[25rem] sm:max-w-[34rem];
		@apply mx-4 h-full font-bold text-[--light] sm:ml-12;
		@apply transition-[margin_max-width] duration-150 ease-in-out;
		@apply flex flex-col justify-center;
	}
	.hero .content h1 {
		@apply transition-[font-size] duration-150 ease-in-out;
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
		@apply absolute top-0 h-[45rem] w-full object-cover object-bottom;
	}

	.section-gradient {
		@apply absolute bottom-0 h-[184px] w-full flex justify-center items-center;
		background: linear-gradient(to bottom, #08124700, #081247ff);
		/* background: radial-gradient(75% 100% at 50% 0%, #08124700 0%, #08124700 75%, #081247ff 100%); */
		transition: background 0.3s ease-in-out;
	}

	.section-gradient.alt {
		background: radial-gradient(75% 100% at 50% 0%, #08124700 0%, #08124700 75%, #081247ff 100%);
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

	@media (min-width: 1280px) {
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
