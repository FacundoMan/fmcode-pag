/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors:{  
			transparent: 'transparent',
			current: 'currentColor',
			verde:"#28A745"
		}},
		backgroundImage: {
			'imagen-1': "url('/programacion.webp')",
			'footer-texture': "url('/img/footer-texture.png')",
		  },
		
	},
	plugins: [],
}
