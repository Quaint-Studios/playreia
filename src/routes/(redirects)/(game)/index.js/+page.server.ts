import { redirect } from '@sveltejs/kit';

export function load({ setHeaders }) {
	setHeaders({
		'Content-Type': 'application/javascript'
	});

	return redirect(
		302,
		// 'https://nq0cnjludn.ufs.sh/f/21j63lqspySPJUUAqDSnKw6Jr8ufSNTR29PAFWChGgXvex4q'
		'https://cdn.jsdelivr.net/gh/playreia/reiajs/index.js'
	);
}
