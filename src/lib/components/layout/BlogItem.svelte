<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
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
	}

	const { title, description, image, date, author, cta = 'Read this post' }: Props = $props();
</script>

<enhanced:img src={image} alt={title} class="h-64 w-full object-cover" />
