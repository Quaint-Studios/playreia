<script>
	import { socials } from '$lib/info';
	import GitHub from 'svelte-material-icons/Github.svelte';
	import Facebook from 'svelte-material-icons/Facebook.svelte';
	import Instagram from 'svelte-material-icons/Instagram.svelte';
	import Twitter from 'svelte-material-icons/Twitter.svelte';
	import Pinterest from 'svelte-material-icons/Pinterest.svelte';
	import YouTube from 'svelte-material-icons/Youtube.svelte';

	export let hide_nav = false;
</script>

<footer>
	<div class="social-icons p-4 md:p-10">
		<a href={socials.github}><GitHub title="GitHub" desc="Reia's GitHub Social"  /></a>
		<a href={socials.facebook}><Facebook title="Facebook" desc="Reia's Facebook Social"  /></a>
		<a href={socials.instagram}><Instagram title="Instagram" desc="Reia's Instagram Social"  /></a>
		<a href={socials.twitter}><Twitter title="Twitter" desc="Reia's Twitter Social"  /></a>
		<a href={socials.pinterest}><Pinterest title="Pinterest" desc="Reia's Pinterest Social" /></a>
		<a href={socials.youtube}><YouTube title="YouTube" desc="Reia's YouTube Social"  /></a>
	</div>
	{#if !hide_nav}
		<div class="info">
			<div class="game-info">
				<div class="font-bold">Game Info</div>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/blog">Blog</a></li>
					<li><a href="/spirits">Spirits</a></li>
					<li><a href="/explore">Explore</a></li>
				</ul>
			</div>
			<div class="other-info">
				<div class="font-bold">Other Info</div>
				<ul>
					<li><a href="/press-kit">Press-Kit</a></li>
					<li><a href="/about">About Us</a></li>
					<li><a href="/contribute">Contribute</a></li>
				</ul>
			</div>
		</div>
	{/if}
	<div class="legal-info">
		<div>Copyright © 2023 Quaint Studios</div>
		<div>
			<a href="/terms-and-conditions">Terms & Conditions</a> |
			<a href="/privacy-policy">Privacy Policy</a>
			| <a href="/cookies">Cookies</a>
		</div>
	</div>
</footer>

<style>
	footer {
		@apply w-full mt-16;
	}

	footer .social-icons {
		@apply w-full flex gap-5 justify-center items-center bg-primary-900 text-2xl;
	}

	footer .info {
		@apply w-full flex gap-16 justify-center items-start bg-primary-600 p-16 pt-10;
	}

	footer .legal-info {
		@apply w-full flex justify-between items-center bg-primary-600 py-5 px-16 border-t-[1px] border-[rgba(0,0,0,0.2)];
	}
</style>
