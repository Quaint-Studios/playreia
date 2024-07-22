<script lang="ts">
  export let href: string;
</script>

<a {href} class="btn un-a section-button-filled">
	<slot />
</a>

<style>
  .section-button-filled {
    @apply inline-block px-6 py-3 text-white bg-primary-500 rounded-xl shadow-md font-medium;
  }
</style>