<script lang="ts">
	import type { NavItem } from './ListData.ts';
	import Link from '$components/core/Link.svelte';
	import Icon, { loadIcons } from '@iconify/svelte';
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import { tick } from 'svelte';
	import UserMenu from './UserMenu.svelte';
	import NavBrand from './NavBrand.svelte';
	import MobileDropDown from './MobileDropDown.svelte';
	import { socials } from '$lib/info.js';

	interface Props {
		listData: NavItem[];
	}

	const { listData }: Props = $props();

	let drawerState = $state(false);

	function drawerOpen() {
		drawerState = true;
	}

	function drawerClose() {
		drawerState = false;
	}

	async function play(id: string) {
		await tick();

		Object.values(document.getElementById(id)!.getElementsByTagName('animate')).forEach((anim) => {
			anim.beginElement();
		});
	}

	loadIcons([...socials.slice(0, 6).map((s) => s.icon)]);
</script>

<button
	aria-label="Open Navigation Drawer"
	aria-expanded={drawerState}
	onclick={drawerOpen}
	id="hamburger"
>
	<Icon icon="solar:hamburger-menu-linear" font-size="24px" class="hover:text-[inherit]" />
</button>

<!--
Tips for Drawer modals:
- Use `contentBase` to set styles, incuding height/width
- Set justify-start to align to the left
- Clear the align and padding styles
- Use `positionerClasses` to set the
- Set transition.x values that matches content width in pixels
-->

<Modal
	open={drawerState}
	contentBase="pl-4 space-y-4 w-full h-dvh"
	positionerJustify="justify-start"
	transitionsPositionerIn={{ x: -480, duration: 200 }}
	transitionsPositionerOut={{ x: -480, duration: 100 }}
	transitionsBackdropIn={{ duration: 200 }}
	transitionsBackdropOut={{ duration: 100 }}
	backdropBackground="glass"
	contentBackground="bg-transparent"
>
	{#snippet content()}
		<div class="content">
			<header id="nav-header">
				<NavBrand />
				<div id="nav-header-right">
					<UserMenu />
					<button aria-label="Close Navigation Drawer" onclick={drawerClose} id="nav-close">
						<Icon icon="solar:close-circle-bold" font-size="48px" />
					</button>
				</div>
			</header>
			<div class="flex h-full flex-col overflow-y-auto">
				<article>
					<div role="menubar" class="ml-[-24px] flex flex-col">
						{#each listData as { name, href, children }}
							{#if children}
								<MobileDropDown id="mobilenav" {name} items={children} />
							{:else}
								<Link
									label="{name} Page"
									role="menuitem"
									{href}
									size="xlarge"
									--color="var(--light)"
									--hover-color="var(--gold)"
								>
									<span class={!children ? 'font-black' : undefined}>{name}</span>
								</Link>
							{/if}
						{/each}
					</div>
				</article>
				<footer>
					<div class="w-min">
						<Link
							label="Play now"
							href="/game"
							button
							primary
							size="large"
							roundness="large"
							--color="var(--light)"
							--hover-color="var(--buttonGray)"
							--bg-color="var(--blueHighlight)"
							--hover-bg-color="var(--gold2)"
						>
							<div class="flex justify-center gap-1">
								<Icon icon="solar:play-bold" />
								<span class="text-nowrap">Play now</span>
							</div>
						</Link>
					</div>
					<div class="socials">
						{#each socials.slice(0, 6) as { id, icon, href }}
							<a {href} target="_blank" rel="noopener" class="social unset">
								<Icon on:load={() => play(id)} id="h-{id}" {icon} color="white" font-size="24px" />
							</a>
						{/each}
					</div>
				</footer>
			</div>
		</div>
	{/snippet}
</Modal>

<style lang="postcss">
	@reference '$appcss';

	#hamburger {
		@apply absolute bottom-0 right-4 top-0 px-4 text-white hover:text-r-gold lg:hidden;
	}
	#nav-close {
		@apply text-r-light hover:text-r-gold;
	}
	.content {
		@apply flex h-full flex-col;
	}
	#nav-header {
		@apply absolute left-0 z-10 flex w-full items-center justify-between px-6;
	}
	#nav-header-right {
		@apply flex items-center justify-center gap-4;
	}
	article {
		@apply flex h-full min-h-[calc(100%-300px)] w-full flex-col overflow-y-auto pb-[165px] pt-[100px];
		mask-image:
			linear-gradient(
				to bottom,
				transparent 75px,
				black 100px,
				black calc(100% - 165px),
				transparent calc(100% - 140px)
			),
			linear-gradient(to right, transparent calc(100% - 20px), black calc(100% - 20px));
		-ms-overflow-style: -ms-autohiding-scrollbar; /* IE and Edge */
		scrollbar-width: thin; /* Firefox */
	}
	article::-webkit-scrollbar {
		@apply w-1;
	}
	footer {
		@apply absolute bottom-0 left-0 right-0 mx-auto flex w-full flex-col items-center justify-center py-4;
	}
	.socials {
		@apply flex flex-wrap justify-center gap-3 py-4;
	}
	footer .socials * {
		@apply rounded-lg2 bg-r-blue-highlight p-2 opacity-100 shadow-lg hover:bg-r-gold-2 hover:shadow-xl;
		transition: all 0.1s ease-in-out;
	}
</style>
