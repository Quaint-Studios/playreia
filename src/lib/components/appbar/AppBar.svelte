<script>
	import { fade } from 'svelte/transition';
	import Footer from '../layout/Footer.svelte';
	import { quadInOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let nav_shown = false;

	let turtle = false;
	let lastScroll = 0;
	let transparent = true;

	$: turtleBar = turtle ? 'turtle' : '';
	$: transparencyBar = nav_shown || transparent ? 'bg-transparent' : 'icu-bar';

	async function show_nav() {
		nav_shown = !nav_shown;
	}

	function hide_nav() {
		if (nav_shown) show_nav();
	}

	onMount(() => {
		const navCheck = (initialCheck = false) => {
			if (window.scrollY > 86) {
				turtle =
					!initialCheck && window.scrollY > 300 && window.scrollY > lastScroll ? true : false;
				transparent = false;
				lastScroll = window.scrollY;
			} else {
				turtle = false;
				transparent = true;
			}
		};

		navCheck(true);

		window.addEventListener('scroll', () => navCheck());
	});
</script>

<div id="appbar" class="{turtleBar} {transparencyBar}">
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
			<button
				aria-label="Exit Nav Drawer"
				id="item-holder"
				class="cursor-default"
				on:click={show_nav}
			>
				<slot name="items" />
			</button>
			<button
				aria-label="Other Nav Drawer Exit"
				id="actions-holder"
				class="cursor-default"
				on:click={show_nav}
			>
				<div id="actions-flexer">
					<slot name="actions" />
				</div>
			</button>
			<div id="footer-holder">
				<Footer hide_nav={true} />
			</div>
		</div>
	{/if}

	{#if $$slots['brand'] || $$slots['brand-tag']}
		<a href="/" class="flex un-a lg:w-auto mx-auto">
			{#if $$slots['brand']}
				<button id="brand" class="lg:w-[86px] w-[72px] m-auto lg:m-[unset]" on:click={hide_nav}>
					<slot name="brand" />
				</button>
			{/if}
			{#if $$slots['brand-tag']}
				<div id="brand-tag" class="hidden lg:block">
					<slot name="brand-tag" />
				</div>
			{/if}
		</a>
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
<div id="dither" class="{turtleBar} {transparencyBar}"></div>

<style>
	#dither {
		@apply fixed left-0 top-0 w-full h-36 z-[10];
		background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
		transition:
			top ease-in-out 0.33s,
			background-color ease-in-out 0.25s,
			opacity ease-in-out 0.25s;
	}

	#appbar {
		@apply text-on-primary-token fixed top-0 flex w-full h-[calc(86px+16px)] px-[16px] py-[8px] items-center z-[11];
		transition:
			top ease-in-out 0.33s,
			background-color ease-in-out 0.25s;
	}
	#dither.turtle,
	#appbar.turtle {
		top: -150px;
	}

	#dither.icu-bar {
		opacity: 0;
	}
	#appbar.icu-bar {
		/* From https://css.glass */
		background: rgba(58, 50, 95, 0.3);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
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
		@apply w-[100vw] h-[calc(100vh+16px)] flex-col absolute left-0 top-[-16px] text-xl backdrop-blur-sm z-[-1] bg-[#2971cf2a];
	}

	#appbar #mobile-items #items-holder :global(a) {
		@apply w-min;
	}

	#appbar #mobile-items #items-holder :global(a):hover {
		@apply text-secondary-500;
	}

	#appbar #mobile-items #item-holder {
		@apply flex flex-col justify-start items-start gap-4 uppercase pt-40 px-10;
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
