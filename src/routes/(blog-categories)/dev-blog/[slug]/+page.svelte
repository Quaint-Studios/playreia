<script>
	import BlogPost from '$blog-categories/BlogPost.svelte';

	let { data } = $props();
	const { title, date, updated, author, category, content } = data;
</script>

<BlogPost {title} {date} {updated} {author} {category} {content} />
