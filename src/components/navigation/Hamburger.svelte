<script lang="ts">
	import { navShown } from "$lib/stores";
	import Icon from "@iconify/svelte";

  function toggleNav() {
    $navShown = !$navShown;
  }
</script>

<button on:click={toggleNav} class="hamburger">
  {#if $navShown}
    <Icon icon="mdi-menu-close" font-size=32 />
  {:else}
    <Icon icon="mdi:menu" font-size=32 />
  {/if}
</button>

<style lang="postcss">
  .hamburger {
    @apply fixed ml:hidden left-4;
  }
</style>
