export function wait(ms = 1) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}