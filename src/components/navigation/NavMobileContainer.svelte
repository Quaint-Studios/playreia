<script lang="ts">
	import { navShown } from '$lib/stores';

	import Footer from './Footer.svelte';
</script>

<div id="nav-mobile-container" class={`${$navShown ? '' : ' !hidden'}`}>
	<div class="scrollable">
		<slot />
	</div>
	<Footer />
</div>

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
    @apply hide-scrollbar;
	}
</style>
