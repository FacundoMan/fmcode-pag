/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors:{  
			transparent: 'transparent',
			current: 'currentColor',
			verde:"#28A745",
			violeta:{
				1:'#693167',
				2:'#4f254d',
				3:'#341833',
				4:'#1a0c1a'
			},
			celeste:'#00BFB2'
		},
	backgroundImage: {
			'imagen-1': "url('/programacion.webp')",
			'footer-texture': "url('/img/footer-texture.png')",
		  },
	},
		
		
	},
	plugins: [],
}
