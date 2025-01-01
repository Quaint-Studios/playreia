<script lang="ts">
	import Link from '$components/core/Link.svelte';
</script>

<Link label="Home" href="/" --color="var(--light)">
	<div class="flex items-center justify-center">
		<enhanced:img
			class="m-auto h-[64px] w-[64px] aspect-square lg:m-[unset] grow shrink-0"
			src="$images/logos/reia_logo_white_transparent.png?enhanced&w=184;168"
			alt="Reia Logo White Transparent"
			title="Reia"
			sizes="(min-width: 768px) 84px, 92px"
		/>
		<div class="mx-4 hidden h-11 border-r-2 border-solid md:block"></div>
		<span class="hidden text-2xl md:block">Reia</span>
	</div>
</Link>
