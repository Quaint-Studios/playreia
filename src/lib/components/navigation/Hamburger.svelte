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

	loadIcons([
		'solar:hamburger-menu-linear',
		'solar:close-circle-bold',
		'solar:cart-4-bold',
		'solar:calendar-date-bold',
		...socials.map((s) => s.icon)
	]);
</script>

<button
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
	contentBase="p-4 space-y-4 w-[480px] h-dvh"
	positionerJustify="justify-center"
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
			<header class="absolute left-0 flex w-full items-center justify-between px-6">
				<NavBrand />
				<div class="flex items-center justify-center gap-4">
					<UserMenu />
					<button onclick={drawerClose}>
						<Icon
							icon="solar:close-circle-bold"
							font-size="48px"
							class="text-[--light] hover:text-[--deepPurple]"
						/>
					</button>
				</div>
			</header>
			<article>
				<div class="flex flex-col items-center justify-center">
					{#each listData as { name, href, children }}
						<Link {href} color={colors.light} hoverColor={colors.deepPurple} size="xlarge">
							<div class="flex justify-center gap-1">
								{#if children}
									<Icon icon="solar:alt-arrow-down-bold" />
								{/if}
								<span>{name}</span>
							</div>
						</Link>
					{/each}
				</div>
				<div class="mt-auto flex items-center justify-center gap-2">
					<Link
						href="/play"
						button
						primary
						backgroundColor={colors.blue}
						color={colors.light}
						hoverColor={colors.buttonGray}
						--hover-color={colors.border}
						size="large"
						roundness="large"
					>
						<div class="flex justify-center gap-1">
							<Icon icon="solar:play-bold" />
							<span>Play now</span>
						</div>
					</Link>
				</div>
			</article>
			<footer>
				{#each socials as { id, icon, href }}
					<a {href} target="_blank" rel="nofollow" class="social">
						<Icon on:load={() => play(id)} {id} {icon} color="white" font-size="24px" />
					</a>
				{/each}
			</footer>
		</div>
	{/snippet}
</Modal>

<style lang="postcss">
	.content {
		@apply flex h-full flex-col;
	}
	article {
		@apply flex h-full flex-col justify-between pt-32;
	}
	footer {
		@apply flex justify-center gap-3 py-4;
	}
	footer * {
		@apply rounded-lg bg-[--blue] p-1 opacity-100 shadow-lg hover:opacity-70 hover:shadow-xl;
		transition: all 0.1s ease-in-out;
	}
</style>
