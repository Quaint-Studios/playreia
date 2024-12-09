import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			boxShadow: {
				'boxed': '0px 4px 28px rgba(180,190,205,.28)',
			  }
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
