<script lang="ts">
	import goal from '$lib/assets/sqare-hole.png'
	import LazyComponentLoader from '$lib/component/LazyComponentLoader.svelte';
	let dropdown = $state('PinkSquare');
</script>

<h1>Lazy components</h1>
<div class="grid grid-cols-2 gap-4">
	<div>
		<select bind:value={dropdown} class="mt-2 mb-5 h-14 min-w-28 rounded border border-current px-4" id="component-loader-selector">
			<option value="PinkSquare">PinkSquare</option>
			<option value="BlueCircle">BlueCircle</option>
			<option value="GreenTriangle">GreenTriangle</option>
			<option value="RedSemicircle">RedSemicircle</option>
			<option value="what?">jibberish</option>
		</select>

		<LazyComponentLoader componentName={dropdown} />
	</div>
	<div class="pt-21"><img src={goal} alt="Square hole"></div>
</div>

