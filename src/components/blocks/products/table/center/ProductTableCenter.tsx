import cn from 'clsx'
import type { FC } from 'react'
import type { IProductProps } from '../../interface/products.interface'
import type { IProductColors } from '../../item/colors/interface/product-colors.interface'
import type { IProductInfo } from '../../item/info/interface/product-info.interface'
import type { IProductSizes } from '../../item/sizes/interface/product-sizes.interface'
import styles from '../ProductTable.module.scss'

const ProductTableCenter: FC<
	IProductProps & IProductColors & IProductSizes & IProductInfo
> = ({ product, color, setColor, size, setSize, price, oldPrice }) => {
	const filteredPrice = +price
	const filteredOldPrice = oldPrice ? +oldPrice : null

	return (
		<div className={styles.center}>
			{product.colors.length !== 0 && (
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
			)}
			{product.sizes.length !== 0 && (
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
			)}
			{filteredOldPrice ? (
				<div className={styles.salePriceBox}>
					<div className={styles.newPriceBox}>
						<div className={styles.newPrice}>
							{price} ₽
							<span className={styles.salePercent}>
								-{Math.round(100 - (100 * filteredPrice) / filteredOldPrice)} %
							</span>
						</div>
						<span className={styles.piecePrice}>
							{(filteredPrice / product.packageQuantity).toFixed(2)} ₽ за шт
						</span>
					</div>
					<div className={styles.oldPriceBox}>
						<span className={styles.oldPrice}>{oldPrice} ₽</span>
						<span className={styles.piecePrice}>
							{(filteredOldPrice / product.packageQuantity).toFixed(2)} ₽ за шт
						</span>
					</div>
				</div>
			) : (
				<div className={styles.currentPriceBox}>
					<span className={styles.price}>{price} ₽</span>
					<span className={styles.piecePrice}>
						{(filteredPrice / product.packageQuantity).toFixed(2)} ₽ за шт
					</span>
				</div>
			)}
		</div>
	)
}

export default ProductTableCenter
