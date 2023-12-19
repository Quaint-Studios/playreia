<script>
	import LoremIpsum from './components/filler/LoremIpsum.svelte';
	import Hero from './components/hero/Hero.svelte';
	import Meta from './components/head/meta.svelte';
	import InfoSection from './components/section/InfoSection.svelte';
	import InfoContent from './components/section/InfoContent.svelte';
	import InfoNews from './components/section/InfoNews.svelte';

	/** @type {Array<NewsItem>} */
	let newsItems = [
		{
			title: 'Version 1.0.0.0',
			url: '/news/version-1-0-0-0',
			preview: 'Test',

			image: '/meta_logo.png',
			imageAlt: 'News Alt',
			imageTitle: 'News Alt Title'
		},
		{
			title: 'Version 1.0.0.1',
			url: '/news/version-1-0-0-1',
			preview: 'Test',

			image: '/test-news-img.jpg',
			imageAlt: 'v1.0.0.1',
			imageTitle: 'News Alt Title'
		},
		{
			title: 'Version 1.0.0.2',
			url: '/news/version-1-0-0-2',
			preview: 'Test',

			imageAlt: 'News Alt',
			imageTitle: 'News Alt Title'
		}
	];
</script>

<div class="w-full h-full">
	<Hero />
	<InfoSection title="News">
		<InfoNews slot="content" items={newsItems} />
	</InfoSection>
	<InfoSection title="Explore"></InfoSection>
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
