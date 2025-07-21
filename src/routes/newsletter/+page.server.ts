import { error, fail, type Actions } from '@sveltejs/kit';
import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';
import { validateEmail } from '$utils';

export const prerender = false; // Disable prerendering for this route

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string; // This is a honeypot field

		console.log(email, password);

		if (password) {
			// This is a bot
			return { status: 201 };
		}

		if(!email) {
			fail(400, { email, missing: true });
		}

		if (!validateEmail(email)) {
			fail(400, { email, invalid: true });
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
			return { status: 201 };
		}
	}
} satisfies Actions;
