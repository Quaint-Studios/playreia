<script>
	import Logo from 'svelte-material-icons/NintendoSwitch.svelte';
	import PlatformChip from './PlatformChip.svelte';

	/**
	 * @type {String | undefined}
	 */
	export let href;
</script>

<PlatformChip {href}>
	<Logo slot="icon" size="3.25rem" />
	<span slot="label">
		<p class="minorLabel">Get it on the</p>
		<p class="majorLabel">Switch</p>
	</span>
</PlatformChip>
