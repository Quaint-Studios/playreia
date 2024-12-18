<script lang="ts">
	import BlogItem from '$components/layout/BlogItem.svelte';
	import Content from '$components/layout/Content.svelte';
	import Section from '$components/layout/Section.svelte';
	import Wumpus from '$images/banners/wumpus.png?enhanced&w=720;540;360';
</script>

<Content>
	<h1 class="page-title">The Reia Blog and Stories</h1>
	<Section>
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto">
			<BlogItem
				href="/blog/blog-item-1"
				title="Update 1: This is a blog item title example sentence."
				description="This is a blog item description."
				image={Wumpus}
				date="2024-12-18"
				author="Author"
				categories={['Updates']}
			/>
			<BlogItem
				href="/blog/blog-item-1"
				title="Update 1: This is a blog item title example sentence."
				description="This is a blog item description."
				image={Wumpus}
				date="2024-12-18"
				author="Author"
				categories={['Updates']}
			/>
			<BlogItem
				href="/blog/blog-item-1"
				title="Update 1: This is a blog item title example sentence."
				description="This is a blog item description."
				image={Wumpus}
				date="2024-12-18"
				author="Author"
				categories={['Updates']}
			/>
			<BlogItem
				href="/blog/blog-item-1"
				title="Update 1: This is a blog item title example sentence."
				description="This is a blog item description."
				image={Wumpus}
				date="2024-12-18"
				author="Author"
				categories={['Updates']}
			/>
		</div>
	</Section>
</Content>

<style lang="postcss">
</style>
