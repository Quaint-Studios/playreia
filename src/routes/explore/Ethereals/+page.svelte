<script>
  import ArticleContainer from '$lib/components/containers/ArticleContainer.svelte';
	import Explore_Ethereals from '$lib/components/articles/Explore_Ethereals.svx';

	import Meta from '$lib/components/head/meta.svelte';
</script>

<ArticleContainer>
	<Explore_Ethereals />
</ArticleContainer>

<Meta
	title="The Ethereals of this World"
	description="In the world of Reia, there are mysterious beings called Ethereals. Ethereals are considered deities. Find out what they are, how they're born, and more!"
>
	<script type="application/ld+json" slot="structured">
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Reia",
      "url": "https://www.playreia.com/explore/ethereals"
    }
	</script>
</Meta>
