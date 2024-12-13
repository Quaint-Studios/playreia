const rootDomain = process.env.VITE_DOMAIN; // or your server IP for dev

const cspDirectives = {
	'base-uri': ["'self'"],
	'child-src': ["'self'"],
	'connect-src': [
		"'self'",
		'ws://localhost:*',
		'https://*.playreia.com',
		'https://hcaptcha.com',
		'https://*.hcaptcha.com',
		'https://api.iconify.design',
		'https://api.simplesvg.com',
		'https://api.unisvg.com',
	],
	'img-src': ["'self'", 'data:'],
	'font-src': ["'self'", 'data:'],
	'form-action': ["'self'"],
	'frame-ancestors': ["'self'"],
	'frame-src': ["'self'", 'https://*.stripe.com', 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
	'manifest-src': ["'self'"],
	'media-src': ["'self'", 'data:'],
	'object-src': ["'none'"],
	'style-src': ["'self'", 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
	'default-src': [
		'self',
		...(rootDomain ? [rootDomain, `ws://${rootDomain}`] : []),
		'https://*.stripe.com'
	],
	'script-src': [
		'self',
		'https://*.playreia.com',
		'sha256-f5lsRfP9D3IfItCArg/eFPe3u1pBW1Uh5IahkioNYEA=',
		'https://*.stripe.com',
		'https://hcaptcha.com',
		'https://*.hcaptcha.com'
	],
	'worker-src': ["'self'"]
	// remove report-to & report-uri if you do not want to use Sentry reporting
	// 'report-to': ["'csp-endpoint'"],
	// 'report-uri': [
	// 	`https://sentry.io/api/${process.env.VITE_SENTRY_PROJECT_ID}/security/?sentry_key=${process.env.VITE_SENTRY_KEY}`
	// ]
};

export default cspDirectives;
