<script lang="ts">
	import Button from '$lib/component/Button.svelte';
	import DataLoader from '$lib/component/DataLoader.svelte';

	let promise = $state<Promise<string[]>>();
	function togglePromise() {
		if (promise) {
			promise = undefined;
			return;
		}
		promise = new Promise(async (resolve) => {
			const response = await fetch('/api/numbers');
			const json = response.json();
			resolve(json);
		});
	}

	const colorsPerIndex = [
		'bg-pink-200',
		'bg-blue-200',
		'bg-green-200',
		'bg-red-200',
		'bg-yellow-200',
		'bg-purple-200',
		'bg-fuchsia-200',
		'bg-orange-200',
		'bg-teal-200',
	];
</script>

{#snippet children({ data }: { data: string[] })}
	<div class="grid grid-cols-3 gap-4 text-4xl">
		{#each data as item, index}
			<span class={['aspect-3/2 content-center rounded-2xl text-center', colorsPerIndex[index]]}
				>{item}</span
			>
		{/each}
	</div>
{/snippet}

<Button onclick={togglePromise} class="mb-4">{promise ? 'Reset' : 'Load Important Data'}</Button>
{#if promise}
	<DataLoader {promise} {children} />
{/if}
