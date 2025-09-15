<script lang="ts">
	import { onMount } from 'svelte';

	import Reveal from 'reveal.js';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Notes from 'reveal.js/plugin/notes/notes';

	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/black.css';
	import 'reveal.js/plugin/highlight/monokai.css';
	import SlidePoints from '$lib/component/SlidePoints.svelte';

	import logo from '$lib/images/svelte-logo.svg';
	import kids from '$lib/assets/kids.png';
	import woom from '$lib/assets/woom.avif';
	import svienna from '$lib/assets/svienna.png';
	import SlideCover from '$lib/component/SlideCover.svelte';
	import SlideCode from '$lib/component/SlideCode.svelte';

	onMount(async () => {
		const deck = new Reveal({
			plugins: [Markdown, Highlight, Notes],
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
			// controls: false,
			// progress: false,

			center: false,
			disableLayout: true,
		});

        // @ts-ignore
		const svleteHighlight = await import('highlightjs-svelte');
		deck.initialize({
			highlight: {
				beforeHighlight: (hljs) => svleteHighlight.default(hljs),
			},
		});
	});
</script>

<div class="reveal">
	<div class="slides h-screen px-20 py-10">
		<SlideCover>
			<h1 class="fragment flex items-center justify-center gap-15">
				Async <img src={logo} class="h-25 animate-spin" alt="SvelteKit" />
			</h1>
		</SlideCover>
		<SlideCover>
			<h1 class="flex items-center justify-center gap-15">
				Async <span class="flex items-center"
					><img src={logo} class="h-25" alt="SvelteKit" />velte</span
				>
			</h1>
		</SlideCover>
		<SlidePoints
			phonetic="huːs"
			description="whois is a query and response protocol"
			headline="#me"
			points={[
				{ text: 'Husband and father of 4 kids', image: kids },
				{ text: 'From robotics to the web' },
				{ text: 'Web enthusiast @woom', image: woom },
				{ text: 'Musician' },
				{ text: 'Founder of Svelte Society Vienna', image: svienna },
			]}
		/>
		<SlidePoints
			phonetic="ɛkˈspleɪn"
			description="make an idea clear to someone"
			headline="Why and how?"
			points={[
				{ text: 'Top level await' },
				{ text: 'Async $derived' },
				{ text: 'Even in markup' },
				{ text: '<svelte:boundary>' },
				{ text: 'Experimental until Svelte 6', image: logo },
			]}
		/>
		<SlideCode
			phonetic="kənˌfɪɡjʊˈreɪʃn"
			description="an arrangement of parts or elements in a particular form, figure, or combination"
			headline="svelte.config.js"
			language="js"
			>{`import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: { adapter: adapter() },
};

export default config;`}</SlideCode
		>
		<SlideCode
			phonetic="kənˌfɪɡəˈreɪʃn,kənˌfɪɡjʊˈreɪʃn"
			description="an arrangement of parts or elements in a particular form, figure, or combination"
			headline="svelte.config.js"
			lineNumbers="8-12"
			language="js"
			>{`import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: { adapter: adapter() },
	compilerOptions: {
		experimental: {
			async: true
		}
	}
};

export default config;`}</SlideCode
		>
		<!-- basic code -->
		<SlideCode
			phonetic="ˈbeɪsɪk"
			description="forming an essential foundation or starting point"
			headline="Basic example"
			>{`<svelte:boundary>
	<AsyncStuff />

	{#snippet pending()}
		<p>loading...</p>
	{/snippet}
</svelte:boundary>`}</SlideCode
		>
		<!-- Possibilities -->
		<SlidePoints
			phonetic="ˌpɒsɪˈbɪlɪti"
			description="a thing that may happen or be the case"
			headline="What can we do with it?"
			points={[
				{ text: '🦖 Typed data loaders' },
				{ text: '⌛ Async component loader' },
				{ text: '🖼️ Image loader with blur' },
				{ text: '💭 Whatever you can imagine' },
			]}
		/>
	</div>
</div>
