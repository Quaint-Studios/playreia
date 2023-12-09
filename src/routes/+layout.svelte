<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Assets
	import Menu from 'svelte-material-icons/menu.svelte';
	import Language from 'svelte-material-icons/Web.svelte';

	import Logo from '$lib/assets/logo.png?enhanced';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import '@fontsource/poppins/100.css';
	import '@fontsource/poppins/200.css';
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/800.css';
	import '@fontsource/poppins/900.css';
	import '@fontsource/poppins/100-italic.css';
	import '@fontsource/poppins/200-italic.css';
	import '@fontsource/poppins/300-italic.css';
	import '@fontsource/poppins/400-italic.css';
	import '@fontsource/poppins/500-italic.css';
	import '@fontsource/poppins/600-italic.css';
	import '@fontsource/poppins/700-italic.css';
	import '@fontsource/poppins/800-italic.css';
	import '@fontsource/poppins/900-italic.css';

	// Site data
	const title = 'Reia';
	const logoAlt = 'Reia Logo';
	const navItemClass = 'uppercase ml-6';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-transparent">
			<svelte:fragment slot="lead">
				<button class="lg:hidden btn btn-sm mr-[63px]">
					<span>
						<Menu width="32" height="32" />
					</span>
				</button>
				<enhanced:img src={Logo} alt={logoAlt} class="hidden lg:inline-block w-[86px]" />
				<div class="h-11 mx-4 lg:border-r-2 lg:border-solid"></div>
				<h3 class="h3 ml-4 hidden lg:block">{title}</h3>
			</svelte:fragment>

			<div class="flex justify-center lg:justify-start">
				<enhanced:img src={Logo} alt={logoAlt} class="block lg:hidden w-[72px]" />
				<div class="hidden lg:inline-block">
					<a href="/" class={navItemClass}>Home</a>
					<a href="/news" class={navItemClass}>News</a>
					<a href="/spirits" class={navItemClass}>Spirits</a>
					<a href="/explore" class={navItemClass}>Explore</a>
					<a href="/press-kit" class={navItemClass}>Press-Kit</a>
					<a href="/about" class={navItemClass}>About Us</a>
					<a href="/contribute" class={navItemClass}>Contribute</a>
				</div>
			</div>
			<svelte:fragment slot="trail">
				<a href="#languages"><Language width="24" height="24" /></a>
				<a href="#play-now" class="btn bg-primary-400">Play Now</a>
				<!-- Should create a modal giving download options -->
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
