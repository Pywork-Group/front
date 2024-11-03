'use client'

import cn from 'clsx'
import { type FC } from 'react'
import styles from '../../Products.module.scss'
import type { IProductProps } from '../../interface/products.interface'
import type { IProductSizes } from './interface/product-sizes.interface'

const ProductSizes: FC<IProductProps & IProductSizes> = ({
	product,
	size,
	setSize,
}) => {
	if (product.sizes.length === 0) return null

	return (
		<ul className={styles.sizes}>
			{product.sizes.map((item, index) => (
				<li className={styles.size} key={index}>
					<button
						className={cn(styles.sizeBtn, {
							[styles.picked]: size ? size.size === item.size : false,
						})}
						onClick={() => setSize(item)}
					>
						{item.size}
					</button>
				</li>
			))}
		</ul>
	)
}

export default ProductSizes
