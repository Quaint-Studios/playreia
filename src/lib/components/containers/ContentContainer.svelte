<div class="content-container">
	<slot />
</div>

<style>
	.content-container {
		@apply mt-36 mx-10;
	}

	.content-container :global(a) {
		@apply underline;
	}

	.content-container :global(h1) {
		@apply h1 text-center font-bold mb-5 mt-24;
	}

	.content-container :global(h2) {
		@apply h3 text-center font-medium mb-10;
	}

	.content-container :global(h3) {
		@apply h4 mt-10 font-bold max-w-[70%] bg-[rgba(0,0,0,0.1)] pt-4 px-2;
	}

	.content-container :global(h4) {
		@apply h6 mb-4 font-medium  max-w-[70%] bg-[rgba(0,0,0,0.1)] pb-4 px-2;
	}

	.content-container :global(hr) {
		@apply max-w-[70%] mx-auto;

		border-color: rgba(255, 255, 255, 0.5) !important;
	}

	.content-container :global(.date),
	.content-container :global(.author) {
		@apply text-sm font-bold text-right m-0;
	}

	.content-container :global(p) {
		@apply my-5 indent-4;
	}

	.content-container :global(a) {
		@apply font-medium underline;
	}

	.content-container :global(a):hover {
		@apply text-secondary-800;
	}

	.content-container :global(a):active {
		@apply text-secondary-900;
	}
</style>
