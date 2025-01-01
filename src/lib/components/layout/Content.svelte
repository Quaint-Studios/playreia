<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		tight?: boolean;
		children: Snippet<[]>;
	}

	let { tight, children }: Props = $props();
</script>

<div class="pt-36" class:max-w-screen-lg={tight} class:mx-auto={tight}>
	{@render children()}
</div>
