<script lang="ts">
	import LazyComponentLoader from '$lib/component/LazyComponentLoader.svelte';
	import logo from '$lib/images/svelte-logo.svg';
	import { lazyComponentLoader, wait } from '$lib/utils';

	const title = $derived(wait(10000).then(() => 'Svelte'));

    let dropdown = $state('PinkSquare')
</script>

<div class="flex text-6xl gap-6">
	<span>Async</span>
	<svelte:boundary>
		{await title}
		{#snippet pending()}
			<img src={logo} class="animate-spin h-15" alt="SvelteKit" />
		{/snippet}
	</svelte:boundary>
</div>

lazy component
<!-- 
TODO:
Red Square
Red Rectangle
Red Thin Rectangle
zynlinder
SemiCircle
Triangle
Arch
-->

<!-- put into
         "square"         "Semicircle"
"circle" "thin rectangle" "triangle"
         "arch"
-->
<select bind:value={dropdown}>
    <option value="PinkSquare">PinkSquare</option>
    <option value="BlueCircle">BlueCircle</option>
    <option value="what?">jibberish</option>
</select>

<LazyComponentLoader componentName={dropdown} />


