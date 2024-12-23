<script lang="ts">
	import Content from '$components/layout/Content.svelte';
	import Section from '$components/layout/Section.svelte';
	import Meta from '$components/seo/Meta.svelte';

	let { title, description, slug, children } = $props();
</script>

<Meta {title} {description}>
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Reia",
				"url": `https://www.playreia.com/${slug}`
			}
		</script>
	{/snippet}
</Meta>

<Content>
	<Section>
		<div class="legal">
			<h1>{title}</h1>

			{@render children()}
		</div>
	</Section>
</Content>
