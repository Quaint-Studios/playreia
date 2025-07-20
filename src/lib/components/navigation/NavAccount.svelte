<script lang="ts">
	import { page } from '$app/state';
	import {
		baseLocale,
		deLocalizeHref,
		deLocalizeUrl,
		getLocale,
		type Locale,
		setLocale
	} from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';
	import User3Fill from '~icons/mingcute/user-3-fill';
	import Back from '~icons/mingcute/back-fill';
	import { LOCALES } from '$lib/info';

	interface Account {
		id: string;
		name: string;
	}

	type Screens = 'main' | 'language';

	let account: Account | undefined = $state({ id: '100000000', name: 'Makosai' });
	let closeInterval: NodeJS.Timeout | undefined = undefined;
	let copyInterval: NodeJS.Timeout | undefined = $state(undefined);
	let currentScreen: Screens = $state('main');

	onMount(() => {
		const stored = localStorage.getItem('account');
		if (stored) {
			try {
				account = JSON.parse(stored);
			} catch (e) {
				account = undefined;
			}
		}

		return () => {
			window.removeEventListener('click', onClickOutside);
			window.removeEventListener('keydown', onClickOutsideKeydown);
		};
	});
	let isOpen = $state(false);

	function closeMenu() {
		isOpen = false;
		resetScreen();
	}
	function resetScreen() {
		if (closeInterval) clearTimeout(closeInterval);
		closeInterval = setTimeout(() => {
			currentScreen = 'main';
		}, 300);
	}
	function onClick() {
		isOpen = !isOpen;

		if (isOpen) {
			document.addEventListener('click', onClickOutside);
			document.addEventListener('keydown', onClickOutsideKeydown);
			if (closeInterval) {
				clearTimeout(closeInterval);
				closeInterval = undefined;
			}
		} else {
			document.removeEventListener('click', onClickOutside);
			document.removeEventListener('keydown', onClickOutsideKeydown);
			resetScreen();
		}
	}
	function onClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		const navAccount = document.getElementById('nav-account-container');
		if (navAccount && !navAccount.contains(target)) {
			closeMenu();
		}
	}
	function onClickOutsideKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeMenu();
		}
	}
	function openLocale() {
		setTimeout(() => {
			currentScreen = 'language';
		}, 0);
	}
	function goBack() {
		setTimeout(() => {
			currentScreen = 'main';
		}, 0);
	}

	function handleCopyAccountId(event: MouseEvent | KeyboardEvent) {
		event.stopPropagation();
		if (copyInterval) {
			clearTimeout(copyInterval);
		}
		navigator.clipboard.writeText(account!.id);
		const accountIdElement = event.currentTarget as HTMLElement;
		accountIdElement.classList.add('copied');
		copyInterval = setTimeout(() => {
			accountIdElement.classList.remove('copied');
		}, 2000);
	}
</script>

<div id="nav-account-container">
	<button
		id="nav-account-button"
		onclick={onClick}
		aria-label="Account and Settings"
		role="menubar"
		tabindex="0"
		aria-controls="nav-account-dropdown"
		class:open={isOpen}
	>
		<User3Fill />
	</button>
	<div id="nav-account-dropdown" class:open={isOpen}>
		<div class="nav-account-main">
			<div class:hidden={currentScreen !== 'main'}>
				{#if account}
					<div class="menu-section !flex-row">
						<div class="profile-icon"></div>
						<div class="account-info">
							<span class="account-name">{account.name}</span>
							<span
								class="account-id"
								tabindex="0"
								role="button"
								aria-label="Copy account ID"
								onclick={(e) => {
									e.stopPropagation();
									handleCopyAccountId(e);
								}}
								onkeydown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										handleCopyAccountId(e);
									}
								}}
							>
								@{account.id}
							</span>
						</div>
					</div>
					<div class="menu-section">
						<a href="/profile" role="menuitem" aria-label="View Profile" onclick={onClick}>
							View Profile
						</a>
						<a
							href="/profile/settings"
							role="menuitem"
							aria-label="Account Settings"
							onclick={onClick}
						>
							Account Settings
						</a>
						<a
							href="/logout"
							role="menuitem"
							aria-label="Logout"
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
					<button role="menuitem" aria-label="Change Language" onclick={openLocale}>
						Change Language
					</button>
				</div>
			</div>
			<div class:hidden={currentScreen !== 'language'}>
				<button class="back" role="menuitem" aria-label="Back to Main Menu" onclick={goBack}>
					<Back />
					<span>Back</span>
				</button>
				<div class="menu-section">
					{#each Object.keys(LOCALES) as key}
						<a
							href={'/' + (key === baseLocale ? '' : key)}
							onclick={() => {
								setLocale(key as Locale);
							}}
							class:selected={getLocale() === key}
						>
							{LOCALES[key as Locale]}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <div
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
				<div class="menu-section !flex-row" class:open={!localeOpen}>
					<div class="profile-icon"></div>
					<div class="account-info">
						<span class="account-name">{account.name}</span>
						<span class="account-id">@{account.id}</span>
					</div>
				</div>
				<div class="menu-section" class:open={!localeOpen}>
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
			<div class="menu-section" class:open={!localeOpen}>
				<button role="menuitem" aria-label="Change Language" onclick={openLocale} onblur={onBlur}>
					Change Language
				</button>
			</div>

			<div class="locale-dropdown" class:open={localeOpen}>
				<ul>
					<li>
						<a
							href="{deLocalizeUrl(page.url.pathname)}/en"
							class:selected={getLocale() === 'en'}
							onblur={onBlur}
						>
							English
						</a>
					</li>
					<li>
						<a href="/fr" class:selected={getLocale() === 'fr'} onblur={onBlur}>Français</a>
					</li>
					<li>
						<a href="/es" class:selected={getLocale() === 'es'} onblur={onBlur}>Español</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div> -->

<style lang="postcss">
	@reference '$appcss';

	@keyframes fadeOut {
		from {
			visibility: visible;
		}
		to {
			visibility: hidden;
		}
	}

	#nav-account-container {
		@apply relative;

		#nav-account-button {
			@apply text-r-white/90 text-xl;
			@apply m-0.5 rounded-2xl p-2.5;
			@apply hover:text-black-alt-600 hover:bg-r-white;
			@apply transition-[color_background-color];

			&.open {
				@apply bg-r-white text-black-alt-600;
			}
		}

		#nav-account-dropdown {
			@apply not-mdlg:-right-16 absolute top-full right-0;
			@apply transition-opacity duration-300;
			@apply shadow-float mt-2 bg-white p-2;
			@apply min-w-48 rounded-2xl opacity-0;
			animation: fadeOut 0.3s ease-in-out forwards;

			&.open {
				animation: none;
				@apply !visible !opacity-100;
			}

			.menu-section {
				@apply text-black-alt-600/80 text-sm;
				@apply flex flex-col pb-2;

				+ .menu-section {
					@apply border-r-border-silver/35 border-t-1 pt-2;
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

				a,
				button {
					@apply text-black-alt-600 no-underline;
					@apply p-2 text-left font-medium;
					@apply border-blue-alt-600/75 hover:border-r-3;
					line-height: 1.25;

					&.selected {
						@apply border-blue-alt-600/20 hover:border-blue-alt-600/75 border-r-3 font-bold;
					}
				}
			}

			button.back {
				@apply text-black-alt-600/60 hover:text-black-alt-600;
				@apply text-md flex items-center gap-1 px-1 py-3 text-left font-bold;
				line-height: 1.25;
			}
		}
	}
</style>
