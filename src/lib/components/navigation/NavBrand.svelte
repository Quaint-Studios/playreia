<script lang="ts">
	import Link from '$components/core/Link.svelte';

	import colors from '$constants/colors';
</script>

<Link href="/" color={colors.light}>
	<div class="flex justify-center items-center">
		<enhanced:img
			class="m-auto w-[64px] lg:m-[unset] lg:w-[px]"
			src="$images/logos/reia_logo_white_transparent.png?enhanced&w=184;168"
			alt="Reia Logo White Transparent"
			title="Reia"
			sizes="(min-width: 768px) 84px, 92px"
		/>
		<div class="mx-4 hidden h-11 border-r-2 border-solid md:block"></div>
		<span class="hidden md:block text-2xl">Reia</span>
	</div>
</Link>
