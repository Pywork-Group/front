import type { ICurrentProduct } from '@/shared/interfaces/product/product.interface'
import type { TypeSize } from '@/shared/types/size/size.type'
import type { FC } from 'react'
import styles from './ProductSingleContentPrice.module.scss'

const ProductSingleContentPrice: FC<ICurrentProduct & TypeSize> = ({
	product,
	size,
}) => {
	const item = size ? size : product
	const filteredPrice = +item.price
	const filteredOldPrice = item.oldPrice ? +item.oldPrice : null

	return filteredOldPrice ? (
		<div className={styles.salePriceBox}>
			<div className={styles.newPriceBox}>
				<div className={styles.newPrice}>
					{item.price} ₽
					<span className={styles.salePercent}>
						-{Math.round(100 - (100 * filteredPrice) / filteredOldPrice)} %
					</span>
				</div>
				<span className={styles.piecePrice}>
					{(filteredPrice / product.packageQuantity).toFixed(2)} ₽ за шт
				</span>
			</div>
			<div className={styles.oldPriceBox}>
				<span className={styles.oldPrice}>{item.oldPrice} ₽</span>
				<span className={styles.piecePrice}>
					{(filteredOldPrice / product.packageQuantity).toFixed(2)} ₽ за шт
				</span>
			</div>
		</div>
	) : (
		<div className={styles.currentPriceBox}>
			<span className={styles.price}>{item.price} ₽</span>
			<span className={styles.piecePrice}>
				{(filteredPrice / product.packageQuantity).toFixed(2)} ₽ за шт
			</span>
		</div>
	)
}

export default ProductSingleContentPrice
