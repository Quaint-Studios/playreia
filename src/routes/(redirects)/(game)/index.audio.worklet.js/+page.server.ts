import { redirect } from '@sveltejs/kit';

export function load({ setHeaders }) {
	setHeaders({
		'Content-Type': 'application/javascript'
	});

	return redirect(
		302,
		// 'https://nq0cnjludn.ufs.sh/f/21j63lqspySP1FnDEw0oAdQ64rK37ejxaUXMCguLqWNE51Dy'
		'https://cdn.jsdelivr.net/gh/playreia/reiajs/index.audio.worklet.js'
	);
}
