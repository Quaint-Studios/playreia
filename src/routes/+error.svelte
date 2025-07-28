<script lang="ts">
	import { page } from '$app/stores';
	import Content from '$components/layout/Content.svelte';
	import Seo from '$components/seo/Seo.svelte';

	const emojis: { [index: number]: string } = {
		// TODO add the rest!
		420: '🫠',
		404: '🧐',
		500: '💥'
	};

	const title = "Error... there's ether everywhere!";
	const description = 'Uh oh, an error happened!';

	let { data } = $props();
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

<div class="flex h-dvh w-full flex-col items-center justify-center text-white">
	<div>
		<h1 class="text-4xl">
			<span>
				{emojis[$page.status] ?? emojis[500]}
			</span>
			{$page.status}: {$page.error?.message}
		</h1>

		<h2 class="my-2 text-xl">Whooops! We're leaking ether...</h2>
		<p class="my-8 text-center">
			Lets go back to the <a href="/">home page</a>.
		</p>
	</div>
</div>
