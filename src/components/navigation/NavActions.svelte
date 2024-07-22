<script>
	import Icon, { loadIcons } from '@iconify/svelte';

	const iconName = 'ph:globe-bold';
	loadIcons(['ph:globe-bold']);
</script>

<div class="nav-actions">
	<Icon icon="ph:globe-bold" font-size="1.5rem" />
	<a href="/game" class="button btn">Play Now</a>
</div>

<style lang="postcss">
	.nav-actions {
		@apply flex justify-center items-center gap-4 ml-auto;
	}

	.button {
		@apply bg-black;
	}
</style>
