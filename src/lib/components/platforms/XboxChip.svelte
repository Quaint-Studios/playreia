<script>
	import Logo from 'svelte-material-icons/MicrosoftXbox.svelte';
	import PlatformChip from './PlatformChip.svelte';

	/**
	 * @type {String | undefined}
	 */
	export let href;
</script>

<PlatformChip {href}>
	<Logo slot="icon" size="3.25rem" />
	<span slot="label">
		<p class="minorLabel">Download on</p>
		<p class="majorLabel">XBOX X/S</p>
	</span>
</PlatformChip>
