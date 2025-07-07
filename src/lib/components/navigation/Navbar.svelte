<script lang="ts">
	// Modules
	import { onMount } from 'svelte';
	import Menu from '~icons/solar/hamburger-menu-linear';

	// Local
	import NavBrand from './NavBrand.svelte';
	import NavItems from './NavItems.svelte';
	import NavActions from './NavActions.svelte';

	let atTop = $state(true);

	onMount(() => {
		atTop = window.scrollY === 0;

		let scrollListener = () => {
			atTop = !(window.scrollY > 0);
		};
		window.addEventListener('scroll', scrollListener);

		// Close menu on click outside
		let clickListener = (event: MouseEvent) => {
			const navbar = document.getElementById('navbar');
			if (navbar && !navbar.contains(event.target as Node)) {
				isOpen = false;
			}
		};
		window.addEventListener('click', clickListener);

		// Close menu on escape key
		let keydownListener = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				isOpen = false;
			}
		};
		window.addEventListener('keydown', keydownListener);

		return () => {
			window.removeEventListener('scroll', scrollListener);
			window.removeEventListener('click', clickListener);
			window.removeEventListener('keydown', keydownListener);
		};
	});

	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<div id="navbar" class:at-top={atTop} class:open={isOpen} class:glass={!atTop} role="menubar">
	<div class="nav-container">
		<NavBrand />
		<NavItems {isOpen} toggle={toggleMenu} />
		<NavActions />
		<button
			class="hamburger"
			aria-label="Toggle Mobile Menu"
			aria-expanded={isOpen}
			aria-controls="navbar"
			onclick={toggleMenu}
			class:selected={isOpen}
		>
			<Menu />
		</button>
	</div>
</div>

<style lang="postcss">
	@reference '$appcss';

	.nav-container {
		@apply flex w-full max-w-[1920px];
	}

	#navbar {
		@apply fixed z-50 flex w-full justify-center px-3;
		@apply border-r-border-0.5/0 transition-[border-color_background-color] duration-[0.45s];

		&:not(.at-top) {
			@apply bg-r-midnight-blue/80 border-r-border-0.25 border-b-1;

			.hamburger {
				@apply mdlg:hidden flex items-center justify-center px-3.5 text-xl;
				@apply w-auto;
				@apply hover:bg-blue-alt-600 my-0 rounded-none;
			}
		}

		&.open {
			@apply not-mdlg:bg-r-midnight-blue not-mdlg:border-r-border-0.25 not-mdlg:border-b-1;

			.hamburger {
				@apply mdlg:hidden flex items-center justify-center px-3.5 text-xl;
				@apply w-auto;
				@apply hover:bg-blue-alt-600 my-0 rounded-none;
			}
		}

		.hamburger {
			@apply text-r-white/90 text-xl no-underline;
			@apply my-auto mr-2 ml-2 h-auto rounded-2xl p-2.5;
			@apply hover:text-black-alt-600 hover:bg-r-white;
			@apply transition-[color_background-color];
			@apply hover:bg-blue-alt-600 hover:text-white;
			@apply mdlg:hidden;

			&.selected {
				@apply bg-blue-alt-600;
			}
		}
	}
</style>
