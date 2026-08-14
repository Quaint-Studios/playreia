<script lang="ts">
	import { ADS } from '$lib/info';
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
		if (ADS)
			/* @ts-ignore */
			gtag('event', 'conversion', {
				send_to: 'AW-16572041585/ChBSCM7F7NsaEPGSld49',
				value: 3.0,
				currency: 'USD'
			});
	}}
/>
