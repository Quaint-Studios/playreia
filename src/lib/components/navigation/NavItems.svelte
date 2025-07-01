<script lang="ts">
	import listData from './ListData';
	import DownSmalllFill from '~icons/mingcute/down-small-fill';

	interface Props {
		isOpen?: boolean;
		toggle?: () => void;
	}

	let { isOpen, toggle }: Props = $props();
</script>

<div class="nav-items">
	<div class="nav-items-outer" class:open={isOpen} role="menubar">
		<div class="nav-items-inner">
			{#each listData as { name, href, children }}
				<div class="nav-link">
					<a aria-label="{name} Page" role="menuitem" {href} onclick={toggle}>
						<span class="w-full drop-shadow-lg">{name}</span>
						{#if children}
							<DownSmalllFill class="shrink-0 text-2xl" />
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
</div>

<style lang="postcss">
	@reference '$appcss';

	.nav-items {
		@apply grow font-bold;
	}

	.nav-items-outer {
		@apply mdlg:h-full;

		@media (width < 928px) {
			@apply absolute top-full left-0 grid w-full;
			@apply overflow-hidden;
			grid-template-rows: 0fr;
			@apply border-r-border-0.25/0 transition-[grid-template-rows_background-color_border-color] duration-300;

			/* @apply absolute top-full left-0 grid h-0 overflow-hidden py-0 px-4;
			grid-template-rows: 0fr;
			@apply transition-[height_background-color_grid-template-rows] duration-[0.45s];
			@apply w-full border-y-1 border-transparent bg-transparent; */

			&.open {
				grid-template-rows: 1fr;
				@apply bg-r-midnight-blue/99 border-r-border-0.25 border-y-1 shadow-2xl backdrop-blur-lg;
			}
		}
	}

	.nav-items-inner {
		@media (width >= 928px) {
			@apply h-full;
			@apply flex items-center gap-5 px-8 pt-0.5;
		}

		@media (width < 928px) {
			@apply flex flex-col py-4;
		}

		min-height: 0;
	}

	.nav-link a {
		@apply text-base text-nowrap text-white no-underline;
		@apply flex items-center;
		@apply not-mdlg:px-6 not-mdlg:py-3.5;

		@apply hover:text-r-gold-2 not-mdlg:hover:bg-black/20;

		span {
			@apply not-mdlg:w-fit;
		}
	}
	.nav-link-child {
		@apply hidden;
	}
</style>
