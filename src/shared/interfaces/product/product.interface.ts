import type {
	TypeCurrentProduct,
	TypeCurrentProductSimilarProducts,
} from '@/shared/types/product/product.type'

export interface ICurrentProduct {
	product: TypeCurrentProduct
}

export interface ICurrentProductSimilarProducts {
	similarProducts: TypeCurrentProductSimilarProducts
}

export interface ICurrentProductData {
	product: TypeCurrentProduct
	similarProducts: TypeCurrentProductSimilarProducts
}
