<script lang="ts">
	import NewsletterButton from './NewsletterButton.svelte';
</script>

<div class="newsletter">
	<span>Get notified</span>
	<h2>Join Us for an Adventure</h2>
	<p>
		Sign up with your email to join the waitlist to play <strong>Reia</strong> early. We'll send you
		updates on the game's progress and notify you when we do tests and releases.
	</p>
	<NewsletterButton />
</div>

<style lang="postcss">
	@reference '$appcss';

	.newsletter {
		@apply flex w-full flex-col items-center justify-center bg-r-midnight-400 px-3 py-12 text-base;
	}

	span {
		@apply font-medium text-(--borderSilver);
	}
	h2 {
		@apply max-w-sm text-center text-3xl;
	}
	p {
		@apply mt-2 max-w-sm text-center text-(--borderSilver);
	}
</style>
