import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IMenu } from '@/shared/interfaces/menu/menu.interface'

export const HEADER_MENU_DATA: IMenu = {
	items: [
		{
			label: 'Покупателям',
			href: PUBLIC_PAGES.FOR_BUYERS,
		},
		{
			label: 'Доставка и оплата',
			href: PUBLIC_PAGES.SHIPPING_AND_PAYMENT,
		},
		{
			label: 'О компании',
			href: PUBLIC_PAGES.ABOUT,
		},
		{
			label: 'Контакты',
			href: PUBLIC_PAGES.CONTACTS,
		},
	],
}
