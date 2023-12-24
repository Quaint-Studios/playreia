<script>
	import ContentContainer from '$lib/components/containers/ContentContainer.svelte';
	import Meta from '$lib/components/head/meta.svelte';
</script>

<ContentContainer>
	<h1>Explore the Spirits of Reia</h1>
	<h2>
		Learn about the Spirits, fragments of Reia's world. They're glad to aid you in combat and
		crafting! Find out their capabilities.
	</h2>

  <h3>We're still gathering information on the existing spirits. Come back soon!</h3>
</ContentContainer>

<Meta
	title="Spirits"
	description="Explore the Spirits of Reia, fragments of her world. Each spirit has unique fighting or utility styles. They'll aid you in combat and crafting. Find out more!"
>
	<script type="application/ld+json" slot="structured">
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Reia",
      "url": "https://www.playreia.com/spirits"
    }
	</script>
</Meta>
