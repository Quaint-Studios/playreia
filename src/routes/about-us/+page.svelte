<script lang="ts">
	import Section from '$components/layout/Section.svelte';
	import Content from '$components/layout/Content.svelte';
	import Meta from '$components/seo/Meta.svelte';
</script>

<!-- <TODO> PAGE -->
<Meta
	title="About Us"
	description="Learn all about Reia, the team, and the development journey. Find out why this project was started, our process, what we've learned, and what we plan to do!"
>
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Reia",
				"url": "https://www.playreia.com/terms-and-conditions"
			}
		</script>
	{/snippet}
</Meta>

<Content>
	<Section>
		<div class="content">
			<h1>About Us: Reia and the Team</h1>
			<strong>
				Read on to figure out why this project was started and the many people who have helped on
				the side and will be helping as main supporters.
			</strong>
			<br /><br />
			<p>This page is still under construction but will have information soon.</p>
		</div>
	</Section>
</Content>

<style lang="postcss">
	h1 {
		@apply w-full text-center;
	}

	.content {
		@apply mx-auto max-w-screen-md;
	}
</style>
