<script>
	import Meta from '$lib/components/head/meta.svelte';
	import { socials } from '$lib/info';
</script>

<div class="mt-40 mb-20 mx-10">
	<h1 class="h1 text-center font-bold">Contribute Code, Art, and more to the project!</h1>
	<h2 id="#GitHub" class="h2"># GitHub</h2>
	<p>
		You can contribute via the GitHub repository <a
			class="btn bg-primary-500 py-1"
			href={socials.github}>here</a
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
		funding long-term. Currently we're thinking of <a href={socials.open_collective}
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
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How can I contribute code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you have programming experience then head over to https://github.com/Quaint-Studios/Reia or join our community!"
      }
    },{
      "@type": "Question",
      "name": "What if I want to contribute art?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This follows the same process as before. On GitHub we can form discussions and talk about ideas, art styles, and submit work. Head over to https://github.com/Quaint-Studios/Reia to get started."
      }
    },{
      "@type": "Question",
      "name": "If I have experience with sound design or something else, how should I contribute?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You guessed it! GitHub has to covered there too. Join the community and share your work with us."
      }
    },{
      "@type": "Question",
      "name": "What if I don't have any technical experience or time? Can I help fund the project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! But, we're currently decided which platform to use for our funding. We currently have an Open Collective page at https://opencollective.com/reia. But it's not set up to accept any donations. Stay tuned for updates! Or suggest something to us."
      },{
      "@type": "Question",
      "name": "How can we contact you about contributing in any form?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Email us at contribute@playreia.com. That would be best for now!"
      }
    }]
  }
  </script>
</Meta>

<style>
	h2 {
		@apply mt-8;
	}
</style>
