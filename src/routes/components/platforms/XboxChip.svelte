<script>
	import Logo from 'svelte-material-icons/MicrosoftXbox.svelte';
	import PlatformChip from './PlatformChip.svelte';
</script>

<PlatformChip>
	<Logo slot="icon" size="3.25rem" />
	<span slot="label">
		<p class="minorLabel">Download on</p>
		<p class="majorLabel">XBOX X/S</p>
	</span>
</PlatformChip>
