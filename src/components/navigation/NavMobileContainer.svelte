<script lang="ts">
	import { navShown } from '$lib/stores';
	import { quadInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	import Footer from './Footer.svelte';
</script>

{#key $navShown}
<div id="nav-mobile-container" transition:fade={{ delay: 0, duration: 200, easing: quadInOut }} class={`${$navShown ? '' : ' !hidden'}`}>
	<div class="scrollable">
		<slot />
	</div>
	<Footer navbar />
</div>
{/key}

<style lang="postcss">
	/** Container */
	#nav-mobile-container {
		@apply w-dvw h-dvh;
		@apply z-[-1];
		@apply fixed left-0 top-0 backdrop-filter backdrop-blur-[4px];
		@apply flex flex-col ml:hidden;
		@apply bg-[#2971cf2a];
	}

	.scrollable {
		@apply overflow-x-hidden overflow-y-auto h-full;
    @apply hide-scrollbar relative;
	}
</style>
