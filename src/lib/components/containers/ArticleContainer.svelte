<article class="mt-44 mx-10 md:mx-14">
	<slot />
</article>

<style>
	article {
		@apply text-secondary-400;
	}

	article :global(h1) {
		@apply h1 text-center font-bold mb-5 mt-24;
	}

	article :global(strong.subtitle) {
		@apply h3 text-center font-medium mb-10 mt-0 max-w-max bg-transparent pt-0 px-0 mx-auto;
	}

	article :global(p) {
		@apply my-5 indent-4;
	}

	article :global(h2) {
		@apply h4 mt-16 font-bold max-w-[70%] bg-[rgba(0,0,0,0.2)] pt-4 px-2;
	}

	article :global(h2 + h3) {
		@apply max-w-[70%] font-medium bg-[rgba(0,0,0,0.1)] pb-4 px-2;
	}

	article :global(:not(h2) + h3) {
		@apply h6 mt-12 mb-4 font-medium bg-[rgba(0,0,0,0.1)] px-4 py-4 max-w-[55%];
	}

	article :global(h4) {
		@apply font-bold;
	}

	article :global(hr) {
		@apply max-w-[70%] mx-auto mt-16;

		border-color: rgba(255, 255, 255, 0.5) !important;
	}

	article :global(a) {
		@apply font-medium underline;
	}

	article :global(a):hover {
		@apply text-secondary-800;
	}

	article :global(a):active {
		@apply text-secondary-900;
	}
</style>
