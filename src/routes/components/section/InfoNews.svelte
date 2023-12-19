<script>
	/**
	 * @typedef {{
	 * 'title': string,
	 * 'image': string?,
	 * 'imageAlt': string?,
	 * 'imageTitle': string?,
	 * 'url': string,
	 * 'preview': string
	 * }} NewsItem
	 */

	export const default_news_img = '$lib/img/news/default-img-news.jpg';

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
					alt={item.imageAlt}
					title={item.imageTitle}
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
