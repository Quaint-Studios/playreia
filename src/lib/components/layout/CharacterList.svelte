<script lang="ts">
	import DropMenu, { type DropItem } from './DropMenu.svelte';

	function onClick(index: number) {
		console.log('Clicked!');
	}

	let items: DropItem[] = [
		{ label: 'Item 1', icon: 'hugeicons:justice-scale-01' },
		{ label: 'Item 2', icon: 'carbon:ibm-watson-openscale' },
		{ label: 'Item 3', icon: 'iconoir:spark-solid' },
		{ label: 'Item 4', icon: 'basil:fire-solid' }
	];
</script>

<div>
	<DropMenu ariaId="characters" {items} {onClick} />
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
