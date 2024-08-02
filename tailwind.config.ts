import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { reia_theme } from './src/reia_theme';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {},
		screens: {
			xs: '320px',
			sm: '640px',
			md: '768px',
			ml: '860px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [reia_theme]
			}
		})
	]
} satisfies Config;
