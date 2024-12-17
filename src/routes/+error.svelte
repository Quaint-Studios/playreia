<script lang="ts">
	import { page } from '$app/stores';
	import Content from '$components/layout/Content.svelte';
	import Meta from '$components/seo/Meta.svelte';

	const emojis: { [index: number]: string } = {
		// TODO add the rest!
		420: '🫠',
		404: '🧐',
		500: '💥'
	};
</script>

<Meta title="Error... there's ether everywhere!" description="Uh oh, an error happened!">
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Reia",
				"url": "https://www.playreia.com"
			}
		</script>
	{/snippet}
</Meta>

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
