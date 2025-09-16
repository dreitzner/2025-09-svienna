<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	let { ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={['green-triangle flex aspect-square items-center text-2xl text-white mt-3', rest.class]}
></div>

<style>
	.green-triangle {
		width: 0px;
		height: 0px;
		border-style: solid;
		border-width: 0 120px 174px 120px;
		border-color: transparent transparent var(--color-green-700) transparent;
		position: relative;
	}
	.green-triangle:before, .green-triangle:after {
		position: absolute;
		inset: 0;
		background: transparent;
		text-align: center;
	}
	.green-triangle:before {
		content: 'green';
		top: 75px;
		left: -35px;
	}
	.green-triangle:after {
		content: 'triangle';
		top: 105px;
		left: -42px;
	}
</style>
