export const prerender = false;

export function load({ setHeaders }) {
	setHeaders({
		'Content-Type': 'application/javascript'
	});
}
