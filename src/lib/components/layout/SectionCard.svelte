<script lang="ts">
	import Link from '$components/core/Link.svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributeAnchorTarget } from 'svelte/elements';

	interface Props {
		title: string;
		date?: Date;
		url?: string;
		target?: HTMLAttributeAnchorTarget;
		rel?: HTMLAttributeAnchorRel[];
		cta?: string;
		shout?: boolean;
		src: string;
		alt: string;
		sizes?: string;
		objectPosition?: string;
		loading?: 'lazy' | 'eager' | null;
		children: Snippet<[]>;
	}

	let {
		title,
		date,
		url,
		target,
		rel,
		cta = 'Read more',
		shout = false,
		src,
		alt,
		sizes,
		objectPosition,
		loading = 'lazy',
		children
	}: Props = $props();

	let year = date ? new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date) : undefined;
	let month = date ? new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date) : undefined;
	let day = date ? new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(date) : undefined;
</script>

<div class="section-card">
	<div class="main glass">
		<div class="content">
			<h3 class="poppins" class:shout><a {target} rel={rel?.join(' ')} href={url}>{title}</a></h3>
			<p>{@render children()}</p>
		</div>
		<div class="card-footer" class:end={!date && url}>
			{#if date}
				<span class="date">{`${month} ${day}, ${year}`}</span>
			{/if}
			{#if url}
				<div class="poppins">
					<Link
						{target}
						{rel}
						href={url}
						size="large"
						tight
						--color="var(--gold)"
						--hover-color="var(--tertiary)"
					>
						{cta}
					</Link>
				</div>
			{/if}
		</div>
	</div>

	<div class="image">
		<a aria-label={title} {target} rel={rel?.join(' ')} href={url}>
			<enhanced:img
				class="img"
				{src}
				{alt}
				{sizes}
				{loading}
				style={objectPosition ? `object-position: ${objectPosition}` : undefined}
			/>
		</a>
	</div>
</div>

<style lang="postcss">
	.section-card {
		@apply relative flex max-w-[400px] flex-col;
		@apply rounded-3xl bg-r-midnight-blue shadow-lg;
		@apply border-1 border-solid border-r-border-blue-0.5 hover:border-r-border-0.5;
		@apply overflow-hidden;
	}

	.image {
		@apply overflow-hidden;
	}
	.image,
	.image .img {
		@apply absolute left-0 top-0 object-cover object-center;
		@apply h-[285px] w-full;
	}
	.image .img {
		@apply transition-transform;
	}
	.image .img:hover {
		@apply scale-105;
	}

	.main {
		@apply z-10 mt-52 flex h-full flex-col gap-2 border-none;
	}
	.content {
		@apply flex h-full flex-col gap-2 p-4;
	}

	h3.shout {
		@apply text-3xl;
	}
	h3 {
		@apply max-h-[90px] w-full overflow-hidden overflow-ellipsis text-xl text-white;
	}
	h3 a {
		@apply text-white no-underline;
	}
	h3 a:hover {
		@apply text-r-gold;
	}

	p {
		@apply mt-2 leading-5;
	}

	.card-footer {
		@apply flex items-center justify-between border-none pb-4 pl-4 pr-2;
	}
	.card-footer.end {
		@apply justify-end;
	}
	.card-footer .date {
		@apply font-light tracking-wide;
	}
</style>
