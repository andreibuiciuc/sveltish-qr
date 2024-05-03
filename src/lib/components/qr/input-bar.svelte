<script lang="ts">
	import { cn } from "$lib/utils";
  import { createEventDispatcher } from 'svelte';
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import * as Select from "$lib/components/ui/select";

  export let disabled = false;
  const dispatch = createEventDispatcher();

  type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";
  interface State { 
    input: string, 
    correctionLevel: ErrorCorrectionLevel 
    isInputHovered: boolean
  } 

  let state = {
    input: "",
    correctionLevel: "M",
    isInputHovered: false
  } as State;

  $: selectedCorrectionLevel = state.correctionLevel ? {
    value: state.correctionLevel,
    label: getCorrectionLevelLabel(state.correctionLevel)
  } : undefined

  function onChange(event: any) {
    state.input = event.target.value;
  }
  
  function getCorrectionLevelLabel(lvl: ErrorCorrectionLevel) {
    switch (lvl) {
      case "L": return "Low";
      case "M": return "Medium";
      case "Q": return "Quartile";
      case "H": return "High";
    }
  }

  function emitSubmission() {
    dispatch('submit', state);
  }
</script>

<div class={cn("flex p-4 gap-x-2 w-full lg:w-1/2 transition-all duration-300", !disabled && state.isInputHovered ? "gap-x-4" : "")}>
  <Input 
    class="rounded-xl rounded-r-none h-12" 
    name="input"
    value={state.input}
    maxlength={255}
    {disabled}
    on:mouseenter={() => state.isInputHovered = true} 
    on:mouseleave={() => state.isInputHovered = false}
    on:input={onChange}
  />
  <Select.Root 
    selected={selectedCorrectionLevel}
    onSelectedChange={(v) => state.correctionLevel = v?.value ?? "M"}
    {disabled}
  >
    <Select.Trigger class={cn("w-[180px] h-full rounded-r-none rounded-l-none transition-all duration-300", state.isInputHovered ? 'mr-2' : '')}>
      <Select.Value placeholder="Error Corr Lvl" />
    </Select.Trigger>
    <Select.Content>
      <Select.Item value="L">Low</Select.Item>
      <Select.Item value="M">Medium</Select.Item>
      <Select.Item value="Q">Quartile</Select.Item>
      <Select.Item value="H">High</Select.Item>
    </Select.Content>
  </Select.Root>
  <Button 
    {disabled}
    class={cn("rounded-xl h-12 rounded-l-none transition-transform duration-300", !disabled && state.isInputHovered ? "scale-125" : "")}
    on:click={emitSubmission}
  >
    encode
  </Button>
</div>