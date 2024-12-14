<script lang="ts">
	import type { Snippet } from 'svelte';

	interface SectionCardProps {
		title: string;
		date?: string;
		url?: string;
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

	export const { title, date, url, shout = false, img, children }: SectionCardProps = $props();
</script>

<div class="section-card">
	<div class="content glass">
		<h3 class="poppins" class:shout>{title}</h3>
		<p>{@render children()}</p>
		<div class="card-footer">
			{#if date}
				<p>{date}</p>
			{/if}
			{#if url}
				<a href={url}>Read More</a>
			{/if}
		</div>
	</div>
    <div class="image">
		{@render img()}
	</div>
</div>

<style lang="postcss">
	.section-card {
		@apply relative flex flex-col w-[380px] h-[450px];
        @apply rounded-3xl bg-[--midnightBlue] shadow-lg;
        @apply border-[--borderHalf] border-[1px] border-solid;
        @apply overflow-hidden;
	}

	.image, .image :global(img) {
		@apply absolute left-0 top-0 object-cover object-center;
        @apply w-full h-[285px];
	}

    .content {
        @apply flex flex-col gap-2 z-10 p-4 mt-52 h-full border-none;
    }

    h3.shout {
        @apply text-3xl;
    }
    h3 {
        @apply text-xl;
    }

    p {
        @apply mt-2;
    }
</style>
