<script>
	export let title = '';
</script>

<div class="info-card">
	{#if $$slots.image}
		<div class="info-card__image">
			<slot name="image" />
		</div>
	{/if}
	<div class="info-card__data">
		{#if title}
			<h3 class="info-card__title">{title}</h3>
		{/if}
		{#if $$slots.content}
			<div class="info-card__content">
				<slot name="content" />
			</div>
		{/if}
		{#if $$slots.action}
			<div class="info-card__action">
				<slot name="action" />
			</div>
		{/if}
	</div>
</div>

<style>
	.info-card {
		@apply flex flex-col items-center rounded-2xl h-full bg-secondary-500;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
	}

	.info-card__data {
		@apply flex flex-col mt-[-4rem] px-4 pt-4 pb-0 w-full rounded-b-2xl h-full;
		/* From https://css.glass */
		background: rgba(255, 255, 255, 0.4);
		@apply rounded-b-2xl;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 1px solid rgba(255, 255, 255, 0.5);
	}

	.info-card__title {
		@apply text-left w-full mb-2 font-bold text-xl;
	}

	.info-card__image {
		@apply w-full;
	}
	.info-card__image :global(img) {
		@apply mb-4 rounded-t-2xl w-full;
	}

	.info-card__content {
		@apply text-left w-full mb-8;
	}

	.info-card__action {
		@apply flex justify-end text-right mt-auto w-full mb-4;
	}
</style>
