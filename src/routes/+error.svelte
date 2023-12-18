<script>
	import { page } from '$app/stores';
	import Meta from './components/head/meta.svelte';

	const emojis = {
		// TODO add the rest!
		420: '🫠',
    404: '🧐',
		500: '💥'
	};
</script>

<div class="w-full h-full flex justify-center items-center flex-col">
	<h1 class="font-bold" style="font-size:2.25rem;line-height:1;">
		<span class="">
			{emojis[$page.status] ?? emojis[500]}
		</span>
		{$page.status}: {$page.error.message}
	</h1>

	<h2 class="text-sm">Whooops! We're leaking ether...</h2>
  <h3 class="text-xs my-4">Lets go back to the <a href="/" class="btn bg-[rgb(var(--color-tertiary-400))] mx-1 text-xs">home page</a></h3>
</div>

<Meta title="Reia - Explore endless worlds and embark on a magical adventure!" description="Uh oh, an arror happened!">
	<script type="application/ld+json" slot="structured">
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Reia",
      "url": "https://playreia.com"
    }
	</script>
</Meta>