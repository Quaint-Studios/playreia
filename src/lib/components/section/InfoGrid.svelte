<div class="info-grid">
	<slot />
</div>

<style>
	.info-grid {
    @apply grid justify-center items-center;
		display: grid;
		grid-template-columns: 1fr 1.5fr 1.5fr 1fr;
		gap: 1rem;
	}

  :global(.info-grid > .info-card:nth-child(1)) {
    grid-column-start: 2;
  }
</style>
