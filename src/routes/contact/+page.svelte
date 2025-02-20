<script lang="ts">
	import Socials from '$components/footers/Socials.svelte';
	import Content from '$components/layout/Content.svelte';
	import Section from '$components/layout/Section.svelte';
	import Meta from '$components/seo/Meta.svelte';
	import alinks from '$constants/alinks';
	import { contactEmail } from '$lib/info';
</script>

<Meta
	titlePrefix=""
	title="Reia - Contact Us for Support, Feedback, and Contributions"
	titleSuffix=""
	keywords={'reia, contact, contact us, contact reia, support, feedback, contribute, contribute to reia, open-source, open-source contributor, open-source contribution, open-source project, open-source development, open-source community, open-source software, open-source game, open-source game development, open-source game design, open-source game art, open-source game writing, open-source game programming, open-source game developer, open-source game designer, open-source game artist, open-source game writer, open-source game programmer, open-source game development community, open-source game design community, open-source game art community, open-source game writing community, open-source game programming community, open-source game developer community, open-source game designer community, open-source game artist community, open-source game writer community'}
	description="Contact Reia to share feedback, suggestions, and contributors. If you're interested in contributing to the project, please let us know."
>
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "ContactPage",
				"name": "Contact Us",
				"url": "https://www.playreia.com/contact",
				"about": {
					"@type": "Organization",
					"name": "Reia"
				},
				"primaryImageOfPage": {
					"@type": "ImageObject",
					"url": "https://www.playreia.com/reia_logo_meta.png"
				},
				"description": "Have questions, feedback, or suggestions? We'd love to hear from you!",
				"speakable": {
					"@type": "SpeakableSpecification",
					"xPath": ["/html/head/title", "/html/head/meta[@name='description']/@content"]
				}
			}
		</script>
	{/snippet}
</Meta>

<Content>
	<Section>
		<h1>Contact Us</h1>
		<div class="readable">
			<blockquote>
				<p>Thanks for having such an interest in Reia. We'd love to hear from you.</p>
			</blockquote>

			<p>
				You can reach out to us on one of the following platforms or mediums. We're always looking
				for feedback, suggestions, and contributors. If you're interested in contributing to the
				project, please let us know.
			</p>

			<h2>Email</h2>
			<p>
				You can email us at <a href="mailto:{contactEmail}">{contactEmail}</a>. We'll get back to
				you soon!
			</p>

			<h2>Social Media</h2>
			<p>
				You can also reach out to us on social media. We're mostly active on <a
					href={alinks.bluesky}
					target="_blank"
					rel="noopener">Bluesky</a
				>
				where we post updates and news about the project. You can also follow us on other social media
				platforms below.

				<Socials />
			</p>

			<h2>Physical Mail</h2>
			<p>
				You can send us mail at the following address:
			</p>
			<div class="mx-auto mt-4 max-w-screen-md font-bold">
				<address>
					Quaint Studios<br />
					5004 E Fowler Ave #C349<br />
					Tampa, FL 33617
				</address>
			</div>

			<h2>Discord Server</h2>
			<p>
				Join our <a href={alinks.discord} target="_blank" rel="noopener">Discord server</a> to chat with
				us and other contributors. This is a great place to collaborate on the project.
			</p>

			<h2>GitHub Repository</h2>
			<p>
				Reia's source code is hosted on <a href={alinks.github} target="_blank" rel="noopener"
					>GitHub</a
				>. You can submitting bug reports, feature requests, or leave feedback. We appreciate all
				the love and support you send.
			</p>
		</div>
	</Section>
</Content>

<style lang="postcss">
	h1 {
		@apply w-full text-center;
	}
	blockquote {
		@apply mb-6 mt-4;
	}
</style>
