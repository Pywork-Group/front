import NumberField from '@/components/ui/common/form/number-field/NumberField'
import { useCatalogRangeFilters } from '@/hooks/helpers/filters/useCatalogRangeFilters'
import { Triangle } from 'lucide-react'
import { useState, type FC } from 'react'
import styles from '../CatalogFilters.module.scss'
import type { ICatalogFiltersPrice } from '../interface/catalog-filters.interface'

const CatalogFiltersPrice: FC<ICatalogFiltersPrice> = ({
	filters,
	productsQuery,
	setProductsQuery,
}) => {
	const [isMouseUp, setIsMouseUp] = useState(false)
	const [isShow, setIsShow] = useState(true)
	const { values, errors, onChange } = useCatalogRangeFilters(
		filters,
		productsQuery,
		setProductsQuery,
		isMouseUp,
		setIsMouseUp
	)

	return (
		<div className={styles.filter}>
			<button className={styles.button} onClick={() => setIsShow(!isShow)}>
				Цена,
				<Triangle className={!isShow ? styles.rotated : ''} />
			</button>
			{isShow && (
				<div className={styles.priceInner}>
					<div className={styles.ranges}>
						<input
							type="range"
							className={styles.range}
							min={filters.price.min}
							max={filters.price.max}
							onMouseDown={() => setIsMouseUp(false)}
							onMouseUp={() => setIsMouseUp(true)}
							onChange={(e) => onChange(e, 'min', 'range')}
							value={values.min}
						/>
						<input
							type="range"
							className={styles.range}
							min={filters.price.min}
							max={filters.price.max}
							onMouseDown={() => setIsMouseUp(false)}
							onMouseUp={() => setIsMouseUp(true)}
							onChange={(e) => onChange(e, 'max', 'range')}
							value={values.max}
						/>
					</div>
					<div className={styles.fields}>
						<NumberField
							className={styles.field}
							label="From"
							value={values.min}
							onChange={(e) => onChange(e, 'min', 'input')}
							error={errors.min}
						/>
						<NumberField
							className={styles.field}
							label="To"
							value={values.max}
							onChange={(e) => onChange(e, 'max', 'input')}
							error={errors.max}
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default CatalogFiltersPrice
