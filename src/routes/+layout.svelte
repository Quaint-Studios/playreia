<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';

	// Supports weights 100-900
	import '@fontsource-variable/urbanist';
	import Navbar from '$components/navigation/Navbar.svelte';

	let { children } = $props();
</script>

<Navbar />

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
