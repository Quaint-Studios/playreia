<script>
	import { socials } from '$lib/info';
	import Meta from '$lib/components/head/meta.svelte';
	import ContentContainer from '$lib/components/containers/ContentContainer.svelte';
</script>

<ContentContainer>
	<h1 class="h1 text-center">Download the game from the Following Sources</h1>
	<h2 class="h2">GitHub</h2>
	<p>You can download the game via <a href={`${socials.github}/releases`}>GitHub releases</a>.</p>

	<h3>Steam</h3>
	<p>Coming soon.</p>
	<h3>Consoles</h3>
	<p>Coming soon.</p>
	<h3>Mobile</h3>
	<p>Coming soon.</p>
</ContentContainer>

<Meta
	title="Download and Experience Adventure"
	description="Reia is a new and exciting action adventure RPG. Download the game from GitHub. Coming soon to all platforms! That includes PC, Mac, Linux, and all consoles."
>
	<script type="application/ld+json" slot="structured">
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Reia",
      "url": "https://www.playreia.com/download"
    }
	</script>
</Meta>
