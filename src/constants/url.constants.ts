import { PageType } from '@/__generated__/output'

export const ADMIN_PAGES = {
	HOME: '/manage',
	PRODUCTS: '/manage/products',
	CHARACTERISTICS: '/manage/characteristics',
	TAGS: '/manage/tags',
	POSTS: '/manage/posts',
	TYPES: '/manage/types',
	RUBRICS: '/manage/rubrics',
	CATEGORIES: '/manage/categories',
	HOLIDAYS: '/manage/holidays',
	COLLECTIONS: '/manage/collections',
	REVIEWS: '/manage/reviews',
	ORDERS: '/manage/orders',
}

export const ADMIN_EDITS = {
	PRODUCT: (productId: number) =>
		`${ADMIN_PAGES.HOME}/product/edit/${productId}`,
	CHARACTERISTIC: (characteristicId: number) =>
		`${ADMIN_PAGES.HOME}/characteristic/edit/${characteristicId}`,
	TAG: (tagId: number) => `${ADMIN_PAGES.HOME}/tag/edit/${tagId}`,
	POST: (postId: number) => `${ADMIN_PAGES.HOME}/post/edit/${postId}`,
	TYPE: (typeId: number) => `${ADMIN_PAGES.HOME}/type/edit/${typeId}`,
	RUBRIC: (rubricId: number) => `${ADMIN_PAGES.HOME}/rubric/edit/${rubricId}`,
	REVIEW: (reviewId: number) => `${ADMIN_PAGES.HOME}/review/edit/${reviewId}`,
	CATEGORY: (categoryId: number) =>
		`${ADMIN_PAGES.HOME}/category/edit/${categoryId}`,
	HOLIDAY: (holidayId: number) =>
		`${ADMIN_PAGES.HOME}/holiday/edit/${holidayId}`,
	COLLECTION: (collectionId: number) =>
		`${ADMIN_PAGES.HOME}/collection/edit/${collectionId}`,
	SHIPPING_AND_PAYMENT: `${ADMIN_PAGES.HOME}/shipping-and-payment/edit`,
	FOR_BUYERS: `${ADMIN_PAGES.HOME}/for-buyers/edit`,
	ABOUT: `${ADMIN_PAGES.HOME}/about/edit`,
	PAGE: (type: PageType) => `${ADMIN_PAGES.HOME}/page/edit?type=${type}`,
}

export const ADMIN_VIEWS = {
	ORDER: (orderId: number) => `${ADMIN_PAGES.HOME}/order/view/${orderId}`,
}

export const USER_PAGES = {
	PROFILE: '/profile',
}

export const PUBLIC_PAGES = {
	HOME: '/',
	LOGIN: '/auth?type=login',
	REGISTER: '/auth?type=register',
	CATALOG: '/catalog',
	SEARCH: (searchTerm: string) => `/catalog?searchTerm=${searchTerm}`,
	CATEGORY: (slug: string) => `/category/${slug}`,
	POST: (slug: string) => `/post/${slug}`,
	PRODUCT: (slug: string) => `/product/${slug}`,
	SHIPPING_AND_PAYMENT: '/shipping-and-payment',
	FOR_BUYERS: '/for-buyers',
	ABOUT: '/about',
	CONTACTS: '/contacts',
	POSTS: '/posts',
	FAVORITES: '/favorites',
}
