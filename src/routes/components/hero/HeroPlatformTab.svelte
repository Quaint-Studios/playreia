<script>
	import { onMount, tick } from 'svelte';
	import { slide } from 'svelte/transition';
  import  { quadIn } from 'svelte/easing';

	/**
	 * @type {String}
	 */
	export let value;
  export let onClick = (/** @type {string} */ _value) => {};
  export let onNext = (/** @type {string}*/ _value) => {};

  

	function progress(node, { duration = 8000, easing = quadIn }) {
    return {
			duration: duration,
			css: (/** @type {number} */ t) => {
        const eased = easing(t)
        return `width: ${100 * t}%`;
      }
		};
	}

  export let starter = false;

  /**
   * @typedef {{
      show: boolean;
      showTab(data?: boolean): void;
      hideTab(): void;
      replay(): Promise<void>;
    }} TabDataType
  */


  /**
   * @type {TabDataType}
   */
	export const tabData = {
    show: false,
    showTab(data = false) {
      console.log(`${value} shown | ${data} | ${tabData.show}`)
      if(tabData.show) {
        console.log("testy")
        tabData.replay();
        return;
      }
      tabData.show = true;
    },
    hideTab() {
      console.log(`${value} hidden`)
      tabData.show = false;
    },
		async replay() {
      console.log(`${value} replay`)
			tabData.show = false;
			await tick();
			tabData.show = true;
		}
	};
  
  onMount(() => {
    if(starter) {
      starter = false;
      tabData.showTab();
    }
  });
</script>

<button class="relative" on:click={() => onClick(value)}>
	<p>{value}</p>
	{#if tabData.show}
		<span class="hero-platform-tab-selected"></span>
		<span in:progress on:introend={() => onNext(value)} class="hero-platform-tab-progress w-0"></span>
	{/if}
</button>

<style>
	.hero-platform-tab-selected {
		@apply absolute w-full left-0 bottom-0;
		@apply border-b-2 border-solid;
		height: 1px;
		border-color: rgba(255, 255, 255, 0.4);
	}

	.hero-platform-tab-progress {
		@apply absolute left-0 bottom-0;
		@apply border-solid;
		border-bottom-width: 3px;
		height: 1px;
		z-index: 2;
		border-color: rgba(255, 70, 70, 0.75);
	}
</style>
