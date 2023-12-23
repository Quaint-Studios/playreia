<script>
	import defaultNewsImg from '$lib/assets/img/news/default-img-news.jpg?enhanced';
	const default_news_alt = 'Default News Image';
	const default_news_title = 'Default News Image Title';
	/**
	 * @type {Array<NewsItem>}
	 */
	export let items = [];

	/**
	 *
	 * @param item {NewsItem}
	 * @param index {"image" | "imageAlt" | "imageTitle"}
	 * @param fill {string}
	 * @returns {string}
	 */
	function getOrFill(item, index, fill) {
		return Object.hasOwn(item, index) && item[index] != undefined ? item[index] ?? fill : fill;
	}
</script>

<div class="info-news grid-flow-row-dense lg:grid-flow-col-dense">
	{#each items as item}
		<div class="item">
			<a href={item.url}>
				<h3 class="item-title">{item.title}</h3>
				{#if Object.hasOwn(item, 'image') && item.image != undefined}
					<img
						class="item-image"
						src={item.image}
						alt={getOrFill(item, 'imageAlt', default_news_alt)}
						title={getOrFill(item, 'imageTitle', default_news_title)}
					/>
				{:else}
					<enhanced:img
						class="item-image"
						src={defaultNewsImg}
						alt={getOrFill(item, 'imageAlt', default_news_alt)}
						title={getOrFill(item, 'imageTitle', default_news_title)}
					/>
				{/if}
			</a>
			<h4>{item.preview}</h4>
		</div>
	{/each}
</div>

<style>
	/* Content */
	.info-news {
		@apply inline-grid auto-cols-max gap-10 justify-self-center;
	}

	.info-news .item-title {
		@apply text-primary-700 text-xl md:text-2xl font-bold uppercase;
	}
	:global(.dark) .info-content .item-title {
	}

	.item-image {
		@apply object-cover w-64 min-w-[16rem] h-40 min-h-[10rem] rounded-[12px];
	}
</style>
