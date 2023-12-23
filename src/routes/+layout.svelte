<script>
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';

	// Assets
	import Menu from 'svelte-material-icons/Menu.svelte';
	import Language from 'svelte-material-icons/Web.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	/*
	import '@fontsource/poppins/100.css'; */
	import '@fontsource/poppins/200.css';
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	/*import '@fontsource/poppins/600.css'; */
	import '@fontsource/poppins/700.css';
	/* import '@fontsource/poppins/800.css'; */
	import '@fontsource/poppins/900.css';
	/*
	import '@fontsource/poppins/100-italic.css';
	import '@fontsource/poppins/200-italic.css';
	import '@fontsource/poppins/300-italic.css';
	import '@fontsource/poppins/400-italic.css';
	import '@fontsource/poppins/500-italic.css';
	import '@fontsource/poppins/600-italic.css';
	import '@fontsource/poppins/700-italic.css';
	import '@fontsource/poppins/800-italic.css';
	import '@fontsource/poppins/900-italic.css';
  */

	import AppBar from '$lib/components/appbar/AppBar.svelte';
	import NavBrand from '$lib/components/appbar/NavBrand.svelte';
	import NavBrandTag from '$lib/components/appbar/NavBrandTag.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	// Site data
	const navItemClass = 'uppercase ml-6';
</script>

<AppBar>
	<Menu width="32" height="32" slot="hamburger" />

	<NavBrand slot="brand" />
	<NavBrandTag slot="brand-tag" />

	<svelte:fragment slot="items">
		<a href="/">Home</a>
		<a href="/news">News</a>
		<a href="/spirits">Spirits</a>
		<a href="/explore">Explore</a>
		<a href="/press-kit">Press-Kit</a>
		<a href="/about">About Us</a>
		<a href="/contribute">Contribute</a>
	</svelte:fragment>

	<svelte:fragment slot="actions">
		<button aria-label="Language" class="hidden lg:inline-block">
			<Language width="24" height="24" />
		</button>
		<button aria-label="Play Now" class="btn bg-primary-500">Play Now</button>
	</svelte:fragment>
</AppBar>
<!-- Page Route Content -->
<slot />
<Footer />

<style>
</style>
