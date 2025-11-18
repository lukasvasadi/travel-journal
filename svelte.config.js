import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-vercel'

// Markdown enhanced image library @ https://github.com/lzinga/mdsvex-enhanced-images
// import enhancedImage from '@lzinga/mdsvex-enhanced-images'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svelte.md', '.md', '.svx']
	// remarkPlugins: [
	// 	[
	// 		enhancedImage,
	// 		{
	// 			// Optional: Attributes to add to **all** `img` tags
	// 			attributes: {
	// 				fetchpriority: 'auto', // Browser's default
	// 				loading: 'eager', // Browser's default
	// 				decoding: 'auto', // Browser's default
	// 			}
	// 		}
	// 	]
	// ]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: { adapter: adapter() }
}

export default config
