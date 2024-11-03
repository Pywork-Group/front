import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			'roboto-flex': ['var(--font-roboto-flex)', 'inherit'],
			'roboto-mono': ['var(--font-roboto-mono)', 'inherit'],
			'roboto-serif': ['var(--font-roboto-serif)', 'inherit'],
			inter: ['var(--font-inter)'],
		},
		colors: {
			white: colors.white,
			black: colors.black,
			transparent: colors.transparent,
			gray: {
				base: '#1D1D1D',
				800: '#211F20',
				600: '#454545',
				500: '#D2D2D2',
				400: '#D6D3D3',
				300: '#D9D9D9',
				200: '#E0E0E0',
				100: '#F1F1F1',
			},
			purple: {
				400: '#7b61ff',
			},
			red: {
				500: '#FF0000',
				400: '#E51314',
				300: '#F31559',
			},
			green: {
				400: '#00AC26',
				300: '#2EE89A',
			},
		},
		fontSize: {
			'sm-minus': '8px',
			sm: '9px',
			'sm-plus': '10px',
			'md-minus': '12px',
			md: '14px',
			'md-plus': '15px',
			base: '16px',
			lg: '18px',
			'2lg': '20px',
			'3lg': '24px',
			'4lg': '26px',
			'5lg': '28px',
			'6lg': '32px',
			'7lg': '36px',
			'8lg': '40px',
			big: '64px',
			biggest: '96px',
		},
		zIndex: {
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
		},
		extend: {
			lineHeight: {
				'sm-minus': '1.1',
				sm: '1.2',
				'sm-plus': '1.3',
				'md-minus': '1.4',
				md: '1.5',
				'md-plus': '1.6',
				lg: '1.7',
				'2lg': '1.8',
				'3lg': '1.9',
				'4lg': '2',
			},
			borderRadius: {
				sm: '5px',
				'sm-extra': '10px',
				md: '15px',
				'md-extra': '20px',
				lg: '25px',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			keyframes: {
				hide: {
					from: { opacity: '1' },
					to: { opacity: '0' },
				},
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: '0.3',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
				slideFromLeft: {
					'0%': {
						transform: 'translateX(-100%)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
				slideFromRight: {
					'0%': {
						transform: 'translateX(100%)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
			},
			animation: {
				hide: 'hide .5s ease-in-out forwards',
				fade: 'fade .5s ease-in-out forwards',
				scaleIn: 'scaleIn .35s ease-in-out forwards',
				slideFromLeft: 'slideFromLeft 500ms ease-in-out forwards',
				slideFromRight: 'slideFromRight 500ms ease-in-out forwards',
			},
		},
	},
	plugins: [
		plugin(
			({
				addComponents,
				theme,
				addUtilities,
			}: {
				addUtilities: Function
				addComponents: Function
				theme: Function
			}) => {
				addComponents({
					'.btn-gradient': {
						background:
							'linear-gradient(26.57deg,#3c1a70 0%,rgba(93,14,245,.83))',
					},

					'.underline-hover': {
						position: 'relative',

						'&::after': {
							content: 'close-quote',
							position: 'absolute',
							left: '0',
							bottom: '-4px',
							height: '1px',
							width: '0px',
							backgroundColor: theme('colors.black'),
							transition: 'width 200ms ease-in-out',
						},
						'&:hover::after': {
							width: '100%',
						},
					},

					'.up-hover': {
						transition: 'transform 200ms ease-in-out',

						'&:hover': {
							transform: `translateY(-2px)`,
						},
					},

					'.left-hover': {
						transition: 'transform 200ms ease-in-out',

						'&:hover': {
							transform: `translateX(-2px)`,
						},
					},

					'.right-hover': {
						transition: 'transform 200ms ease-in-out',

						'&:hover': {
							transform: `translateX(2px)`,
						},
					},

					'.down-hover': {
						transition: 'transform 200ms ease-in-out',

						'&:hover': {
							transform: `translateY(2px)`,
						},
					},

					'.border-b-hover': {
						position: 'relative',
						'&::after': {
							content: 'close-quote',
							position: 'absolute',
							left: '0',
							right: '0',
							bottom: '0',
							width: '0',
							'background-color': theme('colors.white'),
							height: '2px',
							transition: 'all 200ms ease-in-out',
						},
						'&:hover': {
							'&::after': {
								width: '100%',
							},
						},
					},

					'.border-hover': {
						border: '2px solid transparent',
						transition: 'all 200ms ease-in-out',

						'&:hover': {
							'border-color': theme('colors.white'),
						},
					},
				})

				addUtilities({
					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},

					'.image-like-bg': {
						zIndex: -1,
						width: '100%',
						height: '100%',
						pointerEvents: 'none',
					},

					'.image-like-bg-cover': {
						zIndex: -1,
						width: '100%',
						height: '100%',
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},

					'.image-like-bg-contain': {
						zIndex: -1,
						width: '100%',
						height: '100%',
						objectPosition: 'center',
						objectFit: 'contain',
						pointerEvents: 'none',
					},
				})
			}
		),
	],
}
export default config
