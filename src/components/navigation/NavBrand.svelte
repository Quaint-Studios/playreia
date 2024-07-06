<script lang="ts">
	import { sitename } from '$lib/info';
	import { navShown } from '$lib/stores';

	$: hideNav = () => ($navShown = false);
</script>

<a href="/" id="brand" class="un-a">
	<button id="brand-logo" on:click={hideNav}>
		<enhanced:img
			src="$assets/images/logos/reia_logo_white_transparent.png?enhanced&w=184;168"
			alt="Reia Logo White Transparent"
			title="Reia"
			sizes="(min-width: 768px) 84px, 92px"
		/>
	</button>
	<div class="hidden lg:block h-11 mx-4 border-r-2 border-solid" />
	<div id="brand-name">{sitename}</div>
</a>

<style>
	#brand {
		@apply flex justify-center items-center;
	}

	#brand-logo {
		@apply lg:w-[86px] w-[72px] m-auto lg:m-[unset];
	}

	#brand-name {
		@apply flex justify-start items-center mr-10;
		@apply hidden lg:block h3 ml-4;
	}
</style>
