<script lang="ts">
	import { page } from '$app/stores';

	interface Props {
		page: number;
		count: number;
	}

	let { page: currentPage, count }: Props = $props();
</script>

<div class="flex w-full items-center justify-center gap-2">
	{#each Array.from({ length: count }, (_, i) => i + 1) as i}
		<a
			data-sveltekit-reload
			href="{$page.url.pathname}?page={i}"
			class:selected={currentPage === i}
			class="page"
		>
			{i}
		</a>
	{/each}
</div>

<style lang="postcss">
	@reference '$appcss';

	a.page {
		@apply flex aspect-square h-10 w-10 items-center justify-center rounded-lg p-3 no-underline transition-colors;
		@apply bg-r-midnight-icon-bg font-medium text-white hover:brightness-125;
	}
	a.page.selected {
		@apply brightness-[1.75];
	}
</style>
