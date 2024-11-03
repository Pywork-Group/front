import type { ISocial } from '@/shared/interfaces/social/socials.interface'

export const HEADER_SOCIAL_DATA: ISocial = {
	items: [
		{
			icon: {
				src: '/images/icons/vk.svg',
				width: 30,
				height: 30,
				alt: 'VKontakte',
			},
			href: 'https://vk.com/vse_shary',
		},
		{
			icon: {
				src: '/images/icons/youtube.svg',
				width: 30,
				height: 30,
				alt: 'Youtube',
			},
			href: 'https://youtube.com/@100sharov?si=3RkM8nzAYVd1dKiU',
		},
	],
}
