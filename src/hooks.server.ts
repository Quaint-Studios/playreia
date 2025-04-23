import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { paraglideMiddleware } from '$lib/paraglide/server';
const handlePreload: Handle = ({ event, resolve }) =>
	resolve(event, {
		preload: ({ type }) => type === 'font' || type === 'js' || type === 'css'
	});
const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%lang%', locale)
		});
	});
export const handle: Handle = sequence(handlePreload, handleParaglide);
