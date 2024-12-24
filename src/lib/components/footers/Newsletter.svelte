<script lang="ts">
	import { page } from '$app/stores';

	function subscribe() {
		const elem = document.getElementById('newsletter-email') as HTMLInputElement;
		const email = elem.value;
		if (email) {
			fetch(`${$page.url.pathname}/newsletters`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email,
					labels: ['newsletter']
				})
			})
				.then((response) => {
					if (response.ok) {
						elem.value = '';
						alert('Subscribed!');
					} else {
						alert('Error subscribing');
					}
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		}
	}
</script>

<div class="newsletter">
	<span>Get notified</span>
	<h2>Join Us for an Adventure</h2>
	<p>
		Sign up with your email to join the waitlist to play <strong>Reia</strong> early. We'll send you updates on the
		game's progress and notify you when we do tests and releases.
	</p>
	<div class="container">
		<input aria-label="Newsletter" type="email" id="newsletter-email" placeholder="Your email..." />
		<button onclick={subscribe} class="plausible-event-name=newsletter+subscribe">Subscribe</button>
	</div>
</div>

<style lang="postcss">
	.newsletter {
		@apply flex w-full flex-col items-center justify-center bg-[--midnight4] px-3 py-12;
	}

	span {
		@apply font-medium text-[--borderSilver];
	}
	h2 {
		@apply max-w-sm text-center text-3xl;
	}
	p {
		@apply max-w-sm text-center text-[--borderSilver] mt-2;
	}

	.container {
		@apply relative mt-5 flex h-min w-full max-w-[325px] items-center justify-center;
	}
	.container input {
		@apply w-full bg-[--midnightBlue] py-3.5 pl-3 pr-[135px] text-white;
	}
	.container input#newsletter-email:focus {
		@apply border-[1px] border-solid border-[--borderSilver] !bg-[--midnight5];
		box-shadow: 0 0 0 1px var(--midnight7);
	}
	button {
		@apply absolute right-[5px] my-auto w-min rounded-lg2 font-bold;
		@apply bg-[--midnight6] px-6 py-2 text-white hover:bg-[--midnight7];
	}
	button:active {
		@apply scale-[0.98];
	}
	.container #newsletter-email {
		@apply w-full rounded-xl !border-none !outline-none;
	}
</style>
