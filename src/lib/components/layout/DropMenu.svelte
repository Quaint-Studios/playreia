<script lang="ts">
	import colors from '$constants/colors';
	import Icon from '@iconify/svelte';

	export interface DropItem {
		label: string;
		icon: string;
	}

	interface Props {
		ariaLabel: string;
		ariaId: string;
		items: DropItem[];
		onClick: (index: number) => void;
	}

	let { ariaLabel, ariaId, items, onClick }: Props = $props();

	let show = $state(false);
	let currentItem = $state(0);
</script>

<form class="drop-menu-container" onmouseleave={() => (show = false)}>
	<button
		type="button"
		class="drop-menu"
		onclick={() => (show = !show)}
		role="combobox"
		aria-label={ariaLabel}
		aria-controls={`${ariaId}_list`}
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
		tabindex={currentItem}
		role="listbox"
		aria-activedescendant={`${ariaId}_list_${currentItem}`}
	>
		{#each items as { label, icon }, i}
			<button
				id={`${ariaId}_list_${i}`}
				class="item"
				class:selected={currentItem == i}
				onclick={() => {
					onClick(i);
					currentItem = i;
					show = false;
				}}
				aria-label={label}
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
</form>

<style lang="postcss">
	.drop-menu-container {
		@apply relative pb-1.5;
	}
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
		@apply text-left text-lg font-light text-nowrap;
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
		@apply z-10 min-w-full;
		@apply absolute right-0 top-full hidden w-auto flex-col overflow-hidden;
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
