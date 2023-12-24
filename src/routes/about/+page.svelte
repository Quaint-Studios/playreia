<script>
	import ContentContainer from '$lib/components/containers/ContentContainer.svelte';
	import Meta from '$lib/components/head/meta.svelte';
</script>

<ContentContainer>
	<h1>About Reia, the Team, and the Development Journey</h1>
	<h2>
		Read on to figure out why this project was started and the many people who have helped on the
		side and will be helping as main supporters.
	</h2>

	<p>
		This page is still under construction but will have information <em>extremely</em> soon. Perhaps
		in a day or two!
	</p>
</ContentContainer>

<Meta
  title="About Us"
  description="Learn all about Reia, the team, and the development journey. Delve into our process, what we've learned, and what we plan to do!"
>
	<script type="application/ld+json" slot="structured">
    {
      "@context": "https://schema.org",
      "@type": "Project",
      "name": "Reia",
      "url": "https://www.playreia.com/about",
      "logo": "https://www.playreia.com/reia_logo_meta.png",
      "sameAs": [
        "https://facebook.playreia.com",
        "https://twitter.playreia.com",
        "https://instagram.playreia.com",
        "https://youtube.playreia.com",
        "https://github.playreia.com",
        "https://playreia.com"
      ]
    }
	</script>
</Meta>
