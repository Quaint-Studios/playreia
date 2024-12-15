<script lang="ts">
	import Icon from '@iconify/svelte';

	export interface DropItem {
		label: string;
		icon: string;
	}

	interface Props {
		items: DropItem[];
		onClick: (index: number) => void;
	}

	let { items, onClick }: Props = $props();

	let currentItem = $state(0);
</script>

<div class="drop-menu">
	<div class="item">
		<div class="icon"><Icon icon={items[currentItem].icon} /></div>
		<span class="label">{items[currentItem].label}</span>
	</div>

	{#each items as { label, icon }, i}
		<button onclick={() => onClick(i)}>
			<div class="icon"><Icon {icon} /></div>
			<span class="label">{label}</span>
		</button>
	{/each}
</div>

<style lang="postcss">
	.drop-menu {
		@apply relative;
		@apply rounded-lg border-[1px] border-[--border];
	}

	.item {
		@apply flex items-center gap-2;
	}

	.icon {
		@apply h-6 w-6;
	}

	.label {
		@apply text-sm;
	}
</style>
