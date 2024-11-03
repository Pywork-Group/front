import type { ISocial } from '@/shared/interfaces/social/socials.interface'

export const SOCIAL_DATA: ISocial = {
	items: [
		{
			icon: {
				src: '/images/icons/telegram.png',
				width: 30,
				height: 30,
				alt: 'Telegram',
			},
			href: 'https://t.me/+79774404060',
		},
		{
			icon: {
				src: '/images/icons/whatsapp.png',
				width: 30,
				height: 30,
				alt: 'Whatsapp',
			},
			href: 'https://api.whatsapp.com/send?phone=79774404060',
		},
	],
}
