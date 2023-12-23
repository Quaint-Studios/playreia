<script>
	import Meta from '$lib/components/head/meta.svelte';
</script>

<div class="mt-40 mb-20 mx-10">
	<h1 class="h1 text-center font-bold">Contribute</h1>
	<h2 id="#GitHub" class="h2"># GitHub</h2>
	<p>
		You can contribute via the GitHub repository <a
			class="btn bg-primary-500 py-1"
			href="https://github.playreia.com">here</a
		>
		<br /><br />
		There are several tasks you can complete ranging from creating beautiful art, code, music, and more!
		If you see a way you can move the project forward with us, join in.
	</p>
	<h2 id="#Funding" class="h2"># Funding</h2>
	<p>
		Another way you can contribute to this project is through funding. And if there's something
		specific that we are already working on and you'd like us to give it some more focus, you can
		emphasize that by voicing your concern. Currently we're deciding the best platform to accept
		funding long-term. Currently we're thinking of <a href="https://opencollective.com/reia"
			>Open Collective</a
		>. But that may change depending on some factors; fees being one of them.
	</p>
</div>

<Meta
	title="Contribute Code, Art, and more to the project!"
	description="If you like the story or even the fantasy RPG & action adventure aspect of Reia, our GitHub has everything to contribute code, art, or funding to the project!"
>
	<script type="application/ld+json" slot="structured">
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Reia",
      "url": "https://playreia.com"
    }
	</script>
</Meta>

<style>
	h2 {
		@apply mt-8;
	}
</style>
