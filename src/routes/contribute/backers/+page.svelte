<script lang="ts">
	import Content from '$components/layout/Content.svelte';
	import Section from '$components/layout/Section.svelte';
	import Seo from '$components/seo/Seo.svelte';
	import alinks from '$constants/alinks';

	let title = 'Our Amazing Backers and Supporters';
	let description =
		"This is a list of all the amazing backers and supporters of the Reia project. This gives recognization to those who have supported the project's game development.";
	// prettier-ignore
	const keywords = ['reia', 'contribute', 'contribute to reia', 'open-source', 'open-source contributor', 'open-source contribution', 'open-source project', 'open-source development', 'open-source community', 'open-source software', 'open-source game', 'open-source game development', 'open-source game design', 'open-source game art', 'open-source game writing', 'open-source game programming', 'open-source game developer', 'open-source game designer', 'open-source game artist', 'open-source game writer', 'open-source game programmer', 'open-source game development community', 'open-source game design community', 'open-source game art community', 'open-source game writing community', 'open-source game programming community', 'open-source game developer community', 'open-source game designer community', 'open-source game artist community', 'open-source game writer community', 'open collective', 'open collective backers', 'open collective supporters', 'open collective contributors', 'open collective financial backers', 'open collective financial supporters', 'open collective financial contributors', 'opencollective backers', 'opencollective supporters', 'opencollective contributors', 'opencollective financial backers', 'opencollective financial supporters', 'opencollective financial contributors']
	let { data } = $props();
</script>

<Seo {title} {description} reverseDecoration={true} {keywords} locale={data.locale} url={data.url}>
	{#snippet structured_data()}
		{@html `<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Reia Supporters and Financial Backers",
				"url": "https://www.playreia.com/contribute/backers"
			}
		</script>`}
	{/snippet}
</Seo>

<Content>
	<Section>
		<h1>
			Reia <strong>Supporters</strong>
		</h1>
		<div class="readable">
			<blockquote>
				<p>
					Below is a list of financial backers that have supported the project through either <a
						href={alinks.open_collective}
						target="_blank"
						rel="noopener"
					>
						Open Collective
					</a>
					or other means we've recognized.
				</p>
			</blockquote>

			<h2>Recurring Backers</h2>

			<p>
				Recurring backers are those who have donated on <a
					href={alinks.open_collective}
					target="_blank"
					rel="noopener"
				>
					Open Collective
				</a>
				to the project either monthly or yearly basis. They are listed here as a thank you for their
				continued support.
			</p>

			<ul>
				<li>Christopher $24.00/yr</li>
				<li>Kristopher Ali $24.00/yr</li>
			</ul>

			<h2>All Backers</h2>

			<p>
				All backers are listed here as a thank you for their support. If you'd like to be listed
				here, please donate to the project through our <a
					href={alinks.open_collective}
					target="_blank"
					rel="noopener"
				>
					Open Collective
				</a>
				.
			</p>

			<ul>
				<li>Kristopher Ali $224.00</li>
				<li>Christopher $24.00</li>
			</ul>
		</div>
	</Section>
</Content>

<style lang="postcss">
	@reference '$appcss';

	h1 {
		@apply w-full text-center;
	}

	strong {
		@apply text-r-gold;
	}
	blockquote {
		@apply mt-4 mb-6;
	}
	ul {
		@apply mt-4;
	}
	ul li {
		@apply ml-4 !list-inside;
		list-style: decimal;
	}
</style>
