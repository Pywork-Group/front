import Product from '@/components/blocks/products/item/Product'
import ProductTable from '@/components/blocks/products/table/ProductTable'
import Pagination from '@/components/ui/elements/filters/pagination/Pagination'
import type { ICatalogProducts } from '@/shared/interfaces/catalog/catalog.interface'
import type { ISessionUser } from '@/shared/interfaces/user/user.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from '../Catalog.module.scss'
import { UserRole } from '@/__generated__/output'

const CatalogProducts: FC<ICatalogProducts & ISessionUser> = ({
	display,
	products,
	productsCount,
	page,
	perPage,
	setPagination,
	user,
}) => {
	const isAdmin = user ? user.role === UserRole.Admin : false

	return (
		<div className={styles.products}>
			<div
				className={cn(styles.list, {
					[styles.tables]: display === 'table',
					[styles.cards]: display === 'card',
				})}
			>
				{products.map((product) =>
					display === 'card' ? (
						<Product
							className={styles.product}
							key={product.id}
							product={product}
							place="public"
							isAdmin={isAdmin}
						/>
					) : (
						<ProductTable
							className={styles.product}
							key={product.id}
							product={product}
						/>
					)
				)}
			</div>
			{productsCount > perPage && (
				<Pagination
					length={productsCount}
					page={+page}
					perPage={+perPage}
					setPagination={setPagination}
					className={styles.pagination}
				/>
			)}
		</div>
	)
}

export default CatalogProducts
