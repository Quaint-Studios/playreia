<script lang="ts">
	import Meta from '$components/seo/Meta.svelte';
	import { ProgressRing } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';

	function subscribe() {
		if (status !== 'idle' && status !== 'error') return;
		status = 'pending';

		if (email) {
			const formData = new FormData();
			formData.append('email', email);
			if(password) formData.append('password', password);

			fetch(`/newsletter`, {
				method: 'POST',
				body: formData
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

	onMount(() => {
		const emailInput = document.getElementById('newsletter-page-email') as HTMLInputElement;
		emailInput.addEventListener('keyup', (event) => {
			if (event.key === 'Enter') subscribe();
		});
	});

	type Status = 'idle' | 'pending' | 'success' | 'error';
	let status: Status = $state('idle');
	let email: string | undefined = $state(undefined);
	let password: string | undefined = $state(undefined);
</script>

<Meta
	titlePrefix=""
	title="Reia Newsletter - Be a part of the Family and Adventure"
	titleSuffix=""
	keywords={'reia, newsletter, game, development, tests, family, waitlist, play, early, early access, early-access, updates, weekly, progress, notify, tests, releases'}
	description="Join the Reia newsletter and be a part of the family. Get notified of all the major development and tests we do here. Newsletter members are also added to a waitlist to play the game early."
>
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Join Reia's Newsletter to be a part of the Family and Adventure",
				"url": "https://www.playreia.com/newsletter",
				"potentialAction": {
					"@type": "SubscribeAction",
					"target": "https://www.playreia.com/newsletter",
					"description": "Subscribe to the Reia RPG Newsletter for a regular email newsletter with news and updates."
				}
			}
		</script>
	{/snippet}
</Meta>

<div class="newsletter">
	<div class="bg"></div>
	<span>Be a part of the family</span>
	<h1>Join the <strong>Reia Newsletter</strong> for an Adventure</h1>
	<div class="container">
		<form id="newsletter-page-form" autocomplete="off">
			<input
				class:error={status === 'error'}
				aria-label="Newsletter"
				type="email"
				id="newsletter-page-email"
				placeholder={status !== 'success' ? 'Your email...' : "We'll notify you.  :)"}
				bind:value={email}
				onsubmit={subscribe}
			/>
			<input
				type="text"
				id="newsletter-page-password"
				class="hidden"
				placeholder="Leave this field blank"
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
	<p>
		We'd love to include you in the <strong>game development of Reia</strong>. By subscribing to the
		newsletter, you can keep up to date with all of the major development and tests we do here. This
		also includes whenever we have special events. Newsletter members are also added to a waitlist
		to <strong>play the game early</strong>. We'll also send you <strong>weekly updates</strong> on the
		game's progress and notify you when we do tests and releases.
	</p>
</div>

<style lang="postcss">
	strong {
		@apply text-[--gold];
	}
	.newsletter {
		@apply relative flex h-dvh w-full flex-col items-center justify-center bg-[--midnight] px-3 py-12;
	}
	.newsletter > * {
		@apply z-10;
	}
	.newsletter .bg {
		@apply absolute z-0 h-[calc(100dvh-128px)] w-[calc(100dvw-64px)];
		@apply bg-transparent bg-contain bg-center bg-no-repeat opacity-5 sm:opacity-[3%];
		background-image: url('/images/backgrounds/magic-circle.svg');
	}

	span {
		@apply text-xl font-medium text-[--borderSilver];
	}
	h1 {
		@apply max-w-screen-md text-center text-4xl sm:text-5xl md:text-6xl;
	}
	p {
		@apply mt-6 max-w-screen-md text-center text-lg font-medium text-[--borderSilver] sm:text-xl;
	}

	.container {
		@apply relative mt-5 flex h-min w-full max-w-[325px] items-center justify-center;
	}

	.container input {
		@apply w-full bg-[--midnight3] py-3.5 pl-3 pr-[135px] text-white;
	}
	.container input::placeholder {
		@apply text-[--borderSilver];
	}
	.container input#newsletter-page-email.error {
		@apply !border-[1px] !border-solid !border-[#ff4646] border-opacity-70;
	}
	.container input#newsletter-page-email:focus {
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
		@apply bg-[--midnight6] py-2 text-white hover:bg-[--gold2];
	}
	button:active {
		@apply scale-[0.98];
	}
	.container #newsletter-page-email {
		@apply w-full rounded-xl !border-none !outline-none;
	}
</style>
