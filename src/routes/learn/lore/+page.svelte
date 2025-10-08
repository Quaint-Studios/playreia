<script lang="ts">
	import Content from '$components/layout/Content.svelte';
	import Section from '$components/layout/Section.svelte';
	import Seo from '$components/seo/Seo.svelte';

	const title = 'The Lore of Reia';
	const description =
		"Explore the deep lore of Reia. Learn about the Ethereals, the world's origins, myths, and more.";
	const url = 'https://playreia.com/learn/lore';
	const keywords = ['lore', 'reia', 'ethereals', 'world', 'history', 'myths', 'fantasy'];
	const locale = 'en';

	const pages = [
		{
			href: '/learn/lore/ethereals',
			title: 'The Ethereals',
			desc: 'Deities and creators of the world of Liora. Discover their origins, powers, and influence on the world.'
		},
		{
			href: '',
			title: 'The Origin of Liora',
			desc: 'Uncover the creation story and the forces that shaped the land of Liora. [Coming soon]'
		},
		{
			href: '',
			title: 'The Invasion',
			desc: 'Learn about the catastrophic event that changed the fate of Liora forever. [Coming soon]'
		},
		{
			href: '',
			title: 'Void',
			desc: 'Delve into the mysterious realm of the Void and its impact on the world. [Coming soon]'
		},
		{
			href: '',
			title: 'Hollow Race',
			desc: 'Explore the enigmatic Hollows and the secrets they conceal about the history of Liora. [Coming soon]'
		},
		{
			href: '',
			title: 'The Lost Cities',
			desc: 'Discover the ancient cities lost to time and the legends that surround them. [Coming soon]'
		},
		{
			href: '',
			title: 'Legends & Myths',
			desc: 'Read the tales and folklore passed down through generations in Liora. [Coming soon]'
		},
		{
			href: '',
			title: 'Artifacts & Relics',
			desc: 'Learn about powerful artifacts and relics that shaped the fate of Liora. [Coming soon]'
		}
	];
</script>

<Seo {title} {description} {url} {keywords} {locale}>
	{#snippet structured_data()}
		{@html `<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "The Lore of Reia",
        "description": "${description}",
        "url": "${url}",
        "itemListElement": ${JSON.stringify(
					pages.map((page, i) => ({
						'@type': 'ListItem',
						position: i + 1,
						name: page.title,
						url: page.href ? `https://playreia.com${page.href}` : undefined,
						description: page.desc
					}))
				)}
    }
    </script>`}
	{/snippet}
</Seo>

<Content>
	<Section>
		<h1>Lore</h1>
		<p class="intro">
			Explore the deep lore of Liora. Select a topic below to learn more about the world, its
			history, and its mysteries.
		</p>

		<div class="lore-sections">
			<a href="/learn/lore/ethereals">
				<h2>The Ethereals</h2>
				<p>
					Deities and creators of the world of Liora. Discover their origins, powers, and influence
					on the world.
				</p>
			</a>
			<div>
				<h2>The Origin of Liora</h2>
				<p>
					[Coming soon] Uncover the creation story and the forces that shaped the land of Liora.
				</p>
			</div>
			<div>
				<h2>The Invasion</h2>
				<p>
					[Coming soon] Learn about the catastrophic event that changed the fate of Liora forever.
				</p>
			</div>
			<div>
				<h2>Void</h2>
				<p>
					[Coming soon] Delve into the mysterious realm of the Void and its impact on the world.
				</p>
			</div>
			<div>
				<h2>Hollow Race</h2>
				<p>
					[Coming soon] Explore the enigmatic Hollows and the secrets they conceal about the history
					of Liora.
				</p>
			</div>
			<div>
				<h2>The Lost Cities</h2>
				<p>
					`` [Coming soon] Discover the ancient cities lost to time and the legends that surround
					them.
				</p>
			</div>
			<div>
				<h2>Legends & Myths</h2>
				<p>[Coming soon] Read the tales and folklore passed down through generations in Liora.</p>
			</div>
		</div>
	</Section>
</Content>

<style lang="postcss">
	@reference '$appcss';

	h1 {
		@apply mb-8 text-center text-4xl;
	}
	.intro {
		@apply text-r-border-silver/80 mb-10 text-center text-lg;
	}
	.lore-sections {
		@apply flex flex-col gap-8;
	}
	.lore-sections a,
	.lore-sections div {
		@apply bg-r-midnight-blue/60 hover:bg-blue-alt-600/80 flex flex-col rounded-lg p-6 shadow transition;
	}
	.lore-sections div {
		@apply hover:bg-blue-alt-600/20!;
	}
	.lore-sections a {
		@apply text-r-white no-underline;
	}
	.lore-sections h2 {
		@apply mb-2 text-2xl;
	}
	.lore-sections p {
		@apply text-r-border-silver/70 text-base;
	}
</style>
