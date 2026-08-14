import { json, error } from '@sveltejs/kit';
import { PLUNK_API_KEY } from '$env/static/private';
import { validateEmail } from '$utils';

export interface PlunkVerifyResponse {
	success?: boolean;
	data?: {
		email: string;
		valid: boolean;
		isDisposable: boolean;
		isAlias: boolean;
		isTypo: boolean;
		isPlusAddressed: boolean;
		isPersonalEmail: boolean;
		domainExists: boolean;
		hasWebsite: boolean;
		hasMxRecords: boolean;
		suggestedEmail?: string | null;
		reasons: string[];
	};
}

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

	const cleanEmail = email.trim().toLowerCase();

	if (!validateEmail(cleanEmail)) {
		error(400, 'Invalid email');
	}

	if (!PLUNK_API_KEY) {
		console.warn('PLUNK_API_KEY is not configured. Falling back to development success.');
		return json({ status: 'ok', dev: true }, { status: 201 });
	}

	// Plunk Email Verification
	try {
		const verifyResponse = await fetch('https://next-api.useplunk.com/v1/verify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${PLUNK_API_KEY}`
			},
			body: JSON.stringify({ email: cleanEmail })
		});

		if (verifyResponse.ok) {
			const verifyResult = (await verifyResponse.json()) as PlunkVerifyResponse;

			if (verifyResult.data) {
				if (
					!verifyResult.data.valid ||
					verifyResult.data.isDisposable ||
					!verifyResult.data.domainExists ||
					!verifyResult.data.hasMxRecords
				) {
					const reason = verifyResult.data.reasons?.[0] || 'Invalid email address';
					error(400, reason);
				}
			}
		}
	} catch (err) {
		if (err && typeof err === 'object' && 'status' in err && 'body' in err) {
			throw err;
		}
		console.error('Error verifying email with Plunk:', err);
	}

	// Save / Upsert Contact in Plunk
	const body = JSON.stringify({
		email: cleanEmail,
		subscribed: true
	});

	const result = await fetch('https://next-api.useplunk.com/contacts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${PLUNK_API_KEY}`
		},
		body
	});

	const data = await result.json();

	if (!result.ok) {
		console.error('Plunk contact creation error:', data);
		error(500, 'An error occurred while subscribing to the newsletter');
	}

	return json(undefined, { status: 201 });
};
