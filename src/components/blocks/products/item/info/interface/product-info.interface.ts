import type { IProductProps } from '../../../interface/products.interface'

export interface IProductInfo extends IProductProps {
	price: string
	oldPrice?: string | null
}
