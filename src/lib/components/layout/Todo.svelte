<script lang="ts">
	import Link from '$components/core/Link.svelte';
	import colors from '$constants/colors';
	import Icon from '@iconify/svelte';
</script>

<div class="flex h-dvh w-full flex-col items-center justify-center gap-2 text-center">
	<h1>This page is currently under construction!</h1>
	<p>Come back soon. We'll try to build it as fast as possible.</p>
	<Icon icon="fluent-emoji-flat:construction" class="h-16 w-16 text-[--blue] mb-2" />
	<Link
		label="Home"
		button
		primary
		href="/"
		backgroundColor={colors.gold}
		color={colors.black}
		hoverColor={colors.deepPurple}
		roundness="large"
		size="large">Go back home</Link
	>
</div>
