<script lang="ts">
	import alinks from '$constants/alinks';
	import SectionCard from '$components/layout/SectionCard.svelte';

	import DiscordImg from '$images/banners/discord.jpg?enhanced&w=428;512;1024';
	import NewsletterImg from '$images/banners/newsletter.jpg?enhanced&w=428;512;1024';
	import FoldingAtHomeImg from '$images/banners/folding_at_home.jpg?enhanced&w=428;512;1024';
</script>

<div class="announcements">
	<SectionCard
		shout
		title="Join our Discord"
		url={alinks.discord}
		target="_blank"
		rel={['noopener', 'noreferrer']}
		cta="Message"
		src={DiscordImg}
		alt="Discord Banner"
		sizes="min(428px, 60vw)"
	>
		Join our Discord server to chat with the developers and other players! We'd love to hear from you.
	</SectionCard>
	<SectionCard
		shout
		title="Alpha Tests"
		url="/newsletter"
		cta="Notify me"
		src={NewsletterImg}
		alt="Newsletter Banner"
		sizes="min(428px, 60vw)"
	>
		Testing currently is private. But you can subscribe to our newsletter to get in on some cool
		multiplayer tests!
	</SectionCard>
	<SectionCard
		shout
		title="Folding@Home"
		url="/foldingathome"
		cta="Start folding"
		src={FoldingAtHomeImg}
		alt="Folding@Home Banner"
		sizes="min(428px, 60vw)"
        objectPosition="100% 0"
	>
		"Folding" is your way to help combat diseases like cancers and Alzheimer's disease. Join our
		<a target="_blank" rel="noopener noreferer" href="https://stats.foldingathome.org/team/1066033"
			>team</a
		> and help us contribute. We're looking into distributing in-game rewards as an incentive!
	</SectionCard>
</div>

<style lang="postcss">
	@reference '$appcss';

	.announcements {
		@apply mx-auto mt-10 w-full;
		@apply flex flex-wrap justify-center gap-6 xl:grid xl:grid-cols-3;
	}
</style>
