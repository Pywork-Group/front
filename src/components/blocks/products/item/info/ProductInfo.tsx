import { PUBLIC_PAGES } from '@/constants/url.constants'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../../Products.module.scss'
import type { IProductInfo } from './interface/product-info.interface'

const ProductInfo: FC<IProductInfo> = ({ product, price, oldPrice }) => {
	const filteredPrice = +price
	const filteredOldPrice = oldPrice ? +oldPrice : null

	return (
		<Link className={styles.info} href={PUBLIC_PAGES.PRODUCT(product.slug)}>
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
			<h3 className={styles.name}>{product.name}</h3>
		</Link>
	)
}

export default ProductInfo
