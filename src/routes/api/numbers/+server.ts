import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { wait } from '$lib/utils';

export const GET: RequestHandler = async() => {
    await wait(3_000)
	const random1 = Math.floor(Math.random() * 100);
	const random2 = Math.floor(Math.random() * 100);
	const random3 = Math.floor(Math.random() * 100);
	const random4 = Math.floor(Math.random() * 100);
	const random5 = Math.floor(Math.random() * 100);
	const random6 = Math.floor(Math.random() * 100);
	const random7 = Math.floor(Math.random() * 100);
	const random8 = Math.floor(Math.random() * 100);
	const random9 = Math.floor(Math.random() * 100);

	return json([
        String(random1),
        String(random2),
        String(random3),
        String(random4),
        String(random5),
        String(random6),
        String(random7),
        String(random8),
        String(random9),
    ]);
};