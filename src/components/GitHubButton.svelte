<script lang="ts">
	import BrandButton from './BrandButton.svelte';
</script>

<BrandButton
	href="https://github.com/Quaint-Studios/Reia"
	label="Check out our Open Source Repository"
	src="/images/brands/brand-github.png"
	alt="GitHub Logo"
	onClick={() => {
		// Plausible analytics event
		/* @ts-ignore */
		plausible('github visit');
		// Google Analytics event
		/* @ts-ignore */
		// gtag('event', 'conversion', {
		// 	send_to: 'AW-16572041585/FD5mCMXU9NsaEPGSld49',
		// 	value: 1.0,
		// 	currency: 'USD'
		// });
	}}
/>
