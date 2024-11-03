import { Sort } from '@/__generated__/output'
import type { ICatalogSort } from '@/components/ui/templates/catalog/filters/interface/catalog-filters.interface'
import { Triangle } from 'lucide-react'
import { useState, type FC } from 'react'
import styles from '../Catalog.module.scss'

const CatalogSort: FC<ICatalogSort> = ({
	productsQuery,
	setProductsQuery,
}) => {
	const [isShow, setIsShow] = useState(false)

	const isNewest = productsQuery.sort === Sort.Newest

	return (
		<div className={styles.sort}>
			<span className={styles.sortLabel}>Сортировать</span>
			<div className={styles.sortFill}>
				<button
					className={styles.sortOpener}
					onClick={() => setIsShow(!isShow)}
				>
					{isNewest ? 'Новые' : 'Старые'}
					<Triangle className={!isShow ? styles.rotated : ''} />
				</button>
				{isShow && (
					<ul className={styles.sortList}>
						<li className={styles.sortItem}>
							<button
								className={styles.sortBtn}
								onClick={() =>
									setProductsQuery((prev) => ({
										...prev,
										sort: isNewest ? Sort.Oldest : Sort.Newest,
									}))
								}
							>
								{isNewest ? 'Старые' : 'Новые'}
							</button>
						</li>
					</ul>
				)}
			</div>
		</div>
	)
}

export default CatalogSort
