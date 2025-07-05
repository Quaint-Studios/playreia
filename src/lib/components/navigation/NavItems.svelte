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
	}
</script>

<div class="nav-items">
	<div class="nav-items-outer" class:open={isOpen}>
		<div class="nav-items-inner"  onmouseleave={onLeave} role="menubar" tabindex="0">
			<div id="nav-link-highlighter" style={'transition: none'}></div>
			{#each listData as { name, href, children }, index}
				<div class="nav-link" id="nav-link-{index}" class:selected={hoverIndex === index}>
					<a
						aria-label="{name} Page"
						role="menuitem"
						{href}
						onclick={toggle}
						onmouseover={() => onHover(index)}
						onfocus={() => onHover(index)}
						onblur={onBlur}
					>
						<span class="nav-link-name">{name}</span>
						{#if children}
							<DownSmalllFill class="nav-link-arrow" />
						{/if}
					</a>
					{#if children}
						<div class="nav-link-child" class:hide={hoverIndex !== index} role="menu">
							<div class="nav-link-child-image">placeholder</div>
							{#each children as { name, href, description }}
								<div class="nav-link-child-item">
									<a aria-label="{name} Page" role="menuitem" {href} onblur={onBlur}>
										{name}
										<span>{description}</span>
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
		@apply -ml-2 hidden h-8 rounded-full bg-white/20 px-2 transition-[width,left] duration-300;
		@apply pointer-events-none absolute top-1/2 left-0 -translate-y-1/2;
		@apply not-mdlg:hidden;
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
		@apply relative w-fit;
	}

	.nav-link {
		@apply relative flex h-[40px] items-stretch;

		.nav-link-name {
			@apply w-full drop-shadow-lg;
		}

		:global(.nav-link-arrow) {
			@apply shrink-0 text-2xl;
		}
	}

	.nav-link a {
		@apply text-base text-nowrap text-white no-underline;
		@apply flex items-center rounded-full;
		@apply not-mdlg:px-6 not-mdlg:py-3.5;

		@apply hover:text-r-gold-2 not-mdlg:hover:bg-black/20;

		span {
			@apply not-mdlg:w-fit;
		}
	}
	.nav-link:hover .nav-link-child,
	.nav-link.selected .nav-link-child,
	.nav-link:focus .nav-link-child {
		@apply grid;
	}
	.nav-link-child {
		@apply absolute top-full -left-24 min-h-24 w-fit gap-2 rounded-xl bg-white p-4;
		@apply shadow-float border-r-border-silver hidden border-1;
		grid-template-columns: 10rem repeat(2, 2fr);
		grid-auto-rows: repeat(3, auto);

		&.hide {
			@apply !hidden;
		}

		.nav-link-child-item {
			@apply flex;

			a {
				@apply flex flex-col items-start rounded-lg p-1;
				@apply text-sm text-nowrap text-black/90 hover:text-blue-alt-600 no-underline;

				span {
					@apply text-xs font-normal text-inherit/75;
				}
			}
		}

		.nav-link-child-image {
			@apply col-span-1 row-span-4 aspect-square rounded-xl bg-black/5;
		}
	}
</style>
