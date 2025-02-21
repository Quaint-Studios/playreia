<script lang="ts">
	import { validateEmail } from '$utils';
	import { ProgressRing } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';

	function focus() {
		const emailInput = document.getElementById('newsletter-email') as HTMLInputElement;
		emailInput.focus();
	}

	function subscribe() {
		reason = '';
		if (status !== 'idle' && status !== 'error') return;
		status = 'pending';

		if (email && validateEmail(email)) {
			const formData = new FormData();
			formData.append('email', email);
			if (password) formData.append('password', password);

			fetch(`/newsletter`, {
				method: 'POST',
				body: formData
			})
				.then((res) => {
					if (res.ok) {
						status = 'success';
						email = '';
						if (password) {
							/* @ts-ignore */
							plausible('newsletter subscribe bot');
						} else {
							/* @ts-ignore */
							plausible('newsletter subscribe valid');
						}
					} else {
						reason = 'There was an error. Please try again.';
						status = 'error';
						/* @ts-ignore */
						plausible('newsletter subscribe invalid');
						focus();
					}
				})
				.catch((error) => {
					reason = 'There was an error. Please try again.';
					console.error('Error:', error);
					status = 'error';
					/* @ts-ignore */
					plausible('newsletter subscribe error');
					focus();
				});
		} else {
			reason = 'Enter a valid email.';
			status = 'error';
			if(!email) {
				/* @ts-ignore */
				plausible('newsletter subscribe empty');
			} else {
				/* @ts-ignore */
				plausible('newsletter subscribe malformed');
			}
			focus();
		}
	}

	onMount(() => {
		const emailInput = document.getElementById('newsletter-email') as HTMLInputElement;
		emailInput.addEventListener('keyup', (event) => {
			if (event.key === 'Enter') subscribe();
		});
	});

	type Status = 'idle' | 'pending' | 'success' | 'error';
	let status: Status = $state('idle');
	let reason = $state('');
	let email: string | undefined = $state(undefined);
	let password: string | undefined = $state(undefined);

	let { alt = false, id = '' }: { alt?: boolean; id?: string } = $props();
</script>

<div class="container" class:alt>
	{#if status === 'error'}
		<div class="absolute -top-5 left-0 right-0 text-center text-base font-bold text-[#ff4646]">
			<p>
				{#if reason}
					{reason}
				{:else}
					Something went wrong. Please try again.
				{/if}
			</p>
		</div>
	{/if}
	<form autocomplete="off">
		<input
			class:error={status === 'error'}
			class="email"
			aria-label="Newsletter"
			type="email"
			id="newsletter-{id}email"
			placeholder={status !== 'success' ? 'Enter your email...' : "We'll notify you.  :)"}
			bind:value={email}
		/>
		<input
			type="text"
			id="newsletter-{id}password"
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
				meterStroke="stroke-r-midnight-300"
			/>
		{:else}
			Subscribed!
		{/if}
	</button>
</div>

<style lang="postcss">
	.container {
		@apply relative mt-5 flex h-min w-full max-w-[325px] items-center justify-center;
	}
	.container input {
		@apply w-full bg-r-midnight-blue py-3.5 pl-3 pr-[135px] text-white;
	}
	.container.alt input {
		@apply bg-r-midnight-300;
	}
	.container.alt input::placeholder {
		@apply text-[--borderSilver];
	}
	.container input.email.error {
		@apply !border-solid !border-[#ff4646] border-opacity-70;
	}
	.container input.email:focus {
		@apply border-solid border-transparent !bg-r-midnight-100;
		box-shadow: 0 0 0 1px var(--midnight7);
	}

	button :global(figure) {
		@apply animate-spin;
	}
	button {
		width: 122px;
		height: 40.8px;
		@apply absolute right-[5px] my-auto flex justify-center rounded-lg2 font-bold;
		@apply bg-r-midnight-600 py-2 text-white hover:bg-r-midnight-700;
	}
	.alt button {
		@apply hover:bg-r-gold-2;
	}
	button:active {
		@apply scale-[0.98];
	}
	.container .email {
		@apply w-full rounded-xl !border-[1px] border-transparent !outline-none;
	}
</style>
