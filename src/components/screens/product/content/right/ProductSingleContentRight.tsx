import ProductFavorite from '@/components/blocks/products/item/buttons/favorite/ProductFavorite'
import type { IProductColors } from '@/components/blocks/products/item/colors/interface/product-colors.interface'
import type { IProductSizes } from '@/components/blocks/products/item/sizes/interface/product-sizes.interface'
import type { ICurrentProduct } from '@/shared/interfaces/product/product.interface'
import type { FC } from 'react'
import styles from '../ProductSingleContent.module.scss'
import ProductSingleContentButtons from './buttons/ProductSingleContentButtons'
import ProductSingleContentColors from './colors/ProductSingleContentColors'
import ProductSingleContentPrice from './price/ProductSingleContentPrice'
import ProductSingleContentSizes from './sizes/ProductSingleContentSizes'

const ProductSingleContentRight: FC<
	ICurrentProduct & IProductSizes & IProductColors
> = ({ product, size, setSize, color, setColor }) => {
	return (
		<div className={styles.right}>
			<ProductSingleContentSizes
				product={product}
				size={size}
				setSize={setSize}
			/>
			<ProductSingleContentColors
				product={product}
				color={color}
				setColor={setColor}
			/>
			<div className={styles.info}>
				<div className={styles.infoTop}>
					<ProductSingleContentPrice product={product} size={size} />
					<ProductFavorite product={product} className={styles.favorite} />
				</div>
				<ProductSingleContentButtons product={product} />
			</div>
		</div>
	)
}

export default ProductSingleContentRight
