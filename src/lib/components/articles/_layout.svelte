<script>
	export let title;
	export let subTitle;
	export let description;
	export let tags;
	export let author;
	export let date;
</script>

<article class="mx-10 md:mx-14">
	<h1>{title}</h1>
	<h2>{subTitle}</h2>

	<slot />

  <p class="author">by {author}</p>
	<p class="date">Last updated: {date}</p>
</article>

<style>
	article {
		@apply text-secondary-400;
	}

	article h1 {
		@apply h1 text-center font-bold mb-5 mt-24;
	}

	article h2 {
		@apply h3 text-center font-medium mb-10;
	}

	article .date, article .author {
		@apply text-sm font-bold text-right m-0;
	}

	article :global(p) {
		@apply my-5 indent-4;
	}

	article :global(h3) {
		@apply h4 mt-10 font-bold max-w-[70%] bg-[rgba(0,0,0,0.1)] pt-4 px-2;
	}

	article :global(h4) {
		@apply h6 mb-4 font-medium  max-w-[70%] bg-[rgba(0,0,0,0.1)] pb-4 px-2;
	}

	article :global(hr) {
		@apply max-w-[70%] mx-auto;

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
