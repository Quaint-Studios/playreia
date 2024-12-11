<script lang="ts">
	import Hamburger from './Hamburger.svelte';
	import UserMenu from './UserMenu.svelte';
	import Link from '$components/core/Link.svelte';
	import colors from '$lib/constants/colors';
	import Icon, { loadIcons } from '@iconify/svelte';
	import listData from './ListData';
	import NavBrand from './NavBrand.svelte';

	loadIcons(['solar:cart-4-bold', 'solar:calendar-date-bold']);
</script>

<div id="navbar" class="glass-light">
	<div class="nav-container">
		<div class="flex items-center justify-center">
			<NavBrand />
			<div class="hidden lg:flex">
				{#each listData as { name, href, children }}
					<Link {href} color={colors.light} hoverColor={colors.deepPurple} tight>
						
                        <div class="flex justify-center items-center gap-1">
                            {#if children}
                            <Icon icon="solar:alt-arrow-down-bold" />
                            {/if}
                            <span class="w-full">{name.toUpperCase()}</span>
                        </div>
					</Link>
				{/each}
			</div>
		</div>
		<div class="flex">
			<div class="hidden gap-2 lg:flex items-center">
				<Link
					href="/play"
					button
					primary
					backgroundColor={colors.primary}
					color={colors.light}
					hoverColor={colors.dark}
					--hover-color={colors.dark}
					roundness="large"
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
		@apply shadow-md;
		@apply fixed z-50 w-full;
	}

	.nav-container {
		@apply relative;
		@apply container mx-auto flex items-center justify-center md:justify-between;
		transition: max-width 0.1s ease-in-out;
	}
</style>
