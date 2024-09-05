<script lang="ts">
	export let pt = false;

	let padding = pt ? ' pt-[54px]' : '';
</script>

<div class="content-container{padding}">
	<slot />
</div>

<style lang="postcss">
	.content-container {
		@apply px-24;
	}
</style>
