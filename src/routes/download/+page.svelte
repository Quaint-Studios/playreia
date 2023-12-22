<script>
	import { socials } from '$lib/info';
	import { description } from '../components/articles/_layout.svelte';
	import Meta from '../components/head/meta.svelte';
</script>

<div class="mt-20">
	<h1 class="h1">Download the game from the Following Sources</h1>
	<h2>GitHub</h2>
	<p>You can download the game via <a href={socials.github}>GitHub</a>.</p>

	<h3>Steam</h3>
	<p>Coming soon.</p>
	<h3>Consoles</h3>
	<p>Coming soon.</p>
	<h3>Mobile</h3>
	<p>Coming soon.</p>
</div>

<Meta title="Download" description="Download the game from GitHub. Coming soon to all platforms!">
	<script type="application/ld+json" slot="structured">
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Reia",
      "url": "https://playreia.com"
    }
	</script>
</Meta>
