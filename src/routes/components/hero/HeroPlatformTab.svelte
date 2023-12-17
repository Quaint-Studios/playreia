<script>
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	/**
	 * @type {String}
	 */
	export let name;

	const MAX_COUNTDOWN = 15;
	let countdown = MAX_COUNTDOWN;
	/**
	 * @type {NodeJS.Timeout | null | undefined}
	 */
	let timer;
	$: {
		if (countdown === 0) {
			if (timer) {
				clearInterval(timer);
				timer = null;
			}
		}
	}
	onMount(() => {
		timer = setInterval(() => {
			countdown -= 1;
		}, 1000);
	});
</script>

<button class="relative" on:click={() => (countdown = 15)} on:transitionend>
	<p>{name}</p>
  ${}
	<span class="hero-platform-tab-selected"></span>
	<span in:slide class="hero-platform-tab-progress w-[{countdown}]"></span>
</button>

<style>
	.hero-platform-tab-selected {
		@apply absolute w-full left-0 bottom-0;
		@apply border-b-2 border-solid;
		height: 1px;
		border-color: rgba(255, 255, 255, 0.4);
	}

	.hero-platform-tab-progress {
		@apply absolute left-0 bottom-0;
		@apply border-solid;
		border-bottom-width: 3px;
		height: 1px;
		z-index: 2;
		border-color: rgba(255, 70, 70, 0.75);
	}
</style>
