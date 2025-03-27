import { redirect } from '@sveltejs/kit';

export function load({ setHeaders }) {
	setHeaders({
		'Content-Type': 'application/wasm'
	});

	return redirect(
		302,
		'https://nq0cnjludn.ufs.sh/f/21j63lqspySPgWwCJlcVMuZfNHnsywBESQm6x7p34htrW0bP'
	);
}
