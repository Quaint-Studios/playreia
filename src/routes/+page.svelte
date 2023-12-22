<script>
	import Hero from './components/hero/Hero.svelte';
	import Meta from './components/head/meta.svelte';
	import InfoSection from './components/section/InfoSection.svelte';
	import InfoNews from './components/section/InfoNews.svelte';

	import AboutReia from './components/articles/AboutReia.svx';

	let info;

	/** @type {Array<NewsItem>} */
	let newsItems = [
		{
			title: 'Version 1.0.0.0',
			url: '/news/version-1-0-0-0',
			preview: 'Test',

			imageAlt: 'v1.0.0.0',
			imageTitle: 'Version 1.0.0.0'
		},
		{
			title: 'Version 1.0.0.1',
			url: '/news/version-1-0-0-1',
			preview: 'Test',

			imageAlt: 'v1.0.0.1',
			imageTitle: 'Version 1.0.0.1'
		},
		{
			title: 'Version 1.0.0.2',
			url: '/news/version-1-0-0-2',
			preview: 'Test',

			imageAlt: 'v1.0.0.2',
			imageTitle: 'Version 1.0.0.2'
		}
	];
</script>

<Hero />
<InfoSection title="News">
	<InfoNews slot="content" items={newsItems} />
</InfoSection>
<InfoSection title="Explore"></InfoSection>
<AboutReia />

<Meta>
	<script type="application/ld+json" slot="structured">
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Reia",
      "url": "https://www.playreia.com"
    }
	</script>
</Meta>
