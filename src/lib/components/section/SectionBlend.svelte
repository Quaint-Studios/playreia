<script>
	/**
	 * @type {'beige' | 'blue'}
	 */
	export let color = 'beige';
</script>

<div class="absolute section-blend {color}-blend"></div>

<style>
	.section-blend.beige-blend {
		background: linear-gradient(
			180deg,
			rgba(100, 243, 100, 0) 20%,
			rgb(var(--color-secondary-500)) 100%
		);
		@apply h-40 my-[-10rem];
		width: 100%;
	}

  .section-blend.blue-blend {
		background: linear-gradient(
			180deg,
			rgba(249, 243, 229, 1) 20%,
			rgb(var(--color-surface-900)) 100%
		);
		@apply h-40 my-[-10rem];
		width: 100%;
	}

  .section-blend + :global(.info-section) {
    @apply pt-32;
  }

  :global(.info-section):has(+ .section-blend) {
    @apply mb-40;
  }
</style>
