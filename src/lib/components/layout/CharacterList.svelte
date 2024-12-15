<script lang="ts">
	import DropMenu, { type DropItem } from './DropMenu.svelte';

	function onClick(index: number) {
		console.log('Clicked!');
	}

	let items: DropItem[] = [
		{ label: 'Item 1', icon: 'mdi:home' },
		{ label: 'Item 2', icon: 'mdi:account' }
	];
</script>

<div>
	<DropMenu {items} {onClick} />
	<div class="ring"></div>
</div>

<style lang="postcss">
	.ring {
		@apply absolute right-0;
		@apply aspect-square w-[700px] rounded-full border-[3px] border-[--border];
		-webkit-mask-image: linear-gradient(-36deg, black 0%, transparent 50%);
		mask-image: linear-gradient(-36deg, black 0%, transparent 50%);
	}
</style>
