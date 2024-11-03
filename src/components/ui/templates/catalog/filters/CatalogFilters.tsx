import cn from 'clsx'
import { X } from 'lucide-react'
import type { FC } from 'react'
import styles from './CatalogFilters.module.scss'
import type { ICatalogFilters } from './interface/catalog-filters.interface'
import CatalogFiltersImageItem from './item/CatalogFiltersImageItem'
import CatalogFiltersItem from './item/CatalogFiltersItem'
import CatalogFiltersPrice from './item/CatalogFiltersPrice'

const CatalogFilters: FC<ICatalogFilters> = ({
	className,
	filters,
	productsQuery,
	setProductsQuery,
	closeFilters,
}) => {
	if (!filters) return null

	return (
		<div className={cn(styles.wrapper, className && className)}>
			<button className={styles.close} onClick={closeFilters}>
				<X />
			</button>
			{filters.sizes.length > 0 && (
				<CatalogFiltersItem
					heading="Размер,”"
					items={filters.sizes}
					variant="sizes"
					productsQuery={productsQuery}
					setProductsQuery={setProductsQuery}
				/>
			)}
			{filters.colors.length > 0 && (
				<CatalogFiltersItem
					heading="Цвет"
					items={filters.colors}
					variant="colors"
					productsQuery={productsQuery}
					setProductsQuery={setProductsQuery}
				/>
			)}
			{filters.hues.length > 0 && (
				<CatalogFiltersItem
					heading="Оттенок"
					items={filters.hues}
					variant="hues"
					productsQuery={productsQuery}
					setProductsQuery={setProductsQuery}
				/>
			)}
			{filters.types.length > 0 && (
				<CatalogFiltersImageItem
					heading="Модель"
					items={filters.types}
					variant="types"
					productsQuery={productsQuery}
					setProductsQuery={setProductsQuery}
				/>
			)}
			{filters.manufacturers.length > 0 && (
				<CatalogFiltersItem
					heading="Производитель"
					items={filters.manufacturers}
					variant="manufacturers"
					productsQuery={productsQuery}
					setProductsQuery={setProductsQuery}
				/>
			)}
			{filters.materials.length > 0 && (
				<CatalogFiltersItem
					heading="Материал"
					items={filters.materials}
					variant="materials"
					productsQuery={productsQuery}
					setProductsQuery={setProductsQuery}
				/>
			)}
			{filters.collections.length > 0 && (
				<CatalogFiltersItem
					heading="Коллекция"
					items={filters.collections}
					variant="collections"
					productsQuery={productsQuery}
					setProductsQuery={setProductsQuery}
				/>
			)}
			{filters.holidays.length > 0 && (
				<CatalogFiltersItem
					heading="Праздник"
					items={filters.holidays}
					variant="holidays"
					productsQuery={productsQuery}
					setProductsQuery={setProductsQuery}
				/>
			)}
			{filters.countries.length > 0 && (
				<CatalogFiltersItem
					heading="Страна"
					items={filters.countries}
					variant="countries"
					productsQuery={productsQuery}
					setProductsQuery={setProductsQuery}
				/>
			)}
			{filters.price.min > 0 && filters.price.max > 0 && (
				<CatalogFiltersPrice
					filters={filters}
					productsQuery={productsQuery}
					setProductsQuery={setProductsQuery}
				/>
			)}
		</div>
	)
}

export default CatalogFilters
