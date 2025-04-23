<script lang="ts">
	import Content from '$components/layout/Content.svelte';
	import Section from '$components/layout/Section.svelte';

	let { title, date, updated, author, category, content } = $props();

	function getDate(lastUpdated = false) {
		const dateArr = new Date(lastUpdated ? date : (updated ?? date))
			.toDateString()
			.split(' ')
			.slice(1);
		dateArr[1] += ', ';
		return dateArr.join(' ');
	}
</script>

<Content>
	<Section>
		<article class="blog-post">
			<time datetime={date}>{getDate()}</time>
			<h1>{title}</h1>
			<div class="meta">
				<div>
					<address>
						<a rel="author" target="_blank" href="/users/{author.id}">{author.name}</a>
					</address>
					<span>&bull;</span>
					<a href="/{category.toLowerCase().replaceAll(' ', '-')}">
						{category}
					</a>
				</div>
				<time datetime={date}>Last updated: {getDate(true)}</time>
			</div>
			{@render content()}
		</article>
	</Section>
</Content>

<style lang="postcss">
	@reference '$appcss';

	time {
		@apply text-r-gold-2 flex justify-center text-sm;
	}
	.meta {
		@apply mt-4 mb-8 flex flex-col items-center text-lg;

		div {
			@apply flex justify-center gap-4 text-lg;
		}

		time {
			@apply text-r-border-silver/75 mb-8;
		}
	}
	.meta a {
		@apply text-r-border-silver font-medium not-italic no-underline;
	}
	.meta a:hover {
		@apply text-r-blue-light;
	}
</style>
