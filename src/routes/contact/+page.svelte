<script lang="ts">
	import Socials from '$components/footers/Socials.svelte';
	import Content from '$components/layout/Content.svelte';
	import Section from '$components/layout/Section.svelte';
	import Seo from '$components/seo/Seo.svelte';
	import alinks from '$constants/alinks';
	import { CONTACT_EMAIL } from '$lib/info';

	let title = 'Reia - Contact Us for Support, Feedback, and Contributions';
	let description =
		"Contact Reia to share feedback, suggestions, and contributors. If you're interested in contributing to the project, please let us know.";
	let { data } = $props();
</script>

<Seo
	{title}
	{description}
	reverseDecoration={true}
	locale={data.locale}
	url={data.url}
>
	{#snippet structured_data()}
		{@html `<script type="application/ld+json">
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
		</script>`}
	{/snippet}
</Seo>

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
				You can email us at <a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>
				. We'll get back to you soon!
			</p>

			<h2>Social Media</h2>
			<p>
				You can also reach out to us on social media. We're mostly active on <a
					href={alinks.bluesky}
					target="_blank"
					rel="noopener"
				>
					Bluesky
				</a>
				where we post updates and news about the project. You can also follow us on other social media
				platforms below.

				<Socials />
			</p>

			<h2>Physical Mail</h2>
			<p>You can send us mail at the following address:</p>
			<div class="mx-auto mt-4 max-w-(--breakpoint-md) font-bold">
				<address>
					Quaint Studios
					<br />
					5004 E Fowler Ave #C349
					<br />
					Tampa, FL 33617
				</address>
			</div>

			<h2>Discord Server</h2>
			<p>
				Join our <a href={alinks.discord} target="_blank" rel="noopener">Discord server</a>
				 to chat with us and other contributors. This is a great place to collaborate on the project.
			</p>

			<h2>GitHub Repository</h2>
			<p>
				Reia's source code is hosted on <a href={alinks.github} target="_blank" rel="noopener">
					GitHub
				</a>
				. You can submitting bug reports, feature requests, or leave feedback. We appreciate all the
				love and support you send.
			</p>
		</div>
	</Section>
</Content>

<style lang="postcss">
	@reference '$appcss';

	h1 {
		@apply w-full text-center;
	}
	blockquote {
		@apply mt-4 mb-6;
	}
</style>
