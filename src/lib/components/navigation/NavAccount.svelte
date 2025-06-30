<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';
	import User3Fill from '~icons/mingcute/user-3-fill';

	interface Account {
		id: string;
		name: string;
	}

	let account: Account | undefined = $state(undefined);

	onMount(() => {
		const stored = localStorage.getItem('account');
		if (stored) {
			try {
				account = JSON.parse(stored);
			} catch (e) {
				account = undefined;
			}
		}
	});
	let isOpen = $state(false);
</script>

<button class="nav-account" onclick={() => (isOpen = !isOpen)} aria-label="Account and Settings">
	<User3Fill />

	<div class="dropdown" class:open={isOpen}>
		{#if account !== undefined}
			<div class="account-info">
				<span class="account-name">{account.name}</span>
				<span class="account-id">ID: {account.id}</span>
			</div>
			<button>
				Language: {getLocale()}
			</button>
		{/if}
	</div>
</button>

<style lang="postcss">
	@reference '$appcss';

	.nav-account {
		@apply relative;
		@apply text-r-white/90 text-xl no-underline;
		@apply m-0.5 rounded-2xl p-2.5;
		@apply hover:text-black-alt-600 hover:bg-r-white;
		@apply transition-[color_background-color];
	}
</style>
