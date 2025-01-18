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
			fontSize: {
				'md': '0.9rem'
			},
			screens: {
				'xs': '375px'
			},
			boxShadow: {
				boxed: '0px 4px 28px rgba(180,190,205,.28)'
			},
			borderRadius: {
				'lg2': '0.625rem'
			},
			colors: {
				'r': {
					primary: '#7666c1',
					secondary: '#ffffff',
					tertiary: '#f9f3e5',
					success: '#77dd77',
					danger: '#ff6961',
					warning: '#ffd700',
					info: '#add8e6',
					link: '#b0c4de',

					border: {
						default: '#f4f4f4',
						"0.5": '#f4f4f480',
						"0.25": '#f4f4f440',
						"blue-0.5" : '#86c7f980',
						silver: '#d2d9e7'
					},

					silver: {
						dark: '#2b364c',
						light: '#94a2b7'
					},

					"gray": {
						text: '#808080',
						button: '#d3d3d3'
					},

					light: '#f0f8ff',
					dark: '#323232',
					white: '#ffffff',
					black: '#000000',
					"light-dark": '#424242',

					gold: '#fed18e',
					"gold-0.5": '#fed18ebb',
					"gold-2": '#fdbd5d',

					red: '#fc3c35',
					"crimson-red": '#ff4646bf',
					yellow: '#f9fc35',

					blue: {
						light: '#47aaf5',
						default: '#239af4',
						highlight: '#0b78cb',
						deep: '#0d47a1'
					},

					midnight: {
						blue: '#081247',
						"icon-bg": '#394690',
						100: '#101537',
						200: '#151b47',
						300: '#172569',
						400: '#1c2c7d',
						500: '#2b5073',
						600: '#39468e',
						700: '#4757b3'
					},

					purple: {
						deep: '#220d54',
						highlight: '#3a168d',
						"highlight-0.5": '#3a168d80'
					}
				}
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
