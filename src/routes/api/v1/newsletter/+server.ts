import { json, error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
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

	const plunkKey = env.PLUNK_API_KEY;
	const trackingKey = env.PLUNK_TRACKING_KEY;

	if (!plunkKey && !trackingKey) {
		console.warn('Plunk API key is not configured. Falling back to development success.');
		return json({ status: 'ok', dev: true }, { status: 201 });
	}

	// Plunk Email Verification
	if (plunkKey) {
		try {
			const verifyResponse = await fetch('https://next-api.useplunk.com/v1/verify', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${plunkKey}`
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
	}

	// Track event "newsletter.entry" in Plunk or fallback to /contact
	if (trackingKey) {
		const trackResponse = await fetch('https://next-api.useplunk.com/v1/track', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${trackingKey}`
			},
			body: JSON.stringify({
				email: cleanEmail,
				subscribed: true,
				event: 'newsletter.entry'
			})
		});

		const trackData = await trackResponse.json();

		if (!trackResponse.ok) {
			console.error('Plunk tracking error:', trackData);
			error(500, 'An error occurred while subscribing to the newsletter');
		}
	} else if (plunkKey) {
		const contactResponse = await fetch('https://next-api.useplunk.com/contacts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${plunkKey}`
			},
			body: JSON.stringify({
				email: cleanEmail,
				subscribed: true
			})
		});

		const contactData = await contactResponse.json();

		if (!contactResponse.ok) {
			console.error('Plunk contact creation error:', contactData);
			error(500, 'An error occurred while subscribing to the newsletter');
		}
	}

	return json(undefined, { status: 201 });
};
