import { UserRole } from '@/__generated__/output'
import Product from '@/components/blocks/products/item/Product'
import type { ICurrentProductSimilarProducts } from '@/shared/interfaces/product/product.interface'
import type { ISessionUser } from '@/shared/interfaces/user/user.interface'
import type { FC } from 'react'
import styles from './ProductSingleSimilar.module.scss'

const ProductSingleSimilar: FC<
	ICurrentProductSimilarProducts & ISessionUser
> = ({ similarProducts, user }) => {
	const isAdmin = user ? user.role === UserRole.Admin : false

	return (
		<div className={styles.products}>
			<h2 className={styles.title}>Другие товары из категории</h2>
			<div className={styles.list}>
				{similarProducts.map((product) => (
					<Product
						key={product.id}
						className={styles.item}
						product={product}
						place="public"
						isAdmin={isAdmin}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductSingleSimilar
