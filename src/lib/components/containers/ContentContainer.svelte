<div class="content-container">
	<slot />
</div>

<style>
	.content-container {
		@apply mt-36 mx-10;

		:global(a) {
			@apply underline;
		}

		:global(h1) {
			@apply h1 font-bold mt-6;
		}

		:global(h2) {
			@apply h2 font-bold mt-6;
		}

		:global(h3) {
			@apply h3 font-medium mt-6;
		}
	}
</style>
