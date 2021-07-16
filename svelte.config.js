import { windi } from 'svelte-windicss-preprocess';
import WindiCSS from 'vite-plugin-windicss';
import vercel from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [windi({})],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel()
	}
};

export default config;
