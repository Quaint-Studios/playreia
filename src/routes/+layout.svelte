<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';

	// import '@fontsource-variable/urbanist'; // Supports weights 100-900
	import urbanistWoff2 from '@fontsource-variable/urbanist/files/urbanist-latin-wght-normal.woff2?url';
	import '@fontsource/poppins/500.css';
	import poppins500Woff2 from '@fontsource/poppins/files/poppins-latin-500-normal.woff2?url';
	import '@fontsource/poppins/700.css';
	import poppins700Woff2 from '@fontsource/poppins/files/poppins-latin-700-normal.woff2?url';

	import { loadIcons } from '@iconify/svelte';
	import Navbar from '$components/navigation/Navbar.svelte';
	import Footer from '$components/footers/Footer.svelte';

	let { children } = $props();

	const userMenuIcons = ['solar:user-bold', 'solar:alt-arrow-down-linear'];
	const heroIcons = [
		'solar:play-bold',
		'line-md:email-alert-filled',
		'solar:alt-arrow-down-bold-duotone'
	];
	const navbarIcons = ['solar:alt-arrow-down-bold' /*'solar:play-bold'*/];
	const hamburgerIcons = ['solar:hamburger-menu-linear', 'solar:close-circle-bold'];
	const sectionIcons = ['mdi:minus', 'mdi:circle-medium', 'mdi:rhombus'];
	const todoIcons = ['fluent-emoji-flat:construction'];

	loadIcons([
		...userMenuIcons,
		...heroIcons,
		...navbarIcons,
		...hamburgerIcons,
		...sectionIcons,
		...todoIcons
	]);
</script>

<svelte:head>
	{/* @ts-ignore */ null}
	<script
		defer
		event-logged_in="false"
		data-domain="www.playreia.com"
		src="https://plausible.playreia.com/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
	></script>
	<!-- define the `plausible` function to manually trigger events -->
	<script>
		window.plausible =
			window.plausible ||
			function () {
				(window.plausible.q = window.plausible.q || []).push(arguments);
			};
	</script>
	{#each [urbanistWoff2, poppins500Woff2, poppins700Woff2] as font}
		<link rel="preload" as="font" type="font/woff2" href={font} crossorigin="anonymous" />
	{/each}
</svelte:head>

<Navbar />

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>

<Footer />
