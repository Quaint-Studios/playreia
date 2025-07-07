<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';
	import User3Fill from '~icons/mingcute/user-3-fill';

	interface Account {
		id: string;
		name: string;
	}

	let account: Account | undefined = $state({ id: '100000000', name: 'Makosai' });

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
	let localeOpen: boolean = $state(false);
	let closing: ReturnType<typeof setTimeout> | undefined;

	function onHover() {
		isOpen = true;
	}
	function onLeave() {
		isOpen = false;
		if (closing) {
			clearTimeout(closing);
		}
		closing = setTimeout(() => {
			if (isOpen) return;
			localeOpen = false;
		}, 300);
	}

	function onBlur() {
		// Check if current focus is a child of the nav items
		const navAccount = document.querySelector('.nav-account');

		if (!navAccount) {
			console.error("Couldn't find nav account.");
			return;
		}

		setTimeout(() => {
			console.log('onBlur called, checking active element');
			if (document.activeElement && navAccount.contains(document.activeElement)) {
				console.log(
					'active element is within nav account, not closing dropdown',
					document.activeElement
				);
				return;
			}
			console.log('active element is outside nav account, closing dropdown');

			onLeave();
		}, 0);
	}

	function openLocale() {
		localeOpen = true;
	}
</script>

<div
	class="nav-account"
	aria-label="Account and Settings"
	role="menubar"
	tabindex="0"
	aria-controls="dropdown-container"
	onmouseenter={onHover}
	onmouseleave={onLeave}
	onfocus={onHover}
	onblur={onBlur}
	class:open={isOpen}
>
	<User3Fill />
	<div class="dropdown-container" class:open={isOpen}>
		<div class="dropdown">
			{#if account !== undefined}
				<div class="menu-section !flex-row">
					<div class="profile-icon"></div>
					<div class="account-info">
						<span class="account-name">{account.name}</span>
						<span class="account-id">@{account.id}</span>
					</div>
				</div>
				<div class="menu-section">
					<a href="/profile" role="menuitem" aria-label="View Profile" onblur={onBlur}>
						View Profile
					</a>
					<a href="/profile/settings" role="menuitem" aria-label="Account Settings" onblur={onBlur}>
						Account Settings
					</a>
					<a
						href="/logout"
						role="menuitem"
						aria-label="Logout"
						onblur={onBlur}
						onclick={() => (account = undefined)}
					>
						Logout
					</a>
				</div>
			{:else}
				<div class="menu-section">
					<a href="/login" role="menuitem" aria-label="Login">Login</a>
					<a href="/register" role="menuitem" aria-label="Register">Register</a>
				</div>
			{/if}
			<div class="menu-section">
				<button role="menuitem" aria-label="Change Language" onclick={openLocale} onblur={onBlur}>
					Change Language
				</button>
			</div>

			{#if localeOpen}
				<div class="locale-dropdown">
					<ul>
						<li>
							<a href="?lang=en" class:selected={getLocale() === 'en'} onblur={onBlur}>English</a>
						</li>
						<li>
							<a href="?lang=fr" class:selected={getLocale() === 'fr'} onblur={onBlur}>Français</a>
						</li>
						<li>
							<a href="?lang=es" class:selected={getLocale() === 'es'} onblur={onBlur}>Español</a>
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	@reference '$appcss';

	@keyframes fadeOut {
		from {
			opacity: 1;
			visibility: visible;
		}
		to {
			opacity: 0;
			visibility: hidden;
		}
	}

	.nav-account {
		@apply relative;
		@apply text-r-white/90 text-xl no-underline;
		@apply m-0.5 rounded-2xl p-2.5;
		@apply hover:text-black-alt-600 hover:bg-r-white;
		@apply transition-[color_background-color];

		&.open {
			@apply !bg-r-white !text-black-alt-600;
		}

		.dropdown-container .dropdown .menu-section {
			@apply flex flex-col pb-2 !text-sm;

			+ .menu-section {
				@apply border-r-border-silver/35 border-t-1 pt-2;
			}

			a {
				@apply hover:text-black-alt-400 text-black-alt-600 no-underline;
			}

			a,
			button {
				@apply p-2 text-left font-medium;
				@apply border-blue-alt-600/75 hover:border-r-3;
				line-height: 1.25;
			}
		}

		.profile-icon {
			@apply bg-blue-alt-600 mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full;
			@apply text-lg font-bold text-white;

			&:before {
				content: 'M';
			}
		}

		.account-info {
			@apply flex flex-col;

			.account-name {
				@apply text-black-alt-600 text-md font-bold;
			}
			.account-id {
				@apply text-black-alt-400 text-xs;
			}
		}
	}

	.dropdown-container {
		@apply absolute top-full right-0 z-10;
		@apply not-mdlg:-right-16 transition-opacity duration-300;
		animation: fadeOut 0.3s ease-in-out forwards;

		&.open {
			animation: none;
			@apply !visible !opacity-100;
		}

		.dropdown {
			@apply shadow-float mt-2 bg-white p-2;
			@apply flex min-w-48 flex-col rounded-lg;
			@apply shadow-float border-r-border-silver border-1;

			span {
				@apply text-black-alt-600/80 text-sm;
			}
		}
	}
</style>
