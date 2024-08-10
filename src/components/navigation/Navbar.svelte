<script lang="ts">
	import Hamburger from '$components/navigation/Hamburger.svelte';
	import NavBrand from '$components/navigation/NavBrand.svelte';
	import NavItems from '$components/navigation/NavItems.svelte';
	import NavActions from '$components/navigation/NavActions.svelte';
	import NavItemsMobile from '$components/navigation/NavItemsMobile.svelte';
	import { navShown } from '$lib/stores';
	import { onMount } from 'svelte';

  let lastScroll = 0;
  let turtle = false;
  let transparent = true;

  $: turtleBar = turtle ? 'turtle' : '';
	$: transparencyBar = $navShown || transparent ? 'bg-transparent' : 'icu-bar';

	onMount(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 86) {
				turtle = window.scrollY > 300 && window.scrollY > lastScroll ? true : false;
				transparent = false;
				lastScroll = window.scrollY;
			} else {
				turtle = false;
				transparent = true;
			}
		});
	});
</script>

<div class={`navbar ${turtleBar}${$navShown ? '' : ' glass'}`}>
	<Hamburger />
	<NavBrand />
	<NavItems />
	<NavItemsMobile />
	<NavActions />
</div>

<style lang="postcss">
	.navbar {
		@apply ml:justify-center;
		@apply fixed top-0 left-0 right-0 z-50;
		@apply w-full py-2 px-4;
		@apply flex justify-center ml:justify-start items-center;
		@apply transition-[background-color] duration-200 ease-in-out;
    @apply transition-[top] duration-[330ms] ease-in-out;
	}

  .turtle {
    top: -150px !important;
  }
</style>
