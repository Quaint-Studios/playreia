import { json, error } from '@sveltejs/kit';
import { PLUNK_API_KEY } from '$env/static/private';
import { validateEmail } from '$utils';

export const POST = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string; // Honeypot field

    console.log(email, password);

    if (password) {
        // Bot detected
        return json({ status: 'ok', bot: true }, { status: 201 });
    }

    if (!email) {
        error(400, 'Missing email');
    }

    if (!validateEmail(email)) {
        error(400, 'Invalid email');
    }

    const body = JSON.stringify({
        "email": email,
        "subscribed": true
    });

    const result = await fetch("https://next-api.useplunk.com/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${PLUNK_API_KEY}`
        },
        body
    });

    const data = await result.json();

    if (!result.ok) {
        console.error(data);
        error(500, 'An error occurred while subscribing to the newsletter');
    }

    return json(undefined, { status: 201 });
};
