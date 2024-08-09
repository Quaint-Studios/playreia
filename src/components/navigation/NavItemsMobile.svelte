<script lang="ts">
	import Icon, { loadIcons } from '@iconify/svelte';
	import navItems from './NavItemsData';
	import { navShown } from '$lib/stores';
	import { onMount } from 'svelte';

	// Preload Icons
	loadIcons(['mdi:chevron-down']);

	$: openId = -1;
	$: openSubId = -1;

	onMount(() => {
		navShown.subscribe((value) => {
			if (!value) {
				openId = -1;
				openSubId = -1;
			}
		});
	});

	function openTab(e: HTMLEvent<HTMLAnchorElement>, tabId: number, subTab = false) {
		if (subTab) {
			if (openSubId === tabId) {
				return true;
			} else {
				openSubId = tabId;
				e.preventDefault();
				return false;
			}
		} else {
			if (openId === tabId) {
				return true;
			} else {
				openSubId = -1;
				openId = tabId;
				e.preventDefault();
				return false;
			}
		}
	}
</script>

<div id="nav-mobile-container">
	<div id="nav-items-mobile" class={`nav-items${$navShown ? '' : ' !hidden'}`}>
		{#each navItems as { name, href, children }, i}
			<div class="nav-item" class:has-children={children !== undefined} data-opened={openId === i}>
				<a {href} on:click={children !== undefined ? (e) => openTab(e, i) : null}>
					{name}

					{#if children}
						<Icon icon="mdi:chevron-down" rotate={-45} class="text-on-primary-token" />
					{/if}
				</a>
				{#if children}
					<div class="nav-children">
						<div class="nav-frame glass">
							{#each children as { name, href, children: _children }, j}
								<div
									class="child-item"
									class:has-children={_children !== undefined}
									data-opened={openId == i && openSubId === j}
								>
									<a {href} on:click={_children !== undefined ? (e) => openTab(e, j, true) : null}>
										{name}

										{#if _children}
											<Icon icon="mdi:chevron-down" rotate={-45} class="text-on-primary-token" />
										{/if}
									</a>
									{#if _children}
										<div class="nav-children">
											<div class="nav-frame glass">
												{#each _children as { name, href }, k}
													<div class="child-item">
														<a {href}>{name}</a>
													</div>
												{/each}
											</div>
										</div>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<!--
	/* Item & Child Item */
	.nav-item,
	.nav-child {
		@apply relative flex items-center justify-center;
	}

	.nav-child {
		@apply relative;
	}



	/* Children and Frame */
	.nav-children {
		@apply rounded-xl p-2;
	}

	.nav-children {
		@apply absolute mt-2 z-50;
		@apply bg-gray-500 shadow-md;
		@apply flex flex-col;
		@apply flex-grow-0 flex-shrink-0 basis-full;
		@apply opacity-0 pointer-events-none;
		@apply transition-opacity duration-100 ease-in-out;
	}


	.nav-child .nav-children {
		@apply !bg-black;
	}

	.has-children:hover > .nav-children {
		@apply opacity-100 pointer-events-auto flex flex-col;
	}

	.nav-children a {
		@apply py-[0.15rem] px-4 w-full inline-block text-nowrap;
	} -->

<style lang="postcss">
	/** Nav Items */
	@media (max-width: 1024px) {
		.nav-items {
			@apply gap-0;
			@apply text-on-primary-token;
		}
	}
	.nav-items {
		@apply flex flex-col ml:hidden justify-start items-start gap-0 uppercase;
		@apply fixed top-[87px] left-0 pt-10;
		@apply text-2xl;
		@apply w-dvw h-[calc(100dvh-87px)];
		@apply bg-[#2971cf2a];
		@apply backdrop-filter backdrop-blur-[4px];
	}

	.nav-item,
	.child-item {
		@apply relative flex flex-col justify-start items-start text-nowrap;
	}
	.nav-item,
	.child-item {
		@apply w-full;
	}

	.nav-children {
		@apply w-full;
	}

	/** Nav Children */
	.nav-children a {
		@apply w-full py-4;
		@apply text-on-primary-token;
	}
	a {
		@apply flex items-center justify-start w-full pl-8 py-4;
		@apply transition-opacity duration-100 ease-in-out;
	}
	a:hover {
		/* @apply text-tertiary-400; */
		@apply opacity-50;
	}
	a:active {
		@apply !opacity-25 !text-on-primary-token;
	}

	.nav-children {
		@apply hidden;
		@apply top-full left-full z-50;
	}

	.has-children[data-opened='true'] > .nav-item-name a {
		@apply underline;
	}
	.has-children[data-opened='true'] > .nav-children {
		@apply flex flex-col justify-start items-start;
		@apply bg-[#220d54ee];
	}
	.has-children > a :global(svg) {
		@apply transform rotate-0;
		@apply transition-transform duration-100 ease-in-out;
	}
	.has-children[data-opened='true'] > a {
		@apply bg-[#220d54ff];
	}
	.has-children[data-opened='true'] > a :global(svg) {
		@apply !transform !rotate-180;
	}

	.child-item .nav-children {
		@apply left-full top-0;
	}

	.nav-frame {
		@apply relative;
		@apply text-on-secondary-token shadow-xl;
		@apply py-4;
		@apply w-full;
	}
	.nav-frame a {
		@apply !w-full pl-14;
	}
	.nav-frame .nav-frame a {
		@apply pl-20;
	}
</style>
