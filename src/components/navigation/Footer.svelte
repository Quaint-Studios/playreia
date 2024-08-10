<script lang="ts">
	import { Socials, SocialsIcons } from '$lib/info';

	import { navShown } from '$lib/stores';
	import Icon from '@iconify/svelte';

  export let navbar = false;
</script>

<footer>
	<div class="social-icons p-4 md:p-10">
		<a href={Socials.github}
			><Icon title="Github" desc="Reia's GitHub Social Icon" icon={SocialsIcons.github} /></a
		>
		<a href={Socials.facebook}
			><Icon title="Facebook" desc="Reia's Facebook Social Icon" icon={SocialsIcons.facebook} /></a
		>
		<a href={Socials.instagram}
			><Icon
				title="Instagram"
				desc="Reia's Instagram Social Icon"
				icon={SocialsIcons.instagram}
			/></a
		>
		<a href={Socials.twitter}
			><Icon title="Twitter" desc="Reia's Twitter Social Icon" icon={SocialsIcons.twitter} /></a
		>
		<a href={Socials.pinterest}
			><Icon
				title="Pinterest"
				desc="Reia's Pinterest Social Icon"
				icon={SocialsIcons.pinterest}
			/></a
		>
		<a href={Socials.youtube}
			><Icon title="YouTube" desc="Reia's YouTube Social Icon" icon={SocialsIcons.youtube} /></a
		>
	</div>
	{#if !$navShown && !navbar}
		<div class="info">
			<div class="game-info">
				<div class="font-bold">Game Info</div>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/blog">Blog</a></li>
					<li><a href="/spirits">Learn</a></li>
				</ul>
			</div>
			<div class="other-info">
				<div class="font-bold">Other Info</div>
				<ul>
					<li><a href="/press-kit">Press-Kit</a></li>
					<li><a href="/about-us">About Us</a></li>
					<li><a href="/contribute">Contribute</a></li>
					<li><a href="/contact">Jobs</a></li>
				</ul>
			</div>
		</div>
	{/if}
	<div class="legal-info">
		<div>Copyright © 2023-2024 Quaint Studios</div>
		<div>
			<a href="/terms-and-conditions">Terms & Conditions</a> |
			<a href="/privacy-policy">Privacy Policy</a>
			| <a href="/cookies">Cookies</a>
		</div>
	</div>
</footer>

<style lang="postcss">
	footer {
		@apply w-full mt-0 ml:mt-16;
	}

	footer .social-icons {
		@apply w-full flex gap-5 justify-center items-center bg-primary-900 text-2xl;
	}

	footer .info {
		@apply w-full flex gap-16 justify-center items-start bg-primary-600 p-16 pt-10;
		@apply text-lg ml:text-base;
	}

	footer .legal-info {
		@apply w-full flex flex-col ml:flex-row justify-between items-center;
		@apply bg-primary-600 border-t-[1px] border-[rgba(0,0,0,0.2)];
		@apply py-5 md:px-16;
	}

	.game-info li,
	.game-info li a,
	.other-info li,
	.other-info li a {
		@apply py-1 ml:py-0;
	}
</style>
