<div class="info-grid">
	<slot />
</div>

<style>
	.info-grid {
		@apply grid justify-center items-center;
		--grid-layout-gap: 10px;
		--grid-column-count: 2;
		--grid-item--min-width: 300px;

		/**
   * Calculated values.
   */
		--gap-count: calc(var(--grid-column-count) - 1);
		--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
		--grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

		display: grid;
		grid-template-columns: repeat(
			auto-fill,
			minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
		);
		grid-gap: var(--grid-layout-gap);
	}
</style>
