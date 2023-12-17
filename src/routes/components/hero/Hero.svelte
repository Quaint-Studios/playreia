<script>
	import AppStoreChip from '../platforms/AppStoreChip.svelte';
	import LinuxChip from '../platforms/LinuxChip.svelte';
	import MacChip from '../platforms/MacChip.svelte';
	import PsChip from '../platforms/PSChip.svelte';
	import PlayStoreChip from '../platforms/PlayStoreChip.svelte';
	import SwitchChip from '../platforms/SwitchChip.svelte';
	import WindowsChip from '../platforms/WindowsChip.svelte';
	import XboxChip from '../platforms/XboxChip.svelte';
	import HeroPlatformTab from './HeroPlatformTab.svelte';

	const chipFlex = '';

  /**
   * @typedef {{
      show: boolean;
      showTab(data?: boolean): void;
      hideTab(): void;
      replay(): Promise<void>;
    }} TabDataType
  */

  /**
   * @type {{ Desktop?: TabDataType, Console?: TabDataType, Mobile?: TabDataType }}
   */
  const tabData = {}

  let currentTab = "Desktop"
  const platformTabs = {
    clicked(/** @type {String} */ selection) {
      console.log("I HAVE BEEN CLEEEEKED")
      for(let [key, value] of Object.entries(tabData)) {
        if(key != selection) {
          value.hideTab()
        }
      }

      switch(selection) {
        case "Desktop":
        case "Console":
        case "Mobile":
          currentTab = selection
          tabData[selection]?.showTab()
          console.log(selection)
          break;
      }
    },
    clickNext(/** @type {String} */ selection) {
      const choices = ["Desktop", "Console", "Mobile"]

      const found = choices.findIndex((elem) => elem == selection)

      if(found == -1) {
        return;
      }

      if(found == choices.length - 1) {
        platformTabs.clicked(choices[0])
      } else {
        platformTabs.clicked(choices[found + 1])
      }
    }
  }
</script>

<div id="hero-section">
	<div id="hero-content">
		<div class="flex flex-col gap-1 items-center">
			<div class="text-lg font-bold mb-4">
				<a href="/download">Released on all platforms - Play now!</a>
			</div>
      <div class="relative font-bold text-lg flex flex-row gap-10">
        <HeroPlatformTab value="Desktop" onClick={platformTabs.clicked} onNext={platformTabs.clickNext} bind:tabData={tabData.Desktop} starter={true} />
        <HeroPlatformTab value="Console" onClick={platformTabs.clicked} onNext={platformTabs.clickNext} bind:tabData={tabData.Console} />
        <HeroPlatformTab value="Mobile" onClick={platformTabs.clicked} onNext={platformTabs.clickNext} bind:tabData={tabData.Mobile} />
      </div>
			<div id="hero-chips" class:show-desktop={currentTab == "Desktop"} class="scale-[0.475] sm:scale-[0.6] md:scale-[0.70] lg:scale-75">
				<div id="desktop-chips" class="chip-flex">
					<WindowsChip />
					<MacChip />
					<LinuxChip />
				</div>
				<div id="console-chips" class="chip-flex">
					<XboxChip />
					<PsChip />
					<SwitchChip />
				</div>
				<div id="mobile-chips" class="chip-flex">
					<AppStoreChip />
					<PlayStoreChip />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#hero-section {
		@apply relative w-full h-4/5 min-h-[800px] bg-cover bg-center bg-no-repeat;
		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)),
			url('/rsc/img/hero_1.jpg?enhanced');
	}

	#hero-content {
		@apply relative w-full h-full flex justify-center items-end pb-10;
	}

	#hero-content {
	}

  #hero-content div.show-desktop #desktop-chips.chip-flex {
    display: flex;
  }

	#hero-content div .chip-flex {
		display: none;
	}

	.chip-flex {
		@apply mt-auto w-full max-w-[100vw] mb-1 grid grid-flow-col justify-center gap-10;
	}
</style>
