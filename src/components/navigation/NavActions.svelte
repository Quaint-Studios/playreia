<script>
	import Icon from '@iconify/svelte';
</script>

<div class="nav-actions">
	<Icon icon="ph:globe-bold" font-size="1.5rem" />
	<a href="/game" class="button">Play Now</a>
</div>

<style>
  .nav-actions {
    @apply flex justify-center items-center gap-4 ml-auto;
  }

  .button {
    @apply btn bg-black;
  }
</style>