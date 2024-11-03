'use client'

import cn from 'clsx'
import { type FC } from 'react'
import styles from '../../Products.module.scss'
import type { IProductProps } from '../../interface/products.interface'
import type { IProductColors } from './interface/product-colors.interface'

const ProductColors: FC<IProductProps & IProductColors> = ({
	product,
	color,
	setColor,
}) => {
	if (product.colors.length === 0) return null

	return (
		<ul className={styles.colors}>
			{product.colors.map((item, index) => (
				<li className={styles.color} key={index}>
					<button
						className={cn(styles.colorBtn, {
							[styles.picked]: color ? color.color === item.color : false,
						})}
						onClick={() => setColor(item)}
					>
						<span style={{ backgroundColor: item.color }}></span>
					</button>
				</li>
			))}
		</ul>
	)
}

export default ProductColors
