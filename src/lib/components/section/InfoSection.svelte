<script>
	import Rhombus from 'svelte-material-icons/Rhombus.svelte';
	import CircleMedium from 'svelte-material-icons/CircleMedium.svelte';
	import Minus from 'svelte-material-icons/Minus.svelte';
	import ArrowRightThin from 'svelte-material-icons/ArrowRightThin.svelte';

	export let title = 'Info';
	export let more_label = 'Read more';
	export let more_label_suffix = ArrowRightThin;
</script>

<div class="info-section">
	<span class="divider"></span>
	<span class="decoration">
		<div class="decoration-flex">
			<Minus /><Minus /><Minus /><CircleMedium /><Rhombus />
		</div>
		<h2>{title}</h2>
		<div class="decoration-flex">
			<Rhombus /><CircleMedium /><Minus /><Minus /><Minus />
		</div>
	</span>
	{#if $$slots['content']}
		<div class="content">
			<slot name="content" />
		</div>
	{/if}
</div>

<style>
	/* Decorations */
	.info-section .decoration {
		@apply w-full flex justify-center uppercase items-center gap-3 text-primary-700 mb-4;
	}
	.info-section .decoration .decoration-flex {
		@apply flex gap-0 items-center justify-center;
	}
	.info-section .decoration h2 {
		@apply text-4xl md:text-5xl font-black;
	}

	.info-section .divider {
		@apply w-1/4 h-[2px] mx-auto border-b-2 border-primary-700 hidden mb-5;
	}
	.info-section + .info-section .divider {
		@apply block;
	}

	/* Section */
	.info-section {
		@apply relative p-10 pt-5 text-on-secondary-token bg-secondary-400;
	}
	:global(.dark) .info-section {
		@apply bg-secondary-500;
	}

	/* Content */
	.info-section .title {
		@apply text-primary-700 text-2xl md:text-3xl font-bold uppercase;
	}

	.info-section .content {
		@apply text-on-secondary-token flex justify-center items-center;
	}
</style>
