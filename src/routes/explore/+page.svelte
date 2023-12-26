<script>
	import ArticleContainer from '$lib/components/containers/ArticleContainer.svelte';
	import Explore from '$lib/components/articles/Explore.svx';

	import Meta from '$lib/components/head/meta.svelte';
</script>

<ArticleContainer>
	<Explore />
</ArticleContainer>

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
