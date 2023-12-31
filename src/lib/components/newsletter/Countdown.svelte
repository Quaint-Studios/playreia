<script>
	import { getDHMS } from '$lib/utils';
	import { onMount } from 'svelte';

	/** @type {number} */
	export let due;
	/** @type {String} */
	export let done;

	/** @type {number | null | undefined} */
	let timer;
	/** @type {number} */
	let countdown = due - new Date().getTime();

	/**
	 * @type {{ seconds: string | number; days: string | number; hours: string | number; minutes: string | number; }}
	 */
	let dhms = getDHMS(due, new Date().getTime(), true);

	$: {
		if (countdown <= 0) {
			if (timer) {
				clearInterval(timer);
				timer = null;
			}
		}
	}
	onMount(() => {
		timer = setInterval(() => {
			countdown = due - new Date().getTime();
			dhms = getDHMS(due, new Date().getTime(), true);
		}, 1000);
	});
</script>

{#if countdown > 0}
	<span class="cd-text">{dhms.days} {dhms.hours} {dhms.minutes} and {dhms.seconds}</span>
{:else}
	<span class="cd-text">{done}</span>
{/if}

<style>
	.cd-text {
		@apply text-primary-700;
	}
</style>
