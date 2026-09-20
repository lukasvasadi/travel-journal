import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-vercel'
import remarkPictureImages from './src/lib/remark-picture-images.js'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svelte.md', '.md', '.svx'],
	remarkPlugins: [
		[
			remarkPictureImages,
			{
				// Attributes to add to every generated <Picture> / <img>
				attributes: {
					fetchpriority: 'auto', // Browser's default
					loading: 'eager', // Browser's default
					decoding: 'auto' // Browser's default
				}
			}
		]
	]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: { adapter: adapter() }
}

export default config
