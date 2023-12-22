<script>
	export const title = 'Content';
</script>

<div class="info-content">
	<h3 class="title">{title}</h3>
	<div class="content">
		<slot />
	</div>
</div>

<style>
	/* Content */
	.info-content .title {
		@apply text-primary-700 text-2xl md:text-3xl font-bold uppercase;
	}
	:global(.dark) .info-content .title {
	}
</style>
