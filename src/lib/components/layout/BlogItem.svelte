<script lang="ts">
	import type { BlogCategory } from '$lib/types';

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
		author: Author;
		/** The blog category. */
		category: BlogCategory;
		/** The read time. */
		readTime: number;
		/** The size of this blog entry. */
		size?: 'medium' | 'large';
	}

	const { href, title, description, image, date, author, category, readTime, size }: Props =
		$props();

	function getDate() {
		const dateArr = new Date(date).toDateString().split(' ').slice(1);
		dateArr[1] += ', ';
		return dateArr.join(' ');
	}
</script>

<article class={size}>
	<a {href} aria-label={title} class="image">
		<enhanced:img src={image} alt={title} class="img" sizes="min(720px, 100vw)" />
	</a>
	<div>
		{#if size === 'large'}
			<div class="content">
				<h2><a {href}>{title}</a></h2>
				<p>{description}</p>
			</div>
			<div class="categories">
				<a class="unset" href="/{category.toLowerCase().replaceAll(' ', '-')}">
					{category}
				</a>
				<span class="time-to-read">{readTime} min read</span>
			</div>
			<div class="meta">
				<address>
					<a rel="author" target="_blank" href="/users/{author.id}">{author.name}</a>
				</address>
				<time datetime={date} class="text-[--borderSilver]">{getDate()}</time>
			</div>
		{:else}
			<div class="categories">
				<a class="unset" href="/{category.toLowerCase().replaceAll(' ', '-')}">
					{category}
				</a>
				<span class="time-to-read">{readTime} min read</span>
			</div>
			<div class="content">
				<h2><a {href}>{title}</a></h2>
				<p>{description}</p>
			</div>
			<div class="meta">
				<address>
					<a rel="author" target="_blank" href="/users/{author.id}">{author.name}</a>
				</address>
				<time datetime={date} class="text-[--borderSilver]">{getDate()}</time>
			</div>
		{/if}
	</div>
</article>

<style lang="postcss">
	article.large {
		@apply w-dvw max-w-full rounded-lg2 border-[1px] border-[--borderQuarter] bg-blue-950 bg-opacity-25 p-4;
		background: hsla(233, 54%, 18%, 1);
		background: linear-gradient(90deg, hsla(233, 54%, 18%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
		background: -moz-linear-gradient(90deg, hsla(233, 54%, 18%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
		background: -webkit-linear-gradient(
			90deg,
			hsla(233, 54%, 18%, 1) 0%,
			hsla(220, 78%, 29%, 1) 100%
		);
	}
	article {
		@apply max-w-[450px];
	}

	.image {
		@apply block w-full overflow-hidden rounded-lg2 transition-transform;
	}
	a.image:active {
		@apply scale-[0.98];
	}
	.large .image .img {
		@apply aspect-[16/9] md:aspect-[16/5];
	}
	.image .img {
		@apply aspect-[16/9] h-full w-full object-cover transition-transform duration-300 hover:scale-[1.05];
	}

	address {
		@apply font-medium not-italic;
	}
	address a {
		@apply text-white no-underline;
	}
	address a:hover {
		@apply text-r-blue-default;
	}

	.large .content {
		@apply flex w-full flex-col items-center text-center;
	}

	h2 {
		@apply text-2xl font-black;
	}
	h2 a {
		@apply tracking-wide text-white no-underline;
	}
	h2 a:hover {
		@apply text-[--blue];
	}
	.large h2 {
		@apply mt-4;
	}

	.large h2,
	.large p {
		@apply max-w-screen-sm;
	}

	.meta {
		@apply mb-4 mt-4 flex justify-start gap-4 text-[--borderSilver];
	}
	.large .meta {
		@apply my-0 text-sm md:text-base;
	}
	.large .meta a {
		@apply font-bold;
	}

	.categories {
		@apply mb-4 mt-6 flex items-center gap-4;
	}
	.categories a {
		@apply font-bold uppercase text-white;
	}
	.categories a:hover {
		@apply text-[--blue];
	}
	.large .categories {
		@apply mb-0 text-sm md:text-base;
	}
</style>
