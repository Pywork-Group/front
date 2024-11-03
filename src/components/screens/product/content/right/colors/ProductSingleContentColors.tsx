import type { IProductColors } from '@/components/blocks/products/item/colors/interface/product-colors.interface'
import type { ICurrentProduct } from '@/shared/interfaces/product/product.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from './ProductSingleContentColors.module.scss'

const ProductSingleContentColors: FC<ICurrentProduct & IProductColors> = ({
	product,
	color,
	setColor,
}) => {
	if (product.colors.length === 0) return null

	return (
		<div className={styles.colors}>
			<h2 className={styles.title}>Цвет</h2>
			<ul className={styles.list}>
				{product.colors.map((item, index) => (
					<li className={styles.item} key={index}>
						<button
							className={cn(styles.itemBtn, {
								[styles.picked]: color ? color.color === item.color : false,
								[styles.white]:
									color &&
									(color.color === 'rgb(255, 255, 255);' ||
										color.color === '#fff;' ||
										color.color === '#ffffff;' ||
										color.color === '#FFF;' ||
										color.color === '#FFFFFF;'),
							})}
							onClick={() => setColor(item)}
						>
							<span style={{ backgroundColor: item.color }}></span>
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProductSingleContentColors
