import { EnumStorage } from '@/constants/enum.constants'
import type { TypeProduct } from '@/shared/types/product/product.type'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ICartItem, TypeCartStore } from './types/cart.type'

const toggleCart = (
	product: TypeProduct,
	count: number,
	cart: ICartItem[],
	color?: string | null,
	size?: string | null
): ICartItem[] => {
	const isExistsIndex = cart.findIndex((item) => item.id === product.id)

	if (isExistsIndex !== -1) {
		const updatedCart = [...cart]
		updatedCart.splice(isExistsIndex, 1)
		return updatedCart
	} else {
		return [...cart, { ...product, count, selectedColor: color, selectedSize: size }]
	}
}

const removeCart = (id: number, cart: ICartItem[]): ICartItem[] => {
	return cart.filter((item) => item.id !== id)
}

const changeQuantity = (
	id: number,
	type: 'minus' | 'plus',
	cart: ICartItem[]
): ICartItem[] => {
	return cart.map((item) => {
		const newQuantity = type === 'minus' ? item.count - 1 : item.count + 1
		if (item.id === id) {
			return { ...item, count: newQuantity }
		}
		return item
	})
}

const getItem = (productId: number, cart: ICartItem[]): number | null => {
	const foundItem = cart.find((item) => item.id === productId)
	return foundItem ? foundItem.count : null
}

export const useCartStore = create<TypeCartStore>()(
	persist<TypeCartStore>(
		(set, get) => {
			return {
				cart: [],
				length: () => {
					const { cart } = get()
					return cart.reduce((total, item) => total + item.count, 0)
				},
				isExists: (productId: number) => {
					const { cart } = get()
					const isExists = cart.some((product) => product.id === productId)
					return isExists ? true : false
				},
				toggle: (
					product: TypeProduct,
					count: number,
					color?: string | null,
					size?: string | null
				) => {
					const { cart } = get()
					const updatedCart = toggleCart(product, count, cart, color, size)
					set({ cart: updatedCart })
				},
				remove: (id: number) => {
					const { cart } = get()
					const updatedCart = removeCart(id, cart)
					set({ cart: updatedCart })
				},
				removeAll: () => {
					set({ cart: [] })
				},
				getCartItemCount: (productId: number) => {
					const { cart } = get()
					return getItem(productId, cart)
				},
				changeQuantity: (productId: number, type: 'minus' | 'plus') => {
					const { cart } = get()
					const updatedCart = changeQuantity(productId, type, cart)
					set({ cart: updatedCart })
				},
				totalPrice: () => {
					const { cart } = get()
					const totalPrice = cart.reduce(
						(acc, item) => acc + parseInt(item.price) * item.count,
						0
					)
					return totalPrice
				},
			}
		},
		{ name: EnumStorage.CART }
	)
)
