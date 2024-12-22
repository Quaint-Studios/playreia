<script lang="ts">
	import Hamburger from './Hamburger.svelte';
	import UserMenu from './UserMenu.svelte';
	import Link from '$components/core/Link.svelte';
	import colors from '$lib/constants/colors';
	import Icon from '@iconify/svelte';
	import listData from './ListData';
	import NavBrand from './NavBrand.svelte';
</script>

<div id="navbar" class="glass-light" role="navigation">
	<div class="nav-container">
		<div class="flex flex-nowrap items-center justify-center">
			<NavBrand />
			<div role="menubar" class="hidden text-nowrap lg:flex">
				{#each listData as { name, href, children }}
					<div class="nav-link">
						<Link
							label="{name} Page"
							role="menuitem"
							{href}
							tight
							--color="var(--light)"
							--hover-color="var(--gold)"
						>
							<div class="flex flex-nowrap items-center justify-center gap-1">
								{#if children}
									<Icon icon="solar:alt-arrow-down-bold" />
								{/if}
								<span class="w-full drop-shadow-lg">{name.toUpperCase()}</span>
							</div>
						</Link>
						{#if children}
							<div class="nav-link-child glass">
								{#each children as { name, href }}
									<div class="nav-link">
										<Link
											label="{name} Page"
											role="menuitem"
											{href}
											--color="var(--light)"
											--hover-color="var(--gold)"
										>
											<div class="flex flex-nowrap items-center justify-center gap-1">
												<span class="w-full drop-shadow-lg">{name}</span>
											</div>
										</Link>
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
		@apply shadow-md;
		@apply fixed z-50 w-full;
	}

	.nav-container {
		@apply relative;
		@apply container mx-auto flex items-center justify-center md:justify-between;
		transition: max-width 0.1s ease-in-out;
	}

	.nav-link {
		@apply relative;
	}

	.nav-link:hover .nav-link-child {
		@apply flex scale-100;
	}
	.nav-link-child {
		@apply absolute left-2 top-full flex-col;
		@apply rounded-lg2 border-[1px] !border-[--borderHalf];
		@apply transition-transform scale-0 origin-top;
	}

	.nav-link-child .nav-link > :global(a) {
		@apply w-full;
	}
</style>
