import { redirect } from '@sveltejs/kit';

export function load({ setHeaders }) {
	setHeaders({
		'Content-Type': 'application/javascript'
	});

	return redirect(
		302,
		// 'https://nq0cnjludn.ufs.sh/f/21j63lqspySPnzPTcHr7K4Y0RDi3ltTXQVBJdmrEuwFaN5S9'
		'https://cdn.jsdelivr.net/gh/playreia/reiajs/index.audio.position.worklet.js'
	);
}
