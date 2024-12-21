<script lang="ts">
	import { socials } from '$lib/info';

	import Icon from '@iconify/svelte';
</script>

<div class="socials">
	{#each socials.slice(0, 6) as { id, icon, href }}
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
		@apply flex items-center justify-center gap-4;
        @apply pt-12 px-3;
	}

    .socials a:nth-child(1) {
        @apply hidden xs:block;
    }
    .socials a {
        @apply rounded-full bg-[--midnight4] p-3;
    }
    .socials a:hover {
        @apply bg-[--gold2];
    }
</style>
