<script lang="ts">
	import { ADS } from '$lib/info';
	import BrandButton from './BrandButton.svelte';
</script>

<BrandButton
	href="https://discord.playreia.com"
	label="Join us on Discord"
	src="/images/brands/brand-discord.png"
	alt="Discord Logo"
	onClick={() => {
		// Plausible analytics event
		/* @ts-ignore */
		plausible('discord visit');

		// Google Analytics event
		if (ADS)
			/* @ts-ignore */
			gtag('event', 'conversion', {
				send_to: 'AW-16572041585/9bS0CMvF7NsaEPGSld49',
				value: 30.0,
				currency: 'USD'
			});
	}}
/>
