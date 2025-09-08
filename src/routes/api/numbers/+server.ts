import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { wait } from '$lib/utils';

export const GET: RequestHandler = async() => {
    await wait(3_000)
	const random1 = Math.floor(Math.random() * 100);
	const random2 = Math.floor(Math.random() * 100);
	const random3 = Math.floor(Math.random() * 100);

	return json([
        String(random1),
        String(random2),
        String(random3),
    ]);
};