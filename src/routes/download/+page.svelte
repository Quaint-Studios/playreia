<script lang="ts">
	import Meta from '$components/seo/Meta.svelte';
	import alinks from '$constants/alinks';
	import { ProgressRing } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';

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
	title="Reia - Download the Game and Unlock your Magical Adventure"
	titleSuffix=""
	keywords={'reia, contribute, contribute to reia, open-source, open-source contributor, open-source contribution, open-source project, open-source development, open-source community, open-source software, open-source game, open-source game development, open-source game design, open-source game art, open-source game writing, open-source game programming, open-source game developer, open-source game designer, open-source game artist, open-source game writer, open-source game programmer, open-source game development community, open-source game design community, open-source game art community, open-source game writing community, open-source game programming community, open-source game developer community, open-source game designer community, open-source game artist community, open-source game writer community, open-source game programmer community'}
	description="Contribute to Reia's development. Whether you're a programmer, artist, designer, or writer, there's a place for you in the Reia community."
>
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Download Reia",
				"url": "https://www.playreia.com/download"
			}
		</script>
	{/snippet}
</Meta>

<div class="game newsletter">
	<div class="bg"></div>
	<span>Get notified</span>
	<h1>Get <strong>Reia Newsletter</strong> for an Adventure</h1>
	<div class="container">
		<form autocomplete="off">
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

	<h2>Download right now</h2>
	<p>
		You can download the game right now by visiting the <a
			href={alinks.github + '/releases'}
			target="_blank"
			rel="noopener">releases page on GitHub</a
		>. We're always looking for feedback and suggestions. If you have any, please feel free to
		<a href="/contact">contact us</a>
		or chat with us on <a href={alinks.discordMsg}>Discord</a>. The platforms we immediately support
		are Windows, Linux, and Android but we will be adding iOS and MacOS support as soon as we can.
		The limiting factor is the cost of the Apple Developer Program and the hardware to test on. The
		same goes for consoles.
	</p>
</div>

<style lang="postcss">
	h2 {
		@apply mt-12;
	}
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
