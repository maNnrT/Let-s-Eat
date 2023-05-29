/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#151618',
				secondary: '#D08C30',
				666565: '#666565',
				f6e8d6: '#F6E8D6',
				444546: '#444546',
				394149: '#394149',
				'3d3535': '#3D3535',
				717171: '#717171',
				d0d0d0: '#D0D0D0',
				fdf9f5: '#FDF9F5',
				ac917d: '#AC917D',
				'4e4e4e': '#4e4e4e',
				fbfbfb: '#FBFBFB',
				cbcac9: '#CBCAC9',
				'5a5a5a': '#5A5A5A',
				ededed: '#EDEDED',
				767676: '#767676',
				'71655b': '#71655B',
				f6f5f4: '#F6F5F4',
				151618: '#151618',
				373838: '#373838',
				d2d0cf: '#D2D0CF',
				f6f4f3: '#F6F4F3',
				cfcfcf: '#CFCFCF',
				333231: '#333231',
				'2d2d2d': '#2D2D2D',
				333236: '#333236',
				b5b6b6: '#B5B6B6',
				d9d9d9: '#D9D9D9',
				e9e9e9: '#E9E9E9',
				aaa9a9: '#AAA9A9',
				fefefd: '#FEFEFD',
				726666: '#726666',
				ebe8e7: '#EBE8E7',
			},
			fontFamily: {
				fahkwang: ['Fahkwang', 'sans-serif'],
			},
			screens: {
				tablet: '768px',
				desktop: '1024px',
			},
			keyframes: {
				slide_in: {
					'0%': { opacity: 0.8, transform: 'translateY(8px)' },
					'10%': {
						opacity: 0.825,
						transform: 'translateY(7px)',
					},
					'25%': { opacity: 0.85, transform: 'translateY(6px)' },
					'50%': {
						opacity: 0.875,
						transform: 'translateY(5px)',
					},
					'60%': { opacity: 0.9, transform: 'translateY(4px)' },
					'70%': {
						opacity: 0.925,
						transform: 'translateY(3px)',
					},
					'80%': { opacity: 0.95, transform: 'translateY(2px)' },
					'90%': {
						opacity: 0.975,
						transform: 'translateY(1px)',
					},
					'100%': { opacity: 1, transform: 'translateY(0px)' },
				},
			},
			animation: {
				slide_in: '0.5s linear slide_in',
				
			},
		},
	},
	plugins: [],
};
