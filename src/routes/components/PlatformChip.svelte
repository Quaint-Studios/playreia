<script>
	import WindowsLogo from 'svelte-material-icons/MicrosoftWindows.svelte';
	import AppleLogo from 'svelte-material-icons/Apple.svelte';
	import LinuxLogo from 'svelte-material-icons/Linux.svelte';
	import XboxLogo from 'svelte-material-icons/MicrosoftXbox.svelte';
	import PSLogo from 'svelte-material-icons/SonyPlaystation.svelte';
	import SwitchLogo from 'svelte-material-icons/NintendoSwitch.svelte';
	import SteamLogo from 'svelte-material-icons/Steam.svelte';

	/** @type {'Windows'|'Mac'|'Linux'|'XBOX'|'PS4'|'PS5'|'PS4&5'|'Switch'|'Steam'|'Epic Games'|'GOG GALAXY'|'PlayStore'|'AppStore'} */
	export let platform;

	/** */
	let icon;

	switch (platform) {
		case 'Windows':
			icon = WindowsLogo;

		case 'Mac':
    case 'AppStore':
			icon = AppleLogo;


		case 'Linux':
			icon = LinuxLogo;

		case 'XBOX':
			icon = XboxLogo;

		case 'PS4':
		case 'PS5':
		case 'PS4&5':
			icon = PSLogo;

		case 'Switch':
			icon = SwitchLogo;

		case 'Steam':
			icon = SteamLogo;
    
    case 'PlayStore':


	}
</script>
