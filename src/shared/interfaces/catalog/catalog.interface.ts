import type { TypeCatalogProducts } from '@/shared/types/catalog/catalog.type'
import type { TypeProductDisplay } from '@/shared/types/product/product.type'

export interface ICatalogProducts {
	display: TypeProductDisplay
	products: TypeCatalogProducts
	productsCount: number
	page: number
	perPage: number
	setPagination: any
}
