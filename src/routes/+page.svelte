<script>
	import LoremIpsum from './components/filler/LoremIpsum.svelte';
	import Hero from './components/hero/Hero.svelte';
	import Meta from './components/head/meta.svelte';
	import InfoSection from './components/section/InfoSection.svelte';
	import InfoContent from './components/section/InfoContent.svelte';
	import InfoNews from './components/section/InfoNews.svelte';
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="w-full h-full">
	<Hero />
	<InfoSection title="News">
		<InfoNews slot="content">Hello world!</InfoNews>
	</InfoSection>
	<InfoSection title="Explore">

  </InfoSection>
	<LoremIpsum />
</div>

<Meta>
	<script type="application/ld+json" slot="structured">
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Reia",
      "url": "https://playreia.com"
    }
	</script>
</Meta>
