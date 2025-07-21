<script lang="ts">
	import listData from './ListData';
	import DownSmalllFill from '~icons/mingcute/down-small-fill';

	interface Props {
		isOpen: boolean;
		toggle: (val?: boolean) => void;
	}

	let { isOpen, toggle }: Props = $props();
	let hoverIndex = $state(-1);
	function onHover(e: MouseEvent | FocusEvent, index: number, isMobile: boolean = false) {
		e.stopPropagation();
		console.log('hovered');
		if (!isMobile && window.innerWidth < 928) return;
		if(isMobile && hoverIndex == index) {
			console.log('ba', hoverIndex);
			hoverIndex = -1;
			return;
		}
		console.log('bo', hoverIndex, index);
		hoverIndex = index;
		highlightLink();
	}

	function onLeave() {
		if (window.innerWidth < 928) return;
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
		const id = `nav-link-${hoverIndex}`;
		const linkElement = document.getElementById(id);
		if (linkElement) {
			const highlighter = document.getElementById('nav-link-highlighter');
			if (highlighter) {
				highlighter.style.display = 'block';
				highlighter.style.width = `${linkElement.offsetWidth + 24}px`;
				highlighter.style.left = `${linkElement.offsetLeft - 5}px`;
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
		toggle(false);
	}
</script>

<div class="nav-items">
	<div class="nav-items-outer" class:open={isOpen}>
		<nav class="nav-items-inner" onmouseleave={onLeave}>
			<div id="nav-link-highlighter" style={'transition: none'}></div>
			{#each listData as { name, href, children }, index}
				<div class="nav-link" id="nav-link-{index}" class:selected={hoverIndex === index}>
					<a
						aria-label="{name} Page"
						{href}
						onclick={() => toggle(false)}
						onmouseover={(e) => onHover(e, index)}
						onfocus={(e) => onHover(e, index)}
						onblur={onBlur}
						class:mobiletoo={!children}
					>
						<span class="nav-link-name">{name}</span>
						{#if children}
							<DownSmalllFill class="nav-link-arrow" />
						{/if}
					</a>
					{#if children}
						<button
							class="mobile-link"
							aria-label="{name} Page"
							onclick={(e) => onHover(e, index, true)}
						>
							<span class="nav-link-name">{name}</span>
							<DownSmalllFill class="nav-link-arrow" />
						</button>
						<div class="nav-link-child" class:hide={hoverIndex !== index}>
							<div class="nav-link-child-image"></div>
							{#each children as { name, href, description }}
								<div class="nav-link-child-item">
									<a aria-label="{name} Sub Page" {href} onblur={onBlur}>
										{name}
										<span>{description}</span>
									</a>
								</div>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</nav>
	</div>
</div>

<style lang="postcss">
	@reference '$appcss';

	#nav-link-highlighter {
		@apply -ml-2 hidden h-8 rounded-full bg-white/20 px-2 transition-[width,left] duration-300;
		@apply pointer-events-none absolute top-1/2 left-0 -translate-y-1/2;
		@apply not-mdlg:!hidden;
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

			@apply transition-[height_background-color_grid-template-rows] duration-[0.45s];
			@apply border-y-1 not-mdlg:border-none border-transparent bg-transparent;

			&.open {
				grid-template-rows: 1fr;
				@apply bg-r-midnight-blue/99 border-r-border-0.25 not-mdlg:border-solid border-y-1 shadow-2xl backdrop-blur-lg;

				.nav-items-inner {
					@apply not-mdlg:w-full py-4;
				}
			}
		}
	}

	.nav-items-inner {
		@media (width >= 928px) {
			@apply h-full;
			@apply flex items-center gap-5 px-8 pt-0.5;
		}

		@media (width < 928px) {
			@apply flex w-full flex-col py-0 transition-[padding] duration-500;
		}

		min-height: 0;
		@apply relative w-fit;
	}

	.nav-link {
		@apply relative flex not-mdlg:flex-col mdlg:items-stretch;

		.nav-link-name {
			@apply w-full drop-shadow-lg;
		}

		:global(.nav-link-arrow) {
			@apply shrink-0 text-2xl;
		}
	}

	.nav-link a {
		@apply not-mdlg:hidden flex;
	}
	.nav-link .mobile-link {
		@apply not-mdlg:flex hidden w-fit;
	}
	.nav-link.selected .mobile-link {
		@apply not-mdlg:text-r-gold-2;
	}
	.nav-link .mobiletoo {
		@apply !flex w-fit;
	}

	.nav-link a,
	.nav-link .mobile-link {
		@apply text-base text-nowrap text-white no-underline;
		@apply items-center rounded-full;
		@apply not-mdlg:px-6 not-mdlg:py-3.5;

		@apply hover:text-r-gold-2;

		span {
			@apply not-mdlg:w-fit;
		}
	}
	.nav-link:hover .nav-link-child,
	.nav-link.selected .nav-link-child,
	.nav-link:focus .nav-link-child {
		@apply grid not-mdlg:grid-cols-3 not-mdlg:w-full not-mdlg:border-none not-mdlg:min-h-fit not-mdlg:gap-y-0;
	}
	.nav-link-child {
		@apply mdlg:absolute top-[calc(100%+15px)] -left-24 min-h-24 w-fit gap-2 mdlg:rounded-xl mdlg:bg-white p-4;
		@apply shadow-float border-r-border-silver hidden border-1 not-mdlg:py-0;
		grid-template-columns: 10rem repeat(2, 2fr);
		grid-auto-rows: repeat(3, auto);

		&.hide {
			@apply !hidden;
		}

		.nav-link-child-item {
			@apply flex w-fit;

			a {
				@apply flex flex-col items-start rounded-lg p-1 not-mdlg:p-4;
				@apply hover:text-blue-alt-600 not-mdlg:hover:text-r-gold-2 not-mdlg:text-white text-sm text-nowrap text-black/90 no-underline;

				span {
					@apply text-xs font-normal text-inherit/75 not-mdlg:hidden;
				}
			}
		}

		.nav-link-child-image {
			@apply col-span-1 row-span-4 aspect-square rounded-xl bg-black/5;
			@apply not-mdlg:hidden;
		}
	}
</style>
