<script lang="ts">
	import { lazyComponentLoader } from '$lib/utils';
	import Button from './Button.svelte';
	import SkeltetonLoader from './SkeltetonLoader.svelte';

	const { componentName }: { componentName: string } = $props();

	let LazyComponentPromise = $state(lazyComponentLoader(componentName));
	let animate = $state(false);

	$effect(() => {
		if (componentName) {
			// @ts-expect-error undefined is not an expected value, but we guard against it 🛡️
			LazyComponentPromise = undefined;
			animate = false;
		}
	});
	$effect(() => {
		if (!LazyComponentPromise) LazyComponentPromise = lazyComponentLoader(componentName);
	});
</script>

{#if LazyComponentPromise}
	<svelte:boundary>
		{@const LazyComponent = await LazyComponentPromise}
		<div class:animate class="transition-all duration-700">
			<LazyComponent />
		</div>
		{#if !animate && componentName !== 'what?'}
			<Button onclick={() => (animate = true)} class="mt-4">Animate</Button>
		{/if}
		{#snippet pending()}
			<SkeltetonLoader />
		{/snippet}
	</svelte:boundary>
{/if}

<style>
	.animate {
		scale: 0.3;
		translate: 520px -16px;
		rotate: 9deg;
		opacity: 0;
	}
</style>
