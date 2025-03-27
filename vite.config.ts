import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { enhancedImages } from '@sveltejs/enhanced-img';
import type { ViteDevServer } from 'vite';

/** @type {import('vite').Plugin} */
const viteServerConfig = () => ({
	name: 'add-headers',
	configureServer: (server: ViteDevServer) => {
		server.middlewares.use((req, res, next) => {
			switch (req.url) {
				case '/game':
					res.setHeader('Access-Control-Allow-Origin', '*');
					res.setHeader('Access-Control-Allow-Methods', 'GET');
					res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
					res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
					break;
			}
			next();
		});
	},
	config: () => ({
		server: {
			proxy: {
				"/index.wasm": "https://nq0cnjludn.ufs.sh/f/21j63lqspySPgWwCJlcVMuZfNHnsywBESQm6x7p34htrW0bP",
				"/index.side.wasm": "https://nq0cnjludn.ufs.sh/f/21j63lqspySP9YBMT5sn8CyYQSXNwHo4B2RMueigqxFvkA7K",
				"/index.png": "https://nq0cnjludn.ufs.sh/f/21j63lqspySPqACmKUMdSRobDvyIUx6jH1BtNh4iwcePm5ZL",
				"/index.pck": "https://nq0cnjludn.ufs.sh/f/21j63lqspySPLixHgQ2RCvFcGQmix5uYhs1BWqt6Hfd8wTVn",
				"/index.js": "https://cdn.jsdelivr.net/gh/playreia/reiajs/index.js",
				"/index.icon.png": "https://nq0cnjludn.ufs.sh/f/21j63lqspySPMHmCSdnzNcqyCnZgGrBUOtv51ix79pVP8wa0",
				"/index.audio.worklet.js": "https://cdn.jsdelivr.net/gh/playreia/reiajs/index.audio.worklet.js",
				"/index.audio.position.worklet.js": "https://cdn.jsdelivr.net/gh/playreia/reiajs/index.audio.position.worklet.js",
				"/index.apple-touch-icon.png": "https://nq0cnjludn.ufs.sh/f/21j63lqspySPnh9clnr7K4Y0RDi3ltTXQVBJdmrEuwFaN5S9"
			  }
		}
	}),
});

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		}),
		enhancedImages(),
		viteServerConfig()
	],

	test: {
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [svelteTesting()],

				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',

				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
