<script>
	import { socials } from '$lib/info';
	import Meta from '$lib/components/head/meta.svelte';
</script>

<div class="mt-36 mx-10">
	<h1 class="h1 text-center">Download the game from the Following Sources</h1>
	<h2 class="h2">GitHub</h2>
	<p>You can download the game via <a href={`${socials.github}/releases`}>GitHub releases</a>.</p>

	<h3>Steam</h3>
	<p>Coming soon.</p>
	<h3>Consoles</h3>
	<p>Coming soon.</p>
	<h3>Mobile</h3>
	<p>Coming soon.</p>
</div>

<Meta title="Download and Experience Reia" description="Download the game from GitHub. Coming soon to all platforms!">
	<script type="application/ld+json" slot="structured">
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Reia",
      "url": "https://www.playreia.com/download"
    }
	</script>
</Meta>

<style>
  a {
    @apply underline;
  }

	h1 {
		@apply h1 font-bold mt-6;
	}

	h2 {
		@apply h2 font-bold  mt-6;
	}

	h3 {
		@apply h3 font-medium  mt-6;
	}
</style>
