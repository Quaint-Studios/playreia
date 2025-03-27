import { redirect } from '@sveltejs/kit';

export function load({ setHeaders }) {
	setHeaders({
		'Content-Type': 'application/octet-stream'
	});

	return redirect(
		302,
		'https://nq0cnjludn.ufs.sh/f/21j63lqspySPLixHgQ2RCvFcGQmix5uYhs1BWqt6Hfd8wTVn'
	);
}
