<script lang="ts">
	import { socials } from '$lib/info';

	import Icon from '@iconify/svelte';
</script>

<div class="socials">
	{#each socials as { id, icon, href }}
		<a
			{href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={id.charAt(0).toUpperCase() + id.slice(1)}
			class="unset"
		>
			<Icon {icon} color="white" class="text-xl" />
		</a>
	{/each}
</div>

<style lang="postcss">
	.socials {
		@apply flex max-w-[385px] flex-wrap items-center justify-center gap-4 mx-auto;
		@apply px-3 pt-12;
	}
	.socials a {
		@apply rounded-full bg-r-midnight-400 p-3;
	}
	.socials a:hover {
		@apply bg-r-gold-2;
	}
</style>
