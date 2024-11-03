import { EnumStorage } from '@/constants/enum.constants'
import type { TypeProduct } from '@/shared/types/product/product.type'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { TypeFavoritesStore } from './types/favorites.type'

const toggleFavorite = (
	product: TypeProduct,
	favorites: TypeProduct[]
): TypeProduct[] => {
	const isExistsIndex = favorites.findIndex((item) => item.id === product.id)

	if (isExistsIndex !== -1) {
		const updatedFavorites = [...favorites]
		updatedFavorites.splice(isExistsIndex, 1)
		return updatedFavorites
	} else {
		return [...favorites, { ...product }]
	}
}

const removeCart = (id: number, cart: TypeProduct[]): TypeProduct[] => {
	return cart.filter((item) => item.id !== id)
}

export const useFavoritesStore = create<TypeFavoritesStore>()(
	persist<TypeFavoritesStore>(
		(set, get) => {
			return {
				favorites: [],
				length: () => {
					const { favorites } = get()
					return favorites.reduce((total) => total + 1, 0)
				},
				isExists: (productId: number) => {
					const { favorites } = get()
					const isExists = favorites.some((product) => product.id === productId)
					return isExists ? true : false
				},
				toggle: (product: TypeProduct) => {
					const { favorites } = get()
					const updatedFavorites = toggleFavorite(product, favorites)
					set({ favorites: updatedFavorites })
				},
				remove: (id: number) => {
					const { favorites } = get()
					const updatedFavorites = removeCart(id, favorites)
					set({ favorites: updatedFavorites })
				},
				removeAll: () => {
					set({ favorites: [] })
				},
			}
		},
		{ name: EnumStorage.FAVORITES }
	)
)
