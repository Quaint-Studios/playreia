<div id="appbar">
	{#if $$slots['hamburger']}
		<div id="hamburger" class="lg:hidden block">
			<slot name="hamburger" />
		</div>
	{/if}
	{#if $$slots['brand']}
		<div id="brand" class="lg:w-[86px] w-[72px] m-auto lg:m-[unset]">
			<slot name="brand" />
		</div>
	{/if}
	{#if $$slots['brand-tag']}
		<div id="brand-tag" class="hidden lg:block">
			<slot name="brand-tag" />
		</div>
	{/if}
	{#if $$slots['items']}
		<div id="items" class="hidden lg:flex">
			<slot name="items" />
		</div>
	{/if}
	{#if $$slots['actions']}
		<div id="actions" class="hidden lg:flex">
			<slot name="actions" />
		</div>
	{/if}
</div>
<div id="dither"></div>

<style>
	#dither {
		@apply fixed left-0 top-0 w-full h-36 z-[10];
		background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}

	#appbar {
		@apply text-on-primary-token fixed top-0 flex w-full h-[86px] px-[16px] my-[16px] items-center z-[11];
	}

	#appbar #brand {
		@apply flex justify-center items-center;
	}
	#appbar #brand-tag {
		@apply flex justify-start items-center mr-10;
	}

	#appbar #items {
		@apply gap-6 grow justify-start items-center;
	}

	#appbar #items :global(*) {
		@apply uppercase;
	}

	#appbar #actions {
		@apply gap-4 justify-end items-center;
	}
</style>
