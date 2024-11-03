import { PageType } from '@/__generated__/output'
import { ADMIN_EDITS, ADMIN_PAGES } from '@/constants/url.constants'
import type { IMenu } from '@/shared/interfaces/menu/menu.interface'

export const MANAGE_MENU_DATA: IMenu = {
	items: [
		{
			label: 'Продукты',
			href: `${ADMIN_PAGES.PRODUCTS}`,
		},
		{
			label: 'Характеристики',
			href: `${ADMIN_PAGES.CHARACTERISTICS}`,
		},
		{
			label: 'Метки',
			href: `${ADMIN_PAGES.TAGS}`,
		},
		{
			label: 'Модели',
			href: `${ADMIN_PAGES.TYPES}`,
		},
		{
			label: 'Категории',
			href: `${ADMIN_PAGES.CATEGORIES}`,
		},
		{
			label: 'Праздники',
			href: `${ADMIN_PAGES.HOLIDAYS}`,
		},
		{
			label: 'Коллекции',
			href: `${ADMIN_PAGES.COLLECTIONS}`,
		},
		{
			label: 'Отзывы',
			href: `${ADMIN_PAGES.REVIEWS}`,
		},
		{
			label: 'Рубрики',
			href: `${ADMIN_PAGES.RUBRICS}`,
		},
		{
			label: 'Посты',
			href: `${ADMIN_PAGES.POSTS}`,
		},
		{
			label: 'Страница - Главная',
			href: `${ADMIN_EDITS.PAGE(PageType.Home)}`,
		},
		{
			label: 'Страница - Каталог',
			href: `${ADMIN_EDITS.PAGE(PageType.Catalog)}`,
		},
		{
			label: 'Страница - Посты',
			href: `${ADMIN_EDITS.PAGE(PageType.Posts)}`,
		},
		{
			label: 'Доставка и оплата',
			href: `${ADMIN_EDITS.SHIPPING_AND_PAYMENT}`,
		},
		{
			label: 'Покупателям',
			href: `${ADMIN_EDITS.FOR_BUYERS}`,
		},
		{
			label: 'О компании',
			href: `${ADMIN_EDITS.ABOUT}`,
		},
		
		{
			label: 'Заказы',
			href: `${ADMIN_PAGES.ORDERS}`,
		},
	],
}
