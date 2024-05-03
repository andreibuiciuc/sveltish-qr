<script>
	import { cn } from "$lib/utils.js";
  let className = undefined;

  /** @type {string} */
	export let value = "";
  /** @type {string} */
  export let name = "";
  /** @type {string} */
	export { className as class };
  /** @type {boolean} */
	export let readonly = false;
</script>

<input
	class={cn(
		"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-sm",
		className
	)}
	bind:value
	{readonly}
  {name}
	on:blur
	on:change
	on:click
	on:focus
	on:focusin
	on:focusout
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	on:input
	on:wheel
	{...$$restProps}
/>