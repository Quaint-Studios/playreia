<script lang="ts">
	import colors from '$constants/colors';
	import Icon from '@iconify/svelte';
	import DropMenu, { type DropItem } from './DropMenu.svelte';

	function onClick(index: number) {
		currentItem = index;
	}

	let items: DropItem[] = [
		{ label: 'Char 1 Hydro', icon: 'game-icons:water-splash' },
		{ label: 'Char 2 Pyro', icon: 'basil:fire-solid' },
		{ label: 'Char 3 Electro', icon: 'iconoir:spark-solid' },
		{ label: 'Char 4 Aero', icon: 'carbon:ibm-watson-openscale' },
		{ label: 'Char 5 Terra', icon: 'hugeicons:justice-scale-01' }
	];

	let currentItem = $state(0);
</script>

<div class="character-list">
	<div class="gradient"></div>
	<div class="flex justify-end">
		<DropMenu ariaLabel="Select a character" ariaId="characters" {items} {onClick} />
	</div>
	<div class="ring-container">
		<div class="ring"></div>
		<div class="bubble-container">
			{#each items as { label, icon }, i}
				<button class="bubble" class:selected={currentItem == i} onclick={() => onClick(i)} aria-label={label}>
					<Icon {icon} font-size={32} color={colors.gold} />
				</button>
			{/each}
			<div class="big-bubble">
				<div class="inner-bubble">
					<Icon icon={items[currentItem].icon} font-size={96} color={colors.gold} />
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.character-list {
		@apply relative mb-16 mt-10 w-full;
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
		@apply absolute bottom-0 left-0 right-0 top-0 m-auto cursor-pointer pointer-events-auto;
		/* // Translate along the edge of the circle */
		@apply flex aspect-square w-[12%] items-center justify-center rounded-full border-[1px] border-[--borderSilver] md:border-[3px];
		background: linear-gradient(to bottom, var(--silverDark), var(--silverLight));
	}

	.bubble-container .bubble:nth-child(5) {
		transform: translate(
			calc(0px + (100% * (100 / 12 / 2)) * cos(10deg)),
			calc(0px + (100% * (100 / 12 / 2)) * sin(10deg))
		);
	}
	.bubble-container .bubble:nth-child(4) {
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

	.bubble-container .bubble:nth-child(2) {
		transform: translate(
			calc(0px + (100% * (100 / 12 / 2)) * cos(70deg)),
			calc(0px + (100% * (100 / 12 / 2)) * sin(70deg))
		);
	}

	.bubble-container .bubble:nth-child(1) {
		transform: translate(
			calc(0px + (100% * (100 / 12 / 2)) * cos(90deg)),
			calc(0px + (100% * (100 / 12 / 2)) * sin(90deg))
		);
	}

	.bubble {
		@apply brightness-[0.6];
	}
	.bubble.selected {
		@apply brightness-100;
	}
	.bubble,
	.big-bubble {
		@apply transition-[filter] duration-1000;
	}

	.bubble-container .big-bubble {
		@apply absolute bottom-0 left-0 right-0 top-0 m-auto brightness-[0.6];
		@apply aspect-square w-[40%] rounded-full border-[1.5px] border-[--borderSilver] sm:border-[4px];
		transform: translate(
			calc(0px + (100% * (100 / 40 / 2)) * cos(130deg)),
			calc(0px + (100% * (100 / 40 / 2)) * sin(130deg))
		);
	}
	.bubble-container .big-bubble .inner-bubble {
		@apply absolute left-[3px] top-[3px] flex h-[calc(100%-6px)] w-[calc(100%-6px)] items-center justify-center rounded-full;
		background: linear-gradient(to bottom, var(--silverDark), var(--silverLight));
	}
</style>
