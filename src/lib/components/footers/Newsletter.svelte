<script lang="ts">
	import { ProgressRing } from '@skeletonlabs/skeleton-svelte';

	function subscribe() {
		if (status !== 'idle' && status !== 'error') return;
		status = 'pending';

		if (email) {
			fetch(`/newsletter`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email,
					password
				})
			})
				.then((response) => {
					if (response.ok) {
						status = 'success';
						email = '';
					} else {
						status = 'error';
					}
				})
				.catch((error) => {
					console.error('Error:', error);
					status = 'error';
				});
		} else {
			status = 'error';
		}
	}

	type Status = 'idle' | 'pending' | 'success' | 'error';
	let status: Status = $state('idle');
	let email: string | undefined = $state(undefined);
	let password: string | undefined = $state(undefined);
</script>

<div class="newsletter">
	<span>Get notified</span>
	<h2>Join Us for an Adventure</h2>
	<p>
		Sign up with your email to join the waitlist to play <strong>Reia</strong> early. We'll send you
		updates on the game's progress and notify you when we do tests and releases.
	</p>
	<div class="container">
		<form autocomplete="off">
			<input
				class:error={status === 'error'}
				aria-label="Newsletter"
				type="email"
				id="newsletter-email"
				placeholder={status !== 'success' ? 'Your email...' : "We'll notify you.  :)"}
				bind:value={email}
			/>
			<input
				type="text"
				id="newsletter-password"
				class="hidden"
				placeholder="Password"
				bind:value={password}
				tabindex="-1"
				autocomplete="off"
				aria-autocomplete="none"
			/>
		</form>
		<button onclick={subscribe} class="plausible-event-name=newsletter+subscribe">
			{#if status === 'idle' || status === 'error'}
				Subscribe
			{:else if status === 'pending'}
				<ProgressRing
					size="size-6"
					strokeWidth="4px"
					value={25}
					max={100}
					meterStroke="stroke-[--midnight2]"
				/>
			{:else}
				Subscribed!
			{/if}
		</button>
	</div>
</div>

<style lang="postcss">
	.newsletter {
		@apply flex w-full flex-col items-center justify-center bg-[--midnight4] px-3 py-12 text-base;
	}

	span {
		@apply font-medium text-[--borderSilver];
	}
	h2 {
		@apply max-w-sm text-center text-3xl;
	}
	p {
		@apply mt-2 max-w-sm text-center text-[--borderSilver];
	}

	.container {
		@apply relative mt-5 flex h-min w-full max-w-[325px] items-center justify-center;
	}
	.container input {
		@apply w-full bg-[--midnightBlue] py-3.5 pl-3 pr-[135px] text-white;
	}
	.container input#newsletter-email.error {
		@apply !border-[1px] !border-solid !border-[#ff4646] border-opacity-70;
	}
	.container input#newsletter-email:focus {
		@apply border-[1px] border-solid border-[--borderSilver] !bg-[--midnight5];
		box-shadow: 0 0 0 1px var(--midnight7);
	}

	button :global(figure) {
		@apply animate-spin;
	}
	button {
		width: 122px;
		height: 40.8px;
		@apply absolute right-[5px] my-auto flex justify-center rounded-lg2 font-bold;
		@apply bg-[--midnight6] py-2 text-white hover:bg-[--midnight7];
	}
	button:active {
		@apply scale-[0.98];
	}
	.container #newsletter-email {
		@apply w-full rounded-xl !border-none !outline-none;
	}
</style>
