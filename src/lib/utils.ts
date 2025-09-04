export function wait(ms = 1) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function lazyComponentLoader(componentName: string) {
	await wait(5000);
	if (componentName === 'PinkSquare')
		return (await import('$lib/component/PinkSquare.svelte')).default;
	if (componentName === 'BlueCircle')
		return (await import('$lib/component/BlueCircle.svelte')).default;
	return (await import('$lib/component/Fallback.svelte')).default;
}
