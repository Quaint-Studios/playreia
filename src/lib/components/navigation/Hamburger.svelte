<script lang="ts">
	import type { NavItem } from './ListData.ts';
	import Link from '$components/core/Link.svelte';
	import Icon, { loadIcons } from '@iconify/svelte';
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import colors from '$lib/constants/colors';
	import { tick } from 'svelte';
	import UserMenu from './UserMenu.svelte';
	import alinks from '$lib/constants/alinks';
	import NavBrand from './NavBrand.svelte';
	import Button from '$components/core/Button.svelte';
	import MobileDropDown from './MobileDropDown.svelte';

	interface Props {
		listData: NavItem[];
	}

	const { listData }: Props = $props();

	const socials = [
		{ id: 'h-tiktok', icon: 'line-md:tiktok', href: alinks.tiktok },
		{ id: 'h-instagram', icon: 'line-md:instagram', href: alinks.instagram },
		{ id: 'h-facebook', icon: 'line-md:facebook', href: alinks.facebook },
		{ id: 'h-twitter', icon: 'line-md:twitter', href: alinks.twitter }
	];

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

	loadIcons([...socials.map((s) => s.icon)]);
</script>

<button
	aria-label="Open Navigation Drawer"
	aria-expanded={drawerState}
	onclick={drawerOpen}
	class="absolute bottom-0 right-4 top-0 px-4 text-white hover:text-[--deepPurple] lg:static lg:hidden"
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
	bind:open={drawerState}
	triggerBase="btn preset-tonal"
	contentBase="pl-4 space-y-4 w-full h-dvh"
	positionerJustify="justify-start"
	positionerAlign=""
	positionerPadding=""
	transitionsPositionerIn={{ x: -480, duration: 200 }}
	transitionsPositionerOut={{ x: -480, duration: 100 }}
	transitionsBackdropIn={{ duration: 200 }}
	transitionsBackdropOut={{ duration: 100 }}
	backdropBackground="glass"
	contentBackground="bg-transparent"
>
	{#snippet content()}
		<div class="content">
			<header class="absolute left-0 z-10 flex w-full items-center justify-between px-6">
				<NavBrand />
				<div class="flex items-center justify-center gap-4">
					<UserMenu />
					<button aria-label="Close Navigation Drawer" onclick={drawerClose}>
						<Icon
							icon="solar:close-circle-bold"
							font-size="48px"
							class="text-[--light] hover:text-[--deepPurple]"
						/>
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
									color={colors.light}
									hoverColor={colors.gold}
									size="xlarge"
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
							backgroundColor={colors.blueHighlight}
							color={colors.light}
							hoverColor={colors.buttonGray}
							--hover-color={colors.border}
							size="large"
							roundness="large"
						>
							<div class="flex justify-center gap-1">
								<Icon icon="solar:play-bold" />
								<span class="text-nowrap">Play now</span>
							</div>
						</Link>
					</div>
					<div class="socials">
						{#each socials as { id, icon, href }}
							<a {href} target="_blank" rel="noopener noreferrer" class="social unset">
								<Icon on:load={() => play(id)} {id} {icon} color="white" font-size="24px" />
							</a>
						{/each}
					</div>
				</footer>
			</div>
		</div>
	{/snippet}
</Modal>

<style lang="postcss">
	.content {
		@apply flex h-full flex-col;
	}
	article {
		@apply flex h-full min-h-[calc(100%-300px)] w-full flex-col overflow-y-auto pb-[165px] pt-[100px];
		mask-image: linear-gradient(
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
		@apply flex justify-center gap-3 py-4;
	}
	footer .socials * {
		@apply rounded-lg bg-[--blueHighlight] p-1 opacity-100 shadow-lg hover:opacity-70 hover:shadow-xl;
		transition: all 0.1s ease-in-out;
	}
</style>
