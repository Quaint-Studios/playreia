<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';

	import '@fontsource-variable/urbanist'; // Supports weights 100-900
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/700.css';

	import UrbanistWoff2 from '@fontsource-variable/urbanist/files/urbanist-latin-wght-normal.woff2';
	import Poppins500Woff2 from '@fontsource/poppins/files/poppins-latin-500-normal.woff2';
	import Poppins700Woff2 from '@fontsource/poppins/files/poppins-latin-700-normal.woff2';

	import Navbar from '$components/navigation/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	{#each [UrbanistWoff2, Poppins500Woff2, Poppins700Woff2] as font}
		<link rel="preload" href={font} as="font" type="font/woff2" crossorigin="anonymous" />
	{/each}
	
</svelte:head>

<Navbar />

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
