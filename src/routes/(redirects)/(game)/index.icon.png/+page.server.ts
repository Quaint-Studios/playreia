import { redirect } from '@sveltejs/kit';

export function load({ setHeaders }) {
	setHeaders({
		'Content-Type': 'image/png'
	});

	return redirect(
		302,
		'https://nq0cnjludn.ufs.sh/f/21j63lqspySPMHmCSdnzNcqyCnZgGrBUOtv51ix79pVP8wa0'
	);
}
