import cn from 'clsx'
import { Search, Triangle } from 'lucide-react'
import ntc from 'ntcjs'
import { useState, type FC } from 'react'
import styles from '../CatalogFilters.module.scss'
import type { ICatalogFiltersItem } from '../interface/catalog-filters.interface'

const CatalogFiltersItem: FC<ICatalogFiltersItem> = ({
	heading,
	variant,
	items,
	productsQuery,
	setProductsQuery,
}) => {
	const [isShow, setIsShow] = useState(true)
	const [searchTerm, setSearchTerm] = useState('')

	const toggleItem = (value: string) => {
		if (variant && productsQuery[variant]) {
			const updatedProductsQuery = productsQuery[variant].includes(value)
				? productsQuery[variant].filter((item) => item !== value)
				: [...productsQuery[variant], value]

			setProductsQuery((prev) => ({
				...prev,
				[variant]: updatedProductsQuery,
			}))
		}
	}

	return (
		<div className={styles.filter}>
			<button className={styles.button} onClick={() => setIsShow(!isShow)}>
				{heading}
				<Triangle className={!isShow ? styles.rotated : ''} />
			</button>
			{isShow && (
				<div className={styles.inner}>
					<div className={styles.search}>
						<input
							type="text"
							placeholder="Поиск"
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<Search />
					</div>
					<ul className={styles.list}>
						{items
							.filter((item) =>
								item.label.toLowerCase().includes(searchTerm.toLowerCase())
							)
							.map((item, index) => (
								<li key={index} className={styles.item}>
									<button
										className={styles.itemBtn}
										onClick={() => toggleItem(item.value)}
									>
										<div
											className={cn(styles.checkbox, {
												[styles.picked]: productsQuery[variant].includes(
													item.value
												),
											})}
										>
											<span></span>
										</div>
										<span className={styles.label}>
											{variant === 'colors' ? (
												<span
													className={styles.colorCircle}
													style={{
														backgroundColor: `#${item.label}`,
														border:
															ntc.name(`#${item.label}`)[1] === 'White'
																? `1px solid '#000'`
																: 'none',
													}}
												></span>
											) : (
												item.label
											)}
										</span>
										<span className={styles.count}>{item.count}</span>
									</button>
								</li>
							))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default CatalogFiltersItem
