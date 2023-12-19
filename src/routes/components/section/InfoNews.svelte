<script>
	const default_news_img = '$lib/img/news/default-img-news.jpg';
	const default_news_alt = 'Default News Image';
	const default_news_title = 'Default News Image Title';

	export const title = 'Content';
	/**
	 * @type {Array<NewsItem>}
	 */
	export let items = [];
</script>

<div class="info-news">
	{#each items as item}
		<div class="item">
			<a href={item.url}>
				<h2 class="title">{title}</h2>
				<enhanced:img
					class="item-image"
					src={item.image ?? default_news_img}
					alt={item.imageAlt ?? default_news_alt}
					title={item.imageTitle ?? default_news_title}
				/>
			</a>
			<h3>{item.preview}</h3>
		</div>
	{/each}
</div>

<style>
	/* Content */
	.info-news .title {
		@apply text-primary-700 text-2xl md:text-3xl font-bold uppercase;
	}
	:global(.dark) .info-content .title {
	}

	.item-image {
		@apply object-cover w-2 h-1;
	}
</style>
