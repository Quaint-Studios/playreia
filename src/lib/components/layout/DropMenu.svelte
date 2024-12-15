<script lang="ts">
	import colors from '$constants/colors';
	import Icon from '@iconify/svelte';

	export interface DropItem {
		label: string;
		icon: string;
	}

	interface Props {
		ariaId: string;
		items: DropItem[];
		onClick: (index: number) => void;
	}

	let { ariaId, items, onClick }: Props = $props();

	let show = $state(false);
	let currentItem = $state(0);
</script>

<div role="list" class="relative" onmouseleave={() => (show = false)}>
	<button
		type="button"
		class="drop-menu"
		onclick={() => (show = !show)}
		aria-expanded={show}
		aria-haspopup="listbox"
	>
		<div class="item">
			<Icon icon={items[currentItem].icon} font-size={20} color={colors.borderHalf} />
			<span class="label">{items[currentItem].label}</span>
		</div>
		<Icon icon="solar:alt-arrow-down-bold" font-size={36} color={colors.gold} />
	</button>
	<div
		id="{ariaId}_list"
		class="dropdown"
		class:show
		tabindex="-1"
		role="listbox"
		aria-activedescendant={`${ariaId}_${items[currentItem].label.replaceAll(' ', '_')}`}
	>
		{#each items as { label, icon }, i}
			<button
				id={`${ariaId}_${label.replaceAll(' ', '_')}`}
				class="item"
				class:selected={currentItem == i}
				onclick={() => onClick(i)}
				role="option"
				aria-selected={currentItem == i}
			>
				<Icon {icon} font-size={20} color={colors.borderHalf} />
				<span class="label">
					{label}
				</span>
			</button>
		{/each}
	</div>
</div>

<style lang="postcss">
	.drop-menu {
		@apply flex items-center justify-center gap-2;
		@apply py-1.5 pl-6 pr-4;
		@apply rounded-lg border-[1px] border-[--goldHalf] bg-[--midnightBlue];
	}
	.drop-menu:hover {
		@apply border-[--gold] bg-[#00000040];
	}
	.drop-menu:hover > :global(svg) {
		@apply opacity-75;
	}
	.drop-menu:hover > .item {
		@apply !text-[--borderHalf];
	}

	.item {
		@apply flex w-full items-center gap-2;
	}
	.selected.item {
		@apply !bg-[--borderQuarter];
	}

	.label {
		@apply text-left text-lg font-light;
	}
	.selected .label {
		@apply font-normal text-[--gold];
	}
	button.selected.item:hover .label {
		@apply !text-[--blue];
	}

	.item :global(svg) {
		@apply flex-shrink-0 flex-grow opacity-75;
	}
	.selected.item :global(svg) {
		@apply !text-[--gold];
	}

	.dropdown {
		@apply absolute right-0 top-full hidden w-full flex-col overflow-hidden;
		@apply mt-1.5;
		@apply rounded-lg border-[1px] border-[--gold] bg-[--midnightBlue];
	}
	.dropdown.show {
		@apply flex;
	}

	button.item {
		@apply py-1.5 pl-6 pr-4;
	}
	button.item:hover {
		@apply bg-[#00000040] text-[--blue];
	}
	button.item:hover :global(svg) {
		@apply !text-[--blue];
	}
</style>
