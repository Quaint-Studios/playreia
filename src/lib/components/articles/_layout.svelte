<script>
	import ArticleContainer from '../containers/ArticleContainer.svelte';
	import Meta from '../head/meta.svelte';

	export let title;
	export let titleSuffix;
	export let description;

	export let tags;
	export let author;
	export let date;

  export let path;

	export let schema = `<script type="application/ld+json" slot="structured">
  {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Reia",
    "url": "https://www.playreia.com${path}"
  }
</script\>`; // TODO: Turn this into a Utils function that generates it with a passed prop and overridable name and site name.
</script>

<ArticleContainer>
	<slot />

	{#if author && date}
		<p class="author">by {author}</p>
		<p class="date">Last updated: {date}</p>
	{/if}
</ArticleContainer>

<Meta {title} {description} {titleSuffix}>
	{@html schema}
</Meta>

<style>
	.date,
	.author {
		@apply text-sm font-bold text-right m-0;
	}
</style>
