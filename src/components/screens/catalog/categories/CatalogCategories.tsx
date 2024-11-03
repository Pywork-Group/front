import StaticImage from '@/components/ui/common/image/StaticImage'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { TypeCatalogCategories } from '@/shared/types/catalog/catalog.type'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../Catalog.module.scss'

const CatalogCategories: FC<{ categories: TypeCatalogCategories }> = ({
	categories,
}) => {
	return (
		<ul className={styles.categories}>
			{categories.map((category, index) => (
				<li className={styles.category} key={index}>
					<Link
						href={PUBLIC_PAGES.CATEGORY(category.slug)}
						className={styles.categoryLink}
					>
						{category.imagePath && (
							<StaticImage
								src={category.imagePath}
								width={175}
								height={175}
								alt={category.name}
							/>
						)}
						<h3 className={styles.categoryName}>{category.name}</h3>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default CatalogCategories
