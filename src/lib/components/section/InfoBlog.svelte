<script>
	import defaultBlogImg from '$lib/assets/img/blog/default-img-blog.jpg?enhanced';
	import { hasOwn } from '$lib/utils';
	const default_blog_alt = 'Default Blog Image';
	const default_blog_title = 'Default Blog Image Title';
	/**
	 * @type {Array<BlogItem>}
	 */
	export let items = [];

	/**
	 *
	 * @param item {BlogItem}
	 * @param index {"image" | "imageAlt" | "imageTitle"}
	 * @param fill {string}
	 * @returns {string}
	 */
	function getOrFill(item, index, fill) {
		return hasOwn(item, index) && item[index] != undefined ? item[index] ?? fill : fill;
	}
</script>

<div class="info-blog grid-flow-row-dense lg:grid-flow-col-dense">
	{#each items as item}
		<div class="item">
			<a href={item.url}>
				<h3 class="item-title">{item.title}</h3>
				{#if hasOwn(item, 'image') && item.image != undefined}
					<img
						class="item-image"
						src={item.image}
						alt={getOrFill(item, 'imageAlt', default_blog_alt)}
						title={getOrFill(item, 'imageTitle', default_blog_title)}
					/>
				{:else}
					<enhanced:img
						class="item-image"
						src={defaultBlogImg}
						alt={getOrFill(item, 'imageAlt', default_blog_alt)}
						title={getOrFill(item, 'imageTitle', default_blog_title)}
					/>
				{/if}
			</a>
			<h4>{item.preview}</h4>
		</div>
	{/each}
</div>

<style>
	/* Content */
	.info-blog {
		@apply inline-grid auto-cols-max gap-10 justify-self-center;
	}

	.info-blog .item-title {
		@apply text-primary-700 text-xl md:text-2xl font-bold uppercase;
	}
	:global(.dark) .info-content .item-title {
	}

	.item-image {
		@apply object-cover w-64 min-w-[16rem] h-40 min-h-[10rem] rounded-[12px];
	}
</style>
