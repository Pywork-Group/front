'use client'

import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import cn from 'clsx'
import { useState, type FC } from 'react'
import styles from './ProductTable.module.scss'
import ProductTableCenter from './center/ProductTableCenter'
import ProductTableLeft from './left/ProductTableLeft'
import ProductTableRight from './right/ProductTableRight'
import type { IProductProps } from '../interface/products.interface'

const ProductTable: FC<IProductProps & IClassName> = ({
	product,
	className,
}) => {
	const [color, setColor] = useState(
		product.colors.length > 0 ? product.colors[0] : null
	)
	const [size, setSize] = useState(
		product.colors.length > 0 ? product.sizes[0] : null
	)

	return (
		<div className={cn(styles.item, className && className)}>
			<ProductTableLeft product={product} color={color} />
			<ProductTableCenter
				product={product}
				price={size ? size.price : product.price}
				oldPrice={size ? size.oldPrice : product.oldPrice}
				size={size}
				setSize={setSize}
				color={color}
				setColor={setColor}
			/>
			<ProductTableRight product={product} color={color?.color} size={size?.size} />
		</div>
	)
}

export default ProductTable
