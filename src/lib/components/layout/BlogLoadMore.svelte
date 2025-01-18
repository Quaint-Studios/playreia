<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<a href="/blog" class="blog-load-more">
	<div class="icon">
		<Icon icon="solar:arrow-right-outline" class="h-full w-full" />
	</div>
	<span>See All Blog Posts</span>
</a>

<style lang="postcss">
	.blog-load-more {
		@apply flex flex-col items-center justify-center gap-4 backdrop-blur-sm rounded-lg2 p-6;
		@apply transition-[filter] border-[1px] border-[--borderQuarter];
		background: hsla(209, 45%, 31%, 1);
		background: linear-gradient(135deg, hsla(209, 45%, 31%, 1) 0%, hsla(233, 54%, 18%, 1) 100%);
		background: -moz-linear-gradient(
			135deg,
			hsla(209, 45%, 31%, 1) 0%,
			hsla(233, 54%, 18%, 1) 100%
		);
		background: -webkit-linear-gradient(
			135deg,
			hsla(209, 45%, 31%, 1) 0%,
			hsla(233, 54%, 18%, 1) 100%
		);
	}
	.blog-load-more:hover {
		@apply brightness-[1.75];
	}

	.icon {
		@apply h-10 w-10 rounded-lg2 bg-r-midnight-icon-bg p-2;
	}

	a {
		@apply text-lg font-bold text-white no-underline;
	}
	a:hover {
		@apply text-white;
	}
</style>
