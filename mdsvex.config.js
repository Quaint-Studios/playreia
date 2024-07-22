import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx', '.sveltex'],

  layout: {
    article: './src/articles/_layout.svelte',
    article_embed: './src/articles/_layout_embed.svelte'
  },

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
