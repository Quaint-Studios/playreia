<script lang="ts">
	import '$lib/fonts/metropolis.css';

	import Icon from '@iconify/svelte';

	interface Props {
		lead: string;
		tag: string;
		store: string;
		icon: string;
		href?: string;
	}

	let { lead, tag, store, icon, href = `/download#${tag}` }: Props = $props();

	// Eventually this will have an image in the .platforms sections with an id of "#platforms-image".
	// The CSS to make magic happen is:
	// #platforms-image {
	//  clip-path: url(#button);
	// }
	// It'll need some fiddling. Maybe even multiple images with diff clips.
</script>

<a {href} aria-label="{store} Download" class="platform unset">
	<Icon {icon} font-size="38" />
	<div class="content">
		<div class="lead">{lead}</div>
		<div class="store">{store}</div>
	</div>
</a>

<style lang="postcss">
	@reference '$appcss';

	.platform {
		@apply text-2xl text-white;
		@apply rounded-xl py-3 pl-4 pr-9;
		@apply flex items-center justify-center gap-2 whitespace-nowrap;
		background-color: rgba(0, 0, 0, 0.5);
		font-family: 'Metropolis', sans-serif !important;
	}

	.content {
		@apply flex flex-col items-start justify-center;
	}

	.lead {
		@apply text-xs font-normal leading-3;
	}
	.store {
		@apply text-xl font-bold leading-6;
	}
</style>
