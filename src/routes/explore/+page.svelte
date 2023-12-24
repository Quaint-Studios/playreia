<script>
	import ContentContainer from '$lib/components/containers/ContentContainer.svelte';
	import Meta from '$lib/components/head/meta.svelte';
</script>

<ContentContainer>
	<h1>Explore the World and Lore of Reia</h1>
	<h2>
		Learn about the existence of The Ethereals, your story, and the various Cities and Realms of
		this world.
	</h2>

	<h3>The Ethereals</h3>

	<h3>Your Story</h3>

	<h3>Cities and Realms</h3>
</ContentContainer>

<Meta
	title="Explore the World and Lore of Reia"
	description="Learn the existence of The Ethereals, the deities of this world. Find out your story and objective in the game. Explore the cities and realms of this universe!"
>
	<script type="application/ld+json" slot="structured">
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Reia",
      "url": "https://www.playreia.com/explore"
    }
	</script>
</Meta>
