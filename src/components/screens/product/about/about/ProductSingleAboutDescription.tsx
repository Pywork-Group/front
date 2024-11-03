import type { ICurrentProduct } from '@/shared/interfaces/product/product.interface'
import type { FC } from 'react'
import styles from './ProductSingleAboutDescription.module.scss'

const ProductSingleAboutDescription: FC<ICurrentProduct> = ({ product }) => {
	return (
		<div className={styles.description}>
			<h2 className={styles.title}>Описание</h2>
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: product.description }}
			/>
		</div>
	)
}

export default ProductSingleAboutDescription
