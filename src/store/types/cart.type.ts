import type { TypeProduct } from '@/shared/types/product/product.type'

export interface ICartItem extends TypeProduct {
	count: number
	selectedColor?: string | null
	selectedSize?: string | null
}

export type TypeCartStore = {
	cart: ICartItem[]
	length: () => number
	toggle: (
		product: TypeProduct,
		count: number,
		color?: string | null,
		size?: string | null
	) => void
	isExists: (productId: number) => boolean
	remove: (id: number) => void
	removeAll: () => void
	totalPrice: () => number
	changeQuantity: (productId: number, type: 'minus' | 'plus') => void
	getCartItemCount: (productId: number) => number | null
}
