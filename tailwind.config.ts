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
		typography,
		forms,
		containerQueries,
		skeleton({
			themes: [themes.rose]
		})
	]
} satisfies Config;
