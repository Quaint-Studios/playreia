<script lang="ts">
	import BrandButton from './BrandButton.svelte';
</script>

<BrandButton
	href="https://bsky.app/profile/playreia.com"
	label="Follow us on BlueSky"
	src="/images/brands/brand-bluesky.png"
	alt="BlueSky Logo"
	onClick={() => {
		// Plausible analytics event
		/* @ts-ignore */
		plausible('bluesky visit');

		// Google Analytics event
		/* @ts-ignore */
		gtag('event', 'conversion', {
			send_to: 'AW-16572041585/ChBSCM7F7NsaEPGSld49',
			value: 1.0,
			currency: 'USD'
		});
	}}
/>


