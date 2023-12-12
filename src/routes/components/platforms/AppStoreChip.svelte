<script>
	import Logo from 'svelte-material-icons/Apple.svelte';
	import PlatformChip from './PlatformChip.svelte';
</script>

<PlatformChip>
	<Logo slot="icon" size="3.25rem" />
	<span slot="label">
		<p class="minorLabel">Download on the</p>
		<p class="majorLabel">App Store</p>
	</span>
</PlatformChip>
