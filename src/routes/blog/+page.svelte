<script>
	import ContentContainer from '$lib/components/containers/ContentContainer.svelte';
	import Meta from '$lib/components/head/meta.svelte';
</script>

<ContentContainer>
	<h1>Blog and News Posts</h1>
	<h2>Read about the latest updates to Reia, the team, and all things related here</h2>

	<h3>The Blog and News Posts page is still under construction. Coming soon!</h3>
</ContentContainer>

<Meta
	title="All Blogs and News Posts"
	description="Read all of the blogs and news posts about Reia. The development process, new art, and releases! Get all of the news on the game here."
>
	<script type="application/ld+json" slot="structured">
		{
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": "https://www.playreia.com/blog"
			},
			"headline": "All Blog and News Posts",
			"description": "A compilation of updates about Reia and all things related to the game.",
			"image": "",
			"author": {
				"@type": "Organization",
				"name": "Reia",
				"url": "https://www.playreia.com/about"
			},
			"publisher": {
				"@type": "Organization",
				"name": "Reia",
				"logo": {
					"@type": "ImageObject",
					"url": "https://www.playreia.com/reia_logo_meta.png"
				}
			},
			"datePublished": "2023-12-23",
			"dateModified": "2023-12-22"
		}
	</script>
</Meta>
