<script>
	import Logo from 'svelte-material-icons/SonyPlaystation.svelte';
	import PlatformChip from './PlatformChip.svelte';
</script>

<PlatformChip>
	<Logo slot="icon" size="3.25rem" />
	<span slot="label">
		<p class="minorLabel">Get it on</p>
		<p class="majorLabel">PS4 | PS5</p>
	</span>
</PlatformChip>
