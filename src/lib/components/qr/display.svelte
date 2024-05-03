<script>
	import { cn } from "$lib/utils";

  /** @type {string[]} */
  export let encodedInput;

  /**
   * @param {number} module
   * @return {boolean}
   */
  function isModuleLighten(module) {
    return module === 0 || module === 2 || module === 4 || module === 5 || module === 7;
  }
  
</script>

<div class="flex flex-col p-4">
  {#each encodedInput as row, index (index)}
    <div class="flex">
      {#each row.split(' ') as bit}
        <div class={cn("h-4 w-4", isModuleLighten(+bit) ? 'bg-white' : 'bg-black')} />
      {/each}
    </div>
  {/each}
</div>
