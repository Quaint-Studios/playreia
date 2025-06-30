<script lang="ts">
	import alinks from '$constants/alinks';
	import PlayFill from '~icons/mingcute/play-fill';
	import Discord from '~icons/mingcute/discord-fill';
	import NavAccount from './NavAccount.svelte';
</script>

<div class="nav-actions">
	<a href="/game" aria-label="Play game">
		<PlayFill />
	</a>
	<a href={alinks.discord} target="_blank" rel="noopener" aria-label="Join discord">
		<Discord />
	</a>
	<NavAccount />
</div>

<style lang="postcss">
	@reference '$appcss';

	.nav-actions {
		@apply flex items-center;

		a {
			@apply text-r-white/90 text-xl no-underline;
			@apply m-0.5 rounded-2xl p-2.5;
			@apply hover:text-black-alt-600 hover:bg-r-white;
			@apply transition-[color_background-color];
		}
	}

	:global(#navbar:not(.at-top)) .nav-actions a,
	:global(#navbar:not(.at-top) .nav-actions button) {
		@apply hover:bg-blue-alt-600 hover:text-white;
	}
</style>
