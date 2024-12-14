<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	
	import '@fontsource-variable/urbanist'; // Supports weights 100-900
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/700.css';
	
	import { loadIcons } from '@iconify/svelte';
	import Navbar from '$components/navigation/Navbar.svelte';

	let { children } = $props();

	const userMenuIcons = ['solar:user-bold', 'solar:alt-arrow-down-linear'];
	const heroIcons = ['solar:play-bold', 'line-md:email-alert-filled'];
	const navbarIcons = ['solar:alt-arrow-down-bold' /*'solar:play-bold'*/];
	const hamburgerIcons = ['solar:hamburger-menu-linear', 'solar:close-circle-bold'];
	const sectionIcons = ['mdi:minus', 'mdi:circle-medium', 'mdi:rhombus'];

	loadIcons([...userMenuIcons, ...heroIcons, ...navbarIcons, ...hamburgerIcons, ...sectionIcons]);
</script>

<Navbar />

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
