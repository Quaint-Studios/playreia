<script lang="ts">
	import DropMenu, { type DropItem } from './DropMenu.svelte';

	function onClick(index: number) {
		console.log('Clicked!');
	}

	let items: DropItem[] = [
		{ label: 'Item 1 Justice', icon: 'hugeicons:justice-scale-01' },
		{ label: 'Item 2 Axis', icon: 'carbon:ibm-watson-openscale' },
		{ label: 'Item 3 Spark', icon: 'iconoir:spark-solid' },
		{ label: 'Item 4 Flames', icon: 'basil:fire-solid' }
	];
</script>

<div class="character-list">
	<div class="gradient"></div>
	<div class="flex justify-end">
		<DropMenu ariaId="characters" {items} {onClick} />
	</div>
	<div class="ring-container">
		<div class="ring"></div>
		<div class="bubble-container">
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="big-bubble"><div class="inner-bubble"></div></div>
		</div>
	</div>
</div>

<style lang="postcss">
	.character-list {
		@apply relative w-full mt-10 mb-16;
	}

	.gradient {
		@apply absolute bottom-0 left-[-16px] right-0 top-0 z-[-1] m-auto h-[250%] w-[calc(100%+32px)] opacity-25;
		background: radial-gradient(circle, var(--silverLight) 5%, #94a2b700 50%);
	}

	.ring-container {
		@apply relative -mt-10 ml-auto mr-6 w-auto max-w-[600px] sm:-mt-20 sm:mr-12;
		@apply transition-[margin];
		@apply pointer-events-none;
	}
	.ring {
		@apply pointer-events-none;
		@apply aspect-square w-full rounded-full border-[3px] border-[--borderSilver];
		-webkit-mask-image: linear-gradient(-36deg, black 0%, transparent 50%);
		mask-image: linear-gradient(-36deg, black 0%, transparent 50%);
	}
	.bubble-container {
		@apply absolute right-0 top-0 flex h-full w-full flex-col items-end justify-end gap-2;
	}
	.bubble {
		@apply absolute bottom-0 left-0 right-0 top-0 m-auto;
		/* // Translate along the edge of the circle */
		@apply aspect-square w-[12%] rounded-full border-[3px] border-[--borderSilver];
		background: linear-gradient(to bottom, var(--silverDark), var(--silverLight));
	}

	.bubble-container .bubble:nth-child(1) {
		transform: translate(
			calc(0px + (100% * (100 / 12 / 2)) * cos(10deg)),
			calc(0px + (100% * (100 / 12 / 2)) * sin(10deg))
		);
	}
	.bubble-container .bubble:nth-child(2) {
		transform: translate(
			calc(0px + (100% * (100 / 12 / 2)) * cos(30deg)),
			calc(0px + (100% * (100 / 12 / 2)) * sin(30deg))
		);
	}

	.bubble-container .bubble:nth-child(3) {
		transform: translate(
			calc(0px + (100% * (100 / 12 / 2)) * cos(50deg)),
			calc(0px + (100% * (100 / 12 / 2)) * sin(50deg))
		);
	}

	.bubble-container .bubble:nth-child(4) {
		transform: translate(
			calc(0px + (100% * (100 / 12 / 2)) * cos(70deg)),
			calc(0px + (100% * (100 / 12 / 2)) * sin(70deg))
		);
	}

	.bubble-container .bubble:nth-child(5) {
		transform: translate(
			calc(0px + (100% * (100 / 12 / 2)) * cos(90deg)),
			calc(0px + (100% * (100 / 12 / 2)) * sin(90deg))
		);
	}

	.bubble-container .big-bubble {
		@apply absolute bottom-0 left-0 right-0 top-0 m-auto p-0.5;
		@apply aspect-square w-[40%] rounded-full border-[4px] border-[--borderSilver];
		transform: translate(
			calc(0px + (100% * (100 / 40 / 2)) * cos(130deg)),
			calc(0px + (100% * (100 / 40 / 2)) * sin(130deg))
		);
	}
	.bubble-container .big-bubble .inner-bubble {
		@apply h-full w-full rounded-full;
		background: linear-gradient(to bottom, var(--silverDark), var(--silverLight));
	}
</style>
