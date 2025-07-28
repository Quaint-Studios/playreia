<script lang="ts">
	import Content from '$components/layout/Content.svelte';
	import Section from '$components/layout/Section.svelte';
	import Seo from '$components/seo/Seo.svelte';

	let { title, description, slug, children, data } = $props();
</script>

<Seo {title} {description} locale={data.locale} url={data.url}>
	{#snippet structured_data()}
		{@html `<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "${title}",
				"url": "${data.url}"
			}
		</script>`}
	{/snippet}
</Seo>

<Content>
	<Section>
		<div class="legal">
			<h1>{title}</h1>

			{@render children()}
		</div>
	</Section>
</Content>
