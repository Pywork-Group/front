import StaticImage from '@/components/ui/common/image/StaticImage'
import { Triangle } from 'lucide-react'
import { useState, type FC } from 'react'
import styles from '../CatalogFilters.module.scss'
import type { ICatalogFiltersImageItem } from '../interface/catalog-filters.interface'

const CatalogFiltersImageItem: FC<ICatalogFiltersImageItem> = ({
	heading,
	variant,
	items,
	productsQuery,
	setProductsQuery,
}) => {
	const [isShow, setIsShow] = useState(true)

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
					<ul className={styles.types}>
						{items.map((item, index) => (
							<li key={index} className={styles.type}>
								<button
									className={styles.typeBtn}
									onClick={() => toggleItem(item.value)}
								>
									{productsQuery[variant].includes(item.value) ? (
										<StaticImage
											className={styles.icon}
											src={item.iconPath}
											width={43}
											height={43}
											alt="Type"
										/>
									) : item.uncheckedIconPath ? (
										<StaticImage
											className={styles.icon}
											src={item.uncheckedIconPath}
											width={43}
											height={43}
											alt="Type"
										/>
									) : (
										<StaticImage
											className={styles.icon}
											src={item.iconPath}
											width={43}
											height={43}
											alt="Type"
										/>
									)}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default CatalogFiltersImageItem
