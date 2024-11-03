import type { ICurrentProduct } from '@/shared/interfaces/product/product.interface'
import type { FC } from 'react'
import styles from './ProductSingleAbout.module.scss'
import ProductSingleAboutDescription from './about/ProductSingleAboutDescription'
import ProductSingleAboutCharacteristics from './characteristics/ProductSingleAboutCharacteristics'

const ProductSingleAbout: FC<ICurrentProduct> = ({ product }) => {
	return (
		<div className={styles.about}>
			<ProductSingleAboutCharacteristics product={product} />
			<ProductSingleAboutDescription product={product} />
		</div>
	)
}

export default ProductSingleAbout
