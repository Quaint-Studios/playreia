<script>
	import ContentContainer from '$lib/components/containers/ContentContainer.svelte';
	import Meta from '$lib/components/head/meta.svelte';
</script>

<ContentContainer>
	<div class="press-kit">
		<h1>Press-Kit</h1>
		<p>
			When the time comes, we will be utilizing <a
				href="https://impress.games/press-kitty"
				target="_blank"
				rel="noopener noreferrer">Press Kitty by <em>impress.games</em></a
			> to create our press kit.
		</p>
	</div>
</ContentContainer>

<Meta
	title="Press-Kit"
	description="Enjoy reading, watching, and viewing images about this game based in a fantasy action adventure setting. Reia's press kit gives you all the information and images you'll need about and its development progress."
>
	<script type="application/ld+json" slot="structured">
		{
			"@context": "https://schema.org/",
			"@type": "WebSite",
			"name": "Reia",
			"url": "https://www.playreia.com/press-kit"
		}
	</script>
</Meta>
