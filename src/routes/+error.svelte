<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';
	import ContentContainer from '$components/containers/ContentContainer.svelte';

	let previousPage: string = base;

	afterNavigate(({from}) => {
        previousPage = from?.url.pathname || base;
    });
</script>

<ContentContainer pt={true}>
	<h1>Error 404: Page Not Found</h1>
	<p class="font-medium mb-8">Something seems to have gone wrong. Let's get you back on track.</p>

	<h2>Oops! Maybe that page doesn't exist?</h2>
	<p class="font-medium">Here are some other things you could try.</p>
	<ul>
		<li><a href="/home">Home</a> - Get an overview of all things related to Reia.</li>
        <li><a href="/game">Play</a> - Start your adventure in Reia!</li>
        <li><a href="/blog">Blog</a> - Read about the latest updates and news.</li>
        <li><a href="/learn">Learn</a> - Explore educational resources and tutorials.</li>
        <li><a href="/faq">FAQ</a> - Get answers to common questions.</li>
        <li><a href="/press-kit">Press Kit</a> - Access our press kit for media resources.</li>
		<li><a href="/about">About Us</a> - Learn about our journey and the team!</li>
        <li><a href="/contact">Contact</a> - Reach out to us for support or inquiries.</li>
	</ul>

	<p class="font-medium">You can also <a href={previousPage}>go back</a> to try again.</p>
</ContentContainer>

<style lang="postcss">
	li {
        @apply pl-6;
	}
</style>
