<script lang="ts">
	import Content from '$components/layout/Content.svelte';
	import Section from '$components/layout/Section.svelte';

	let { children } = $props();
</script>

<Content>
	<Section>
		<div class="legal">
			{@render children()}
		</div>
	</Section>
</Content>
