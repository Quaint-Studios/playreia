import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { i18n } from '$lib/i18n';
const handlePreload: Handle = ({ event, resolve }) =>
	resolve(event, {
		preload: ({ type }) => type === 'font' || type === 'js' || type === 'css'
	});
const handleParaglide: Handle = i18n.handle();
export const handle: Handle = sequence(handlePreload, handleParaglide);
