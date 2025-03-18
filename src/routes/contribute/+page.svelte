<script lang="ts">
	import Content from '$components/layout/Content.svelte';
	import Section from '$components/layout/Section.svelte';
	import Meta from '$components/seo/Meta.svelte';
	import alinks from '$constants/alinks';
</script>

<Meta
	titlePrefix=""
	title="Reia - Become an Open-Source Contributor"
	titleSuffix=""
	keywords={'reia, contribute, contribute to reia, open-source, open-source contributor, open-source contribution, open-source project, open-source development, open-source community, open-source software, open-source game, open-source game development, open-source game design, open-source game art, open-source game writing, open-source game programming, open-source game developer, open-source game designer, open-source game artist, open-source game writer, open-source game programmer, open-source game development community, open-source game design community, open-source game art community, open-source game writing community, open-source game programming community, open-source game developer community, open-source game designer community, open-source game artist community, open-source game writer community, open-source game programmer community'}
	description="Contribute to Reia's development. Whether you're a programmer, artist, designer, or writer, there's a place for you in the Reia community."
>
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "How to Contribute to Reia",
				"url": "https://www.playreia.com/contribute",
				"description": "Contribute to Reia's development. Whether you're a programmer, artist, designer, or writer, there's a place for you in the Reia community.",
				"potentialAction": [
					{
						"@type": "JoinAction",
						"name": "Contribute Code",
						"description": "Contribute to the Reia codebase on GitHub.",
						"target": "https://github.com/Quaint-Studios/Reia"
					},
					{
						"@type": "JoinAction",
						"name": "Join the Community",
						"description": "Join the Reia Discord community to discuss the game and contribute ideas.",
						"target": "https://discord.com/users/83303489945468928"
					},
					{
						"@type": "DonateAction",
						"name": "Donate Financially",
						"description": "Support the development of Reia with a financial contribution via Open Collective.",
						"target": "https://opencollective.com/reia"
					}
				]
			}
		</script>
	{/snippet}
</Meta>

<Content>
	<Section>
		<h1>Contribute to <strong>Reia</strong></h1>
		<div class="readable">
			<blockquote>
				<p>As an open-source project, there are many ways to contribute to Reia's developemnt.</p>
			</blockquote>

			<p>
				Whether you're a programmer, artist, designer, or writer, there's a place for you in the
				Reia community.
			</p>

			<h2>GitHub Repository</h2>
			<p>
				Reia's source code is hosted on <a href={alinks.github} target="_blank" rel="noopener"
					>GitHub</a
				>. You can contribute by submitting bug reports, feature requests, or pull requests. This is
				a good place for <strong>programmers</strong>
				and <strong>writers</strong> to contribute to the project.
			</p>

			<h2>Discord Server</h2>
			<p>
				We've finally opened up <a href={alinks.discord} target="_blank" rel="noopener"
					>Reia's Discord server</a
				>. Join to discuss the project with other contributors. This is a good place for everyone to
				collaborate on the project. Especially for <strong>artists</strong> and
				<strong>designers</strong>.
			</p>

			<h2>Open Collective</h2>
			<p>
				You can support the project financially by donating to the <a
					href={alinks.open_collective}
					target="_blank"
					rel="noopener">Open Collective</a
				>. The money goes towards hosting, domain registration, and paying open-source and hired
				contributors. You'll also be listed as a <a href="/contribute/backers">backer</a>!
			</p>
		</div>
	</Section>
</Content>

<style lang="postcss">
	@reference '$appcss';

	h1 {
		@apply w-full text-center;
	}
	code,
	strong {
		@apply text-r-gold;
	}
	blockquote {
		@apply mt-4 mb-6;
	}
</style>
