<script lang="ts">
	import Icon from '@iconify/svelte';

	const icons = ['mdi:minus', 'mdi:minus', 'mdi:minus', 'mdi:circle-medium', 'mdi:rhombus'];
</script>

<div class="section-title">
	{#each icons as icon}
		<Icon {icon} />
	{/each}
	<h2><slot /></h2>
	{#each icons.slice().reverse() as icon}
		<Icon {icon} />
	{/each}
</div>

<style lang="postcss">
	.section-title {
		@apply flex items-center justify-center;
	}

	h2 {
		@apply mx-4 my-0;
	}
</style>
