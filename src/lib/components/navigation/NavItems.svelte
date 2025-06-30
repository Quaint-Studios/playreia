<script lang="ts">
	import listData from './ListData';
	import DownSmalllFill from '~icons/mingcute/down-small-fill';

	interface Props {
		isOpen?: boolean;
	}

	let { isOpen }: Props = $props();
</script>

<div class="nav-items">
	<div class="nav-items-container" class:open={isOpen} role="menubar">
		{#each listData as { name, href, children }}
			<div class="nav-link">
				<a aria-label="{name} Page" role="menuitem" {href}>
					<span class="w-full drop-shadow-lg">{name.toUpperCase()}</span>
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

<style lang="postcss">
	@reference '$appcss';

	.nav-items {
		@apply grow font-bold;
	}

	.nav-items-container {
		@apply mdlg:h-full h-0 items-center gap-5 px-8 pt-0.5;
		@apply flex;

		@media (width < 928px) {
			@apply absolute top-full flex-col items-start overflow-hidden;
			@apply transition-[height_background-color] duration-[0.45s];
			@apply left-0 max-h-74 w-full bg-transparent;

			&.open {
				@apply h-dvh  p-4;
				@apply bg-r-midnight-blue/99 backdrop-blur-lg border-r-border-0.25 border-y-1;
			}
		}
	}

	.nav-link a {
		@apply text-base text-nowrap text-white no-underline;
		@apply flex items-center;

		@apply hover:text-r-gold-2;
	}
	.nav-link-child {
		@apply hidden;
	}
</style>
