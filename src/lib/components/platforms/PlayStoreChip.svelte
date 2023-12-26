<script>
	import Logo from 'svelte-material-icons/GooglePlay.svelte';
	import PlatformChip from './PlatformChip.svelte';

	/**
	 * @type {String | undefined}
	 */
	export let href;
</script>

<PlatformChip {href}>
	<Logo slot="icon" size="3.25rem" />
	<span slot="label">
		<p class="minorLabel">Get it on</p>
		<p class="majorLabel">Google play</p>
	</span>
</PlatformChip>
