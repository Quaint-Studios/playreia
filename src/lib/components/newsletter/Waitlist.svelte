<script>
	import Countdown from './Countdown.svelte';
</script>

<div class="waitlist mx-auto md:max-width-lg text-center">
	<div class="countdown"><Countdown due={1704128400000} done="Next Testing is in February" /></div>
	<div class="form">
		<a
			href="https://zc.vg/IWnQL"
			class="btn border-primary-500/50 border-2 disabled:bg-primary-700 disabled:text-white/50 bg-primary-400 un-a text-on-primary-token text-2xl font-bold"
			>Notify Me</a
		>
	</div>
</div>

<style>
	.input-style {
		@apply placeholder-slate-200 bg-primary-500 text-on-primary-token pl-6;
	}

	.input-style[data-error] {
		@apply text-[rgb(var(--color-error-400))];
	}

	.waitlist {
		@apply flex flex-col justify-center items-center h-min mt-6;
	}

	.waitlist .countdown {
		@apply text-2xl font-bold mb-3;
	}

	.waitlist .form {
		@apply flex flex-row gap-2;
	}
</style>
