import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { enhancedImages } from '@sveltejs/enhanced-img';
import type { ViteDevServer } from 'vite';
import uploadthingFiles from './uploadthing.files.json';

/** @type {import('vite').Plugin} */
const viteServerConfig = () => ({
	name: 'add-headers',
	configureServer: (server: ViteDevServer) => {
		server.middlewares.use((req, res, next) => {
			switch (req.url) {
				case '/play':
					res.setHeader('Access-Control-Allow-Origin', 'https://site.cdn.playreia.com');
					res.setHeader('Access-Control-Allow-Methods', 'GET HEAD OPTIONS');
					res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
					res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
					break;
			}
			next();
		});
	},
	config: () => ({
		server: {
			proxy: uploadthingFiles.reduce((all, file) => {
				return { ...all, [`/${file.name}`]: 'https://site.cdn.playreia.com/' };
			}, {})
		}
	})
});

export default defineConfig({
	plugins: [
		enhancedImages(),
		tailwindcss(),
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale']
		}),
		Icons({ compiler: 'svelte' }),
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
