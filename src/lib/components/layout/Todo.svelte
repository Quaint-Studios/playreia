<script lang="ts">
	import Link from '$components/core/Link.svelte';
	import colors from '$constants/colors';
	import Icon from '@iconify/svelte';
</script>

<div class="flex h-dvh w-full flex-col items-center justify-center gap-2 text-center">
	<h1>This page is currently under construction!</h1>
	<p>Come back soon. We'll try to build it as fast as possible.</p>
	<Icon icon="fluent-emoji-flat:construction" font-size="64" class="mb-2 h-16 w-16 text-r-blue-default" />
	<Link
		label="Home"
		button
		primary
		href="/"
		roundness="large"
		size="large"
		--color="var(--black)"
		--bg-color="var(--gold)"
		--hover-color="var(--white)"
		--hover-bg-color="var(--gold2)"
	>
		Go back home
	</Link>
</div>
