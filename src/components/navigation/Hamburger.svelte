<script lang="ts">
	import Icon from "@iconify/svelte";

  function toggleNav() {
    return;
  }
</script>

<button on:click={toggleNav} class="hamburger">
  <Icon icon="mdi:menu" font-size=32 />
</button>

<style lang="postcss">
  .hamburger {
    @apply fixed ml:hidden left-4;
  }
</style>
