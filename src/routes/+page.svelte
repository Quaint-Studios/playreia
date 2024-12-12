<script lang="ts">
	import Hero from '$components/layout/Hero.svelte';
	import Section from '$components/layout/Section.svelte';
	import colors from '$constants/colors';
	import DownloadSection from '$lib/pages/home/DownloadSection.svelte';
</script>

<Hero />

<Section
	backgroundColor={colors.deepBlue}
	color={colors.light}
	title="Coming <strong>Soon</strong>"
	lead="Play Reia across multiple platforms"
	titlePosition="center"
>
	<DownloadSection />
</Section>
