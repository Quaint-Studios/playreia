import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', contentPath(import.meta.url, 'svelte')],

	theme: {
		extend: {
			boxShadow: {
				boxed: '0px 4px 28px rgba(180,190,205,.28)'
			}
		}
	},

	plugins: [
		skeleton({
			// NOTE: each theme included will be added to your CSS bundle
			themes: [themes.rose]
		}),
		typography,
		forms,
		containerQueries
	]
} satisfies Config;
