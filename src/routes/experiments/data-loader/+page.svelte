<script lang="ts">
	import DataLoader from '$lib/component/DataLoader.svelte';

	let promise = $state<Promise<string[]>>();
	function setPromise() {
		promise = new Promise(async (resolve) => {
			const response = await fetch('/api/numbers');
			const json = response.json();
			resolve(json);
		});
	}
</script>

{#snippet children({ data }: { data: string[] })}
	<div class="grid columns-2">
		{#each data as item, index}
			<span>{index + 1}. {item}</span>
		{/each}
	</div>
{/snippet}

<button onclick={setPromise}>Load Data</button>
{#if promise}
	<DataLoader {promise} {children} />
{/if}
