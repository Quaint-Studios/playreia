<script>
	import LoremIpsum from './components/filler/LoremIpsum.svelte';
	import Hero from './components/hero/Hero.svelte';
	import Meta from './components/head/meta.svelte';
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="w-full h-full">
	<Hero />
	<LoremIpsum />
</div>

<Meta title="Reia - Explore endless worlds and embark on a magical adventure!">
	<script type="application/ld+json" slot="structured">
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Reia",
      "url": "https://playreia.com"
    }
	</script>
</Meta>
