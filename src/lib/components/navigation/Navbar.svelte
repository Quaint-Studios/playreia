<script lang="ts">
	import Hamburger from './Hamburger.svelte';
	import UserMenu from './UserMenu.svelte';
	import Link from '$components/core/Link.svelte';
	import colors from '$lib/constants/colors';
	import Icon from '@iconify/svelte';
	import listData from './ListData';
	import NavBrand from './NavBrand.svelte';

	import { onMount } from 'svelte';

	let atTop = $state(true);

	onMount(() => {
		atTop = window.scrollY === 0;

		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				atTop = false;
			} else {
				atTop = true;
			}
		});
	});
</script>

<div id="navbar" class:at-top={atTop} role="navigation">
	<div class="nav-container">
		<div class="nav-items">
			<NavBrand />
			<div role="menubar" class="hidden text-nowrap lg:flex">
				{#each listData as { name, href, children }}
					<div class="nav-link">
						<a aria-label="{name} Page" role="menuitem" {href}>
							<span class="w-full drop-shadow-lg">{name.toUpperCase()}</span>
							{#if children}
								<Icon icon="solar:alt-arrow-down-bold" class="shrink-0" />
							{/if}
						</a>
						{#if children}
							<div class="nav-link-child glass">
								{#each children as { name, href }}
									<div class="nav-link">
										<a aria-label="{name} Page" role="menuitem" {href}>
											{name}
										</a>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
		<div class="flex">
			<div class="hidden items-center gap-2 lg:flex">
				<Link
					label="Play now"
					href="/game"
					button
					primary
					backgroundColor={colors.blueHighlight}
					color={colors.white}
					hoverColor={colors.black}
					roundness="large"
					--color="var(--white)"
					--bg-color="var(--blueHighlight)"
					--hover-bg-color="var(--lightBlue)"
				>
					<div class="flex justify-center gap-1">
						<Icon icon="solar:play-bold" />
						<span class="w-full text-nowrap">Play now</span>
					</div>
				</Link>
				<UserMenu />
			</div>
			<Hamburger {listData} />
		</div>
	</div>
</div>

<style lang="postcss">
	#navbar {
		@apply fixed z-50 w-full;
		@apply py-4;
		@apply transition-[padding__backdrop-filter__border-color] duration-[0.45s];
		border-color: #ffffff00;
		backdrop-filter: blur(0px);
	}
	#navbar:not(.at-top) {
		@apply py-0;
		background-color: #00000020;
		@apply border-b-[1px] border-r-border-0.5 backdrop-blur-sm;
	}

	.nav-container {
		@apply relative;
		@apply mx-auto flex items-center justify-center md:justify-between;
		@apply max-w-[1820px] pr-4;
		transition: max-width 0.1s ease-in-out;
	}

	.nav-items {
		@apply flex flex-nowrap items-center justify-center;
	}

	.nav-link {
		@apply relative;
	}
	.nav-link a {
		@apply text-r-light hover:text-r-gold;
		@apply flex flex-nowrap items-center justify-center gap-1;
		@apply px-2.5 py-2 text-base;
		@apply font-bold;
		@apply no-underline;
		@apply transition-transform active:scale-95 active:opacity-85;
	}
	.nav-link .nav-link a {
		@apply px-5 justify-start;
	}

	.nav-link:hover .nav-link-child {
		@apply flex scale-100;
	}
	.nav-link-child {
		@apply absolute left-2 top-full flex-col;
		@apply rounded-lg2 border-[1px] !border-[--borderHalf];
		@apply origin-top scale-0 transition-transform;
	}

	.nav-link-child .nav-link > :global(a) {
		@apply w-full;
	}
</style>
