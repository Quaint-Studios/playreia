<script>
	import Content from '$components/layout/Content.svelte';
	import Section from '$components/layout/Section.svelte';

	let { data } = $props();
	const { title, date, author, category, content } = data;

	function getDate() {
		const dateArr = new Date(date).toDateString().split(' ').slice(1);
		dateArr[1] += ', ';
		return dateArr.join(' ');
	}
</script>

<Content>
	<Section>
		<article>
			<time datetime={date} class="text-[--borderSilver]">{getDate()}</time>
			<h1>{title}</h1>
			<div class="meta">
				<address>
					<a rel="author" target="_blank" href="/users/{author.id}">{author.name}</a>
				</address>
				<a href="/{category.toLowerCase().replaceAll(' ', '-')}">
					{category}
				</a>
			</div>
			{@render content()}
		</article>
	</Section>
</Content>

<style lang="postcss">
    time {
        @apply flex justify-center text-[--gold2] text-sm;
    }
    .meta {
        @apply flex gap-4 justify-center mt-4 text-lg;
    }
    .meta a {
        @apply text-[--borderSilver] no-underline not-italic font-medium;
    }
    .meta a:hover {
        @apply text-[--lightBlue];
    }
</style>
