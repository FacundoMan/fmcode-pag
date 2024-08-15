/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
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
		
	},
	plugins: [animations],
}
