<script lang="ts">
	import Link from '$components/core/Link.svelte';
	import colors from '$constants/colors';

	interface Props {
		/** The link. */
		href: string;
		/** The blog item title. */
		title: string;
		/** The blog item description. */
		description: string;
		/** The blog item image. */
		image: any;
		/** The blog item date. */
		date: string;
		/** The blog item author. */
		author: string;
		/** The call to action. */
		cta?: string;
		/** The blog category. */
		categories?: string[];
	}

	const {
		href,
		title,
		description,
		image,
		date,
		author,
		cta = 'Read this post',
		categories = []
	}: Props = $props();
</script>

<article>
	<a {href} aria-label={title}>
		<enhanced:img
			src={image}
			alt={title}
			class="aspect-[16/9] max-w-[400px] rounded-lg2 object-cover"
			sizes="min(720px, 100vw)"
		/>
	</a>
	<div>
		<div class="meta tracking-wide">
			<address>
				<a rel="author" target="_blank" href="/blog/authors/{author}">{author}</a>
			</address>
			<time datetime={date}>{date}</time>
		</div>
		<h2><a class="tracking-wide text-[--gold] no-underline" {href}>{title}</a></h2>
		<div class="categories">
			<span class="font-medium">Tags:</span>
			{#each categories as category}
				<a class="unset" href="/blog/categories/{category.toLowerCase().replaceAll(' ', '-')}">
					{category}
				</a>
			{/each}
		</div>
		<p>{description}</p>
		<div class="cta">
			<Link tight {href} color={colors.gold} hoverColor={colors.tertiary} size="large">{cta}</Link>
		</div>
	</div>
</article>

<style lang="postcss">
    article {
        @apply max-w-[400px];
    }
	address {
		@apply font-medium not-italic;
	}

	address a {
		@apply no-underline;
	}

	address a:hover {
		@apply underline;
	}

	h2 {
		@apply text-2xl font-black;
	}

	h2 a:hover {
		@apply underline;
	}

	.meta {
		@apply mb-4 mt-2 flex justify-between gap-2;
	}

	.categories {
		@apply flex gap-2 mb-4 mt-0.5;
	}

	.categories a {
		@apply rounded-full bg-[--lightBlue] px-2 py-0.5 text-sm font-medium;
	}
	.categories a:hover {
		@apply bg-[--blue] text-black;
	}

	.cta {
		@apply mt-4 flex w-full justify-start;
	}

	.cta :global(a) {
		@apply pl-0;
	}
</style>
