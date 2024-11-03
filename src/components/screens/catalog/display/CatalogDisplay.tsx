import type { ICatalogDisplay } from '@/components/ui/templates/catalog/filters/interface/catalog-filters.interface'
import cn from 'clsx'
import { LayoutGrid, Menu } from 'lucide-react'
import type { FC } from 'react'
import styles from '../Catalog.module.scss'

const CatalogDisplay: FC<ICatalogDisplay> = ({
	display,
	setProductsQuery,
	setDisplay,
}) => {
	return (
		<div className={styles.display}>
			<span className={styles.displayLabel}>Отображение</span>
			<div className={styles.displayFill}>
				<button
					className={cn(styles.displayBtn, {
						[styles.picked]: display === 'table',
					})}
					onClick={() => {
						setDisplay('table')
						setProductsQuery((prev) => ({
							...prev,
							perPage: '9',
						}))
					}}
					disabled={display === 'table'}
				>
					<Menu />
				</button>
				<button
					className={cn(styles.displayBtn, {
						[styles.picked]: display === 'card',
					})}
					onClick={() => {
						setDisplay('card')
						setProductsQuery((prev) => ({
							...prev,
							perPage: '18',
						}))
					}}
					disabled={display === 'card'}
				>
					<LayoutGrid />
				</button>
			</div>
		</div>
	)
}

export default CatalogDisplay
