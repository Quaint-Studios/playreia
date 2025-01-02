import { json, error } from '@sveltejs/kit';
import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';

interface NewsletterRequest {
	email: string;
	password: string;
}

export async function POST({ request }) {
	const { email, password }: NewsletterRequest = await request.json();

	console.log(email, password);

	if (password) {
		// This is a bot
		return json({}, { status: 201 });
	}

	const resend = new Resend(RESEND_API_KEY);

	const { error: err } = await resend.contacts.create({
		email: email,
		unsubscribed: false,
		audienceId: 'c406f97d-f16e-472e-9c31-8eb7fd1813ce' // Newsletter Audience ID
	});

	if (err) {
		console.error(err);
		error(500, { message: 'An error occurred while subscribing to the newsletter' });
	} else {
		return json({}, { status: 201 });
	}
}
