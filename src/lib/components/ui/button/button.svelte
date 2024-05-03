<script>
// @ts-nocheck

	import { cn } from "$lib/utils.js";
	import { buttonVariants } from "./index.js";

	let className = undefined;
	export let variant = "default";
	export let size = "default";
	export { className as class };  
</script>

<button
	class={cn(buttonVariants({ variant, size, className }))}
	{...$$restProps}
	on:click
>
	<slot />
</button>
