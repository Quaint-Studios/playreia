<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';

	import '../app.postcss';

	// import '@fontsource/poppins/100.css';
	import '@fontsource/poppins/200.css';
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	// import p400 from '@fontsource/poppins/files/poppins-latin-400-normal.woff2?url';
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

	import Footer from '$components/navigation/Footer.svelte';
	import Navbar from '$components/navigation/Navbar.svelte';
</script>

<ParaglideJS {i18n}>
	<Navbar />

	<slot />

	<Footer />
</ParaglideJS>
