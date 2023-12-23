<script>
	import Logo from 'svelte-material-icons/MicrosoftWindows.svelte';
	import PlatformChip from './PlatformChip.svelte';
</script>

<PlatformChip>
	<Logo slot="icon" size="3.25rem" />
	<span slot="label">
		<p class="minorLabel">Download for</p>
		<p class="majorLabel">Windows</p>
	</span>
</PlatformChip>
