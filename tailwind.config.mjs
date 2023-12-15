/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#fc5413',
				secondary: '#8D4CA8',
				background: '#331e1f',
				'background-secondary': '#2a201e',
				text: '#fff6e6'
			}
		},
	},
	plugins: [],
}
