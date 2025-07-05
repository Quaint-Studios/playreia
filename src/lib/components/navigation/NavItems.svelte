<script lang="ts">
	import listData from './ListData';
	import DownSmalllFill from '~icons/mingcute/down-small-fill';

	interface Props {
		isOpen?: boolean;
		toggle?: () => void;
	}

	let { isOpen, toggle }: Props = $props();
	let hoverIndex = $state(-1);
	function onHover(index: number) {
		console.log('hovered');
		hoverIndex = index;
		highlightLink();
	}

	function onLeave() {
		hoverIndex = -1;
		cleanHighlighter();
	}

	function onBlur() {
		// Check if current focus is a child of the nav items
		const navItems = document.querySelector('.nav-items');

		if (!navItems) {
			console.error("Couldn't find the navigation items container.");
			return;
		}

		setTimeout(() => {
			if (document.activeElement && navItems.contains(document.activeElement)) {
				// If it is, do not clean the highlighter
				console.log('active element is within nav items, not cleaning highlighter');
				return;
			}
			// If not, clean the highlighter
			console.log('active element is outside nav items, cleaning highlighter');

			hoverIndex = -1;
			cleanHighlighter();
		}, 0);
	}

	function highlightLink() {
		if (hoverIndex < 0 || hoverIndex >= listData.length) {
			cleanHighlighter();
			return;
		}
		// Set the highlighter position based on the hovered link
		const id = `nav-link-${listData[hoverIndex]?.name}`;
		const linkElement = document.getElementById(id);
		if (linkElement) {
			const highlighter = document.getElementById('nav-link-highlighter');
			if (highlighter) {
				highlighter.style.display = 'block';
				highlighter.style.width = `${linkElement.offsetWidth + 24}px`;
				highlighter.style.left = `${linkElement.offsetLeft - 6}px`;
				setTimeout(() => {
					highlighter.style.transition = '';
				}, 0);
			}
		}
	}

	function cleanHighlighter() {
		const highlighter = document.getElementById('nav-link-highlighter');
		if (highlighter) {
			highlighter.style.display = 'none';
			highlighter.style.width = '0';
			highlighter.style.left = '0';
			highlighter.style.transition = 'none'; // Disable transition for immediate effect
		}
	}
</script>

<div class="nav-items" onmouseleave={onLeave} role="menubar" tabindex="0">
	<div class="nav-items-outer" class:open={isOpen}>
		<div class="nav-items-inner">
			<div id="nav-link-highlighter" style={"transition: none"}></div>
			{#each listData as { name, href, children }, index}
				<div class="nav-link" id="nav-link-{name}">
					<a
						aria-label="{name} Page"
						role="menuitem"
						{href}
						onclick={toggle}
						onmouseover={() => onHover(index)}
						onfocus={() => onHover(index)}
						onblur={onBlur}
					>
						<span class="w-full drop-shadow-lg">{name}</span>
						{#if children}
							<DownSmalllFill class="shrink-0 text-2xl" />
						{/if}
					</a>
					{#if children}
						<div class="nav-link-child">
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

	#nav-link-highlighter {
		@apply bg-white/20 rounded-full -ml-2 hidden h-8 px-2 transition-[width,left] duration-300;
		@apply absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none;
	}

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
		@apply relative;
	}

	.nav-link {
		@apply flex items-stretch h-[40px];
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
