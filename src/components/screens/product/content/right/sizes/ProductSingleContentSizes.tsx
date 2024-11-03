import type { IProductSizes } from '@/components/blocks/products/item/sizes/interface/product-sizes.interface'
import type { ICurrentProduct } from '@/shared/interfaces/product/product.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from './ProductSingleContentSizes.module.scss'

const ProductSingleContentSizes: FC<ICurrentProduct & IProductSizes> = ({
	product,
	size,
	setSize,
}) => {
	if (product.sizes.length === 0) return null

	return (
		<div className={styles.sizes}>
			<h2 className={styles.title}>Размер</h2>
			<ul className={styles.list}>
				{product.sizes.map((item, index) => (
					<li className={styles.item} key={index}>
						<button
							className={cn(styles.itemBtn, {
								[styles.picked]: size ? size.size === item.size : false,
							})}
							onClick={() => setSize(item)}
						>
							{item.size}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProductSingleContentSizes
