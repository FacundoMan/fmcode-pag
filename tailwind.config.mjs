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
				1:'#564D8C',
				2:'#6F428C',
				3:'#8C2786',
				4:'#73294C'
			},
			celeste:'#00BFB2',
			blanco1:'#F2F2F2',
			amarillo:'#FFFB01'
		},
	backgroundImage: {
			'imagen-1': "url('/programacion.webp')",
			'footer-texture': "url('/img/footer-texture.png')",
		  },
	},
		
		
	},
	plugins: [],
}
