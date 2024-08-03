<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';

	import '../app.postcss';

	// import '@fontsource/poppins/100.css';
	import '@fontsource/poppins/200.css';
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	import p400 from '@fontsource/poppins/files/poppins-latin-400-normal.woff2?url';
	import '@fontsource/poppins/500.css';
	// import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	// import '@fontsource/poppins/800.css';
	import '@fontsource/poppins/900.css';

	// import '@fontsource/poppins/100-italic.css';
	// import '@fontsource/poppins/200-italic.css';
	// import '@fontsource/poppins/300-italic.css';
	// import '@fontsource/poppins/400-italic.css';
	// import '@fontsource/poppins/500-italic.css';
	// import '@fontsource/poppins/600-italic.css';
	// import '@fontsource/poppins/700-italic.css';
	// import '@fontsource/poppins/800-italic.css';
	// import '@fontsource/poppins/900-italic.css';

	import Hamburger from '$components/navigation/Hamburger.svelte';
	import NavBrand from '$components/navigation/NavBrand.svelte';
	import NavItems from '$components/navigation/NavItems.svelte';
	import NavActions from '$components/navigation/NavActions.svelte';
</script>

<ParaglideJS {i18n}>
	<div class="navbar glass">
		<Hamburger />
		<NavBrand />
		<NavItems />
		<NavActions />
	</div>

	<slot />
</ParaglideJS>

<style lang="postcss">
		@media (max-width: 768px) {
		.navbar {
			@apply !justify-center;
		}
	}
	.navbar {
		@apply fixed top-0 left-0 right-0 z-50;
		@apply w-full py-2 px-4;
		@apply flex justify-center ml:justify-start items-center bg-transparent;
	}
</style>
