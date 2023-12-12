<script>
	import Logo from 'svelte-material-icons/Apple.svelte';
	import PlatformChip from './PlatformChip.svelte';
</script>

<PlatformChip>
	<Logo slot="icon" size="3.25rem" />
	<span slot="label">
		<p class="minorLabel">Download for</p>
		<p class="majorLabel">Mac</p>
	</span>
</PlatformChip>
