import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import cspDirectives from './csp-directives.mjs';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: {
				home: path.join(process.cwd(), './src/lib/layouts/Home.layout.svelte'),
				legal: path.join(process.cwd(), './src/routes/(legal)/legal.svelte'),
			},
		})
	],

	compilerOptions: {
		// runes: true
	},

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			runtime: 'nodejs22.x'
		}),
		alias: {
			$appcss: './src/app.css',
			$constants: './src/lib/constants',
			$components: './src/lib/components',
			$stores: './src/lib/stores',
			$utils: './src/lib/utils',
			$images: './src/lib/images',
			'$blog-categories': './src/routes/(blog-categories)',
			$routes: './src/routes',
		}
		// csp: {
		// 	mode: 'hash',
		// 	directives: cspDirectives
		// }
	},

	extensions: ['.svelte', '.svx']
};

export default config;
