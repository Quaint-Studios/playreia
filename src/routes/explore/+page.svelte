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
	description="Explore the exciting world of Reia and the lore that comes with it. Learn about the fantastical beings that govern realms and how your story plays a role in it."
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
