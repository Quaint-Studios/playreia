<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		icon?: string;
		children: Snippet<[]>;
	}

	let { href, icon = 'solar:arrow-right-outline', children }: Props = $props();
</script>

<a {href} class="linked-button">
    <span>{@render children()}</span>
	<div class="icon">
		<Icon {icon} class="h-full w-full" />
	</div>
</a>

<style lang="postcss">
	@reference '$appcss';

	.linked-button {
		@apply flex items-center justify-center gap-4 rounded-2xl pl-6 pr-2 py-2.5 backdrop-blur-sm;
		@apply border-[1px] border-(--borderQuarter) transition-[filter];
		background: hsla(209, 45%, 31%, 0.5);
		background: linear-gradient(135deg, hsla(209, 45%, 31%, 0.5) 0%, hsla(233, 54%, 18%, 0.5) 100%);
		background: -moz-linear-gradient(
			135deg,
			hsla(209, 45%, 31%, 0.5) 0%,
			hsla(233, 54%, 18%, 0.5) 100%
		);
		background: -webkit-linear-gradient(
			135deg,
			hsla(209, 45%, 31%, 0.5) 0%,
			hsla(233, 54%, 18%, 0.5) 100%
		);
	}
	.linked-button:hover {
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
