<script>
	import '@fontsource/metropolis/400.css';
	import '@fontsource/metropolis/700.css';
</script>

<div class="platformChip">
	<slot name="icon" />
	<slot name="label" />
</div>

<style>
	.platformChip {
    @apply text-2xl;
    @apply gap-2;
		padding: 0.75rem 1.75rem;
		border-radius: 12px;
		background-color: rgba(0, 0, 0, 0.5);
		display: inline-flex;
		justify-content: center;
		align-items: center;
    white-space: nowrap;

		font-family: 'Metropolis', sans-serif;
	}
  .platformChip :global(.minorLabel) {
    font-size: medium;
    line-height: normal;
    font-weight: 400;
  }
  .platformChip :global(.majorLabel) {
    font-size: larger;
    font-weight: bold;
  }
</style>
