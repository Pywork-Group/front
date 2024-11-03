import type { TypeProduct } from '@/shared/types/product/product.type'
import type { Dispatch, SetStateAction } from 'react'

export interface IProductVariant {
	variant: 'popular' | 'newest' | 'none'
}

export interface IProductPropsWithVariant extends IProductVariant {
	product: TypeProduct
}

export interface IProductProps {
	product: TypeProduct
}

export interface IProductSelected {
	size?: string | null
	color?: string | null
}

export interface IProductQuantity extends IProductProps {
	count: number
	setCount: Dispatch<SetStateAction<number>>
}
