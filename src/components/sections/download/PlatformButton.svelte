<script lang="ts">
	import '@fontsource/metropolis/400.css';
	import '@fontsource/metropolis/700.css';

	import Icon from '@iconify/svelte';

	export let lead: string;
  export let tag: string;
	export let store: string;
	export let icon: string;

  const href = `/download#${tag}`;

  // Eventually this will have an image in the .platforms sections with an id of "#platforms-image".
  // The CSS to make magic happen is:
  // #platforms-image {
  //  clip-path: url(#button);
  // }
  // It'll need some fiddling. Maybe even multiple images with diff clips.
</script>

<a {href} aria-label="{store} Download" class="platform">
	<Icon {icon} font-size=38 />
	<div class="content">
		<div class="lead">{lead}</div>
		<div class="store">{store}</div>
	</div>
</a>

<style lang="postcss">
	.platform {
		@apply text-2xl text-white;
    @apply py-3 pl-4 pr-9 rounded-xl;
		@apply flex justify-center items-center gap-2 whitespace-nowrap;
		background-color: rgba(0, 0, 0, 0.5);
		font-family: 'Metropolis', sans-serif !important;
	}

	.content {
		@apply flex flex-col justify-center items-start;
	}

	.lead {
		@apply text-xs font-normal;
	}
	.store {
		@apply text-xl font-bold;
	}
</style>
