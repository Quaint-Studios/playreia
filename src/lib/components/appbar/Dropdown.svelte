<div class="dropdown">
	{#if $$slots['parent']}
		<div class="parent">
			<slot name="parent" />
		</div>
	{/if}
	{#if $$slots['items']}
		<div class="items">
			<slot name="items" />
		</div>
	{/if}
</div>

<style>
  .dropdown {
    @apply relative;
  }
  .items {
    @apply absolute bg-black rounded-[8px] p-4 top-full mt-1;
    left: -30%
  }
</style>