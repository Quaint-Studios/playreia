<script>
	import { fade } from 'svelte/transition';
	import Footer from '../layout/Footer.svelte';
	import { quadInOut } from 'svelte/easing';

	let nav_shown = false;

	async function show_nav() {
		// get width before hiding scrollbar
		let oldWidth = document.documentElement.clientWidth;

		nav_shown = !nav_shown;
    document.body.classList.toggle('nav-open');

		// get new width after hiding scrollbar
		let newWidth = document.documentElement.clientWidth;


		// set margin-right value equal to width of the scrollbar
		let scrollbarWidth = Math.max(0, newWidth - oldWidth);
		document.body.style.marginRight = `${scrollbarWidth}px`;
	}

  function hide_nav() {
    if(nav_shown) show_nav();
  }
</script>

<div id="appbar">
	{#if $$slots['hamburger']}
		<button
			aria-label="Navbar Drawer Button"
			id="hamburger"
			class="lg:hidden block"
			on:click={show_nav}
		>
			<slot name="hamburger" />
		</button>
	{/if}
	{#if nav_shown}
		<div
			id="mobile-items"
			class="lg:hidden flex"
			transition:fade={{ delay: 0, duration: 200, easing: quadInOut }}
		>
			<button aria-label="Exit Nav Drawer" id="item-holder" on:click={show_nav}>
				<slot name="items" />
			</button>
			<button arial-label="Other Nav Drawer Exit" id="actions-holder" on:click={show_nav}>
				<div id="actions-flexer">
					<slot name="actions" />
				</div>
			</button>
			<div id="footer-holder">
				<Footer hide_nav={true} />
			</div>
		</div>
	{/if}

	{#if $$slots['brand']}
		<div id="brand" class="lg:w-[86px] w-[72px] m-auto lg:m-[unset]" on:click={hide_nav}>
			<slot name="brand" />
		</div>
	{/if}
	{#if $$slots['brand-tag']}
		<div id="brand-tag" class="hidden lg:block">
			<slot name="brand-tag" />
		</div>
	{/if}
	{#if $$slots['items']}
		<div id="items" class="hidden lg:flex">
			<slot name="items" />
		</div>
	{/if}
	{#if $$slots['actions']}
		<div id="actions" class="hidden lg:flex">
			<slot name="actions" />
		</div>
	{/if}
</div>
<div id="dither"></div>

<style>
	#dither {
		@apply fixed left-0 top-0 w-full h-36 z-[10];
		background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}

	#appbar {
		@apply text-on-primary-token fixed top-0 flex w-full h-[86px] px-[16px] my-[16px] items-center z-[11];
	}

	#appbar #brand {
		@apply flex justify-center items-center;
	}
	#appbar #brand-tag {
		@apply flex justify-start items-center mr-10;
	}

	#appbar #items {
		@apply gap-5 grow justify-start items-center;
	}

	@media (min-width: 1050px) {
		#appbar #items {
			@apply gap-6;
		}
	}

	#appbar #items :global(*) {
		@apply uppercase;
	}

	#appbar #actions {
		@apply gap-4 justify-end items-center;
	}

	#appbar #mobile-items {
		@apply w-[100vw] h-[100vh] flex-col absolute left-0 top-[-16px] text-xl backdrop-blur-sm z-[-1] bg-[#2971cf2a];
	}

  #appbar #mobile-items #items-holder :global(a) {
		@apply w-min;
	}

	#appbar #mobile-items #items-holder :global(a):hover {
		@apply text-secondary-500;
	}

	#appbar #mobile-items #item-holder {
		@apply flex flex-col justify-start items-start gap-4 uppercase pt-40 px-10 text-xl;
	}

	#appbar #mobile-items #footer-holder {
		@apply text-sm;
	}

	#appbar #mobile-items #actions-holder {
		@apply px-10 h-full py-10 text-2xl flex justify-start items-start;
	}

	#appbar #mobile-items #actions-flexer {
		@apply flex flex-row-reverse justify-end items-center gap-6;
	}

	#appbar #mobile-items #footer-holder :global(footer) {
		@apply mt-0;
	}
</style>
