import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {	
		adapter: adapter(), // currently the adapter does not take any options
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
	}
};

export default config;
