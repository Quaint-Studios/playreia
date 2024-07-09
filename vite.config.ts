import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		paraglide({ project: './project.inlang', outdir: './src/lib/paraglide' }),
		enhancedImages(),
		sveltekit(),
		purgeCss()
	]
});
