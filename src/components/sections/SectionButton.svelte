<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
</script>

<button {type} class="btn section-button filled">
	<slot />
</button>

<style lang="postcss">
  .section-button {
    @apply inline-block px-6 py-3 text-[--deep-purple] border-2 border-[--deep-purple] rounded-xl shadow-md font-medium;
  }

  .section-button.filled {
    @apply text-white bg-gray-900 border-none;
  }
  .section-button.filled:hover {
    @apply bg-gray-700;
  }
</style>