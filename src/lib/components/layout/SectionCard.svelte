<script lang="ts">
	import Link from '$components/core/Link.svelte';
	import colors from '$constants/colors';
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
		/**
        Here's an example on how to use the img snippet in this component:
        ```js
        {#snippet img()}
            <enhanced:img
                src="$images/banners/discord.jpg?enhanced&w=428,512,1024"
                alt="Discord Banner"
                sizes="min(428px, 60vw)"
            />
        {/snippet}
        ```
        */
		img: Snippet<[]>;
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
		img,
		children
	}: Props = $props();

	let year = date ? new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date) : undefined;
	let month = date ? new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date) : undefined;
	let day = date ? new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(date) : undefined;
</script>

<div class="section-card">
	<div class="main glass">
		<div class="content">
			<h3 class="poppins" class:shout>{title}</h3>
			<p>{@render children()}</p>
		</div>
		<div class="card-footer" class:end={!date && url}>
			{#if date}
				<span class="date">{`${month} ${day}, ${year}`}</span>
			{/if}
			{#if url}
				<div class="poppins">
					<Link
						tight
						href={url}
						color={colors.gold}
						hoverColor={colors.tertiary}
						size="large"
						{target}
						{rel}>{cta}</Link
					>
				</div>
			{/if}
		</div>
	</div>

	<div class="image">
		{@render img()}
	</div>
</div>

<style lang="postcss">
	.section-card {
		@apply relative flex max-w-[400px] flex-col;
		@apply rounded-3xl bg-[--midnightBlue] shadow-lg;
		@apply border-[1px] border-solid border-[--borderBlueHalf];
		@apply overflow-hidden;
	}

	.image,
	.image :global(img) {
		@apply absolute left-0 top-0 object-cover object-center;
		@apply h-[285px] w-full;
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
		@apply max-h-[90px] w-[calc(100%)] overflow-hidden overflow-ellipsis text-xl;
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
