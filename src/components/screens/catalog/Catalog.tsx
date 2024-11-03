'use client'

import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Breadcrumb from '@/components/ui/elements/breadcrumb/Breadcrumb'
import Loader from '@/components/ui/elements/loader/Loader'
import CatalogFilters from '@/components/ui/templates/catalog/filters/CatalogFilters'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { useToggleBodyOverflow } from '@/hooks/helpers/body/useToggleBodyOverflow'
import { useCatalog } from '@/hooks/public/catalog/useCatalog'
import type { IMenuItem } from '@/shared/interfaces/menu/menu.interface'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'
import type { ISessionUser } from '@/shared/interfaces/user/user.interface'
import type { TypeParamSlug } from '@/shared/types/param/param.type'
import type { TypeProductDisplay } from '@/shared/types/product/product.type'
import { getBreadcrumbCategories } from '@/utils/helpers/get-breadcrumb-categories'
import cn from 'clsx'
import { Filter } from 'lucide-react'
import { useState, type FC } from 'react'
import styles from './Catalog.module.scss'
import CatalogBlock from './block/CatalogBlock'
import CatalogCategories from './categories/CatalogCategories'
import CatalogDisplay from './display/CatalogDisplay'
import CatalogProducts from './products/CatalogProducts'
import CatalogSort from './sort/CatalogSort'

const Catalog: FC<TypeParamSlug & IPageSearchParam & ISessionUser> = ({
	slug,
	searchParams,
	user,
}) => {
	const {
		block,
		rootCategory,
		categories,
		filters,
		products,
		productsCount,
		productsQuery,
		setProductsQuery,
		error,
		loading,
	} = useCatalog(searchParams, slug)
	const [display, setDisplay] = useState<TypeProductDisplay>('card')
	const [isFiltersShow, setIsFiltersShow] = useState(false)

	useToggleBodyOverflow(isFiltersShow)

	if (error) return null

	let breadcrumbItems: IMenuItem[] = []
	if (rootCategory && slug) {
		const parentCategories = getBreadcrumbCategories(rootCategory)

		breadcrumbItems = parentCategories.map((category, index) => ({
			label: category.name,
			href: PUBLIC_PAGES.CATEGORY(category.slug),
		}))
	}

	if (breadcrumbItems.length === 0) {
		breadcrumbItems.push({
			label: 'Каталог',
			href: PUBLIC_PAGES.CATALOG,
		})
	}

	return (
		<Section className={styles.catalog}>
			<Breadcrumb items={breadcrumbItems} />
			<Container className={styles.container} variant="extra">
				<div className={styles.wrapper}>
					{productsCount > 0 && (
						<CatalogFilters
							filters={filters}
							productsQuery={productsQuery}
							setProductsQuery={setProductsQuery}
							closeFilters={() => setIsFiltersShow(false)}
							className={cn(styles.filters, {
								[styles.opened]: isFiltersShow,
							})}
						/>
					)}
					<div className={styles.right}>
						{categories.length > 0 && (
							<CatalogCategories categories={categories} />
						)}
						{loading ? (
							<Loader />
						) : (
							productsCount > 0 && (
								<div className={styles.fill}>
									<div className={styles.sorting}>
										<CatalogSort
											productsQuery={productsQuery}
											setProductsQuery={setProductsQuery}
										/>
										<CatalogDisplay
											display={display}
											setDisplay={setDisplay}
											setProductsQuery={setProductsQuery}
										/>
										<button
											className={styles.filtersOpener}
											onClick={() => setIsFiltersShow(true)}
										>
											<Filter />
											Фильтры
										</button>
									</div>
									<CatalogProducts
										display={display}
										products={products}
										productsCount={productsCount}
										setPagination={setProductsQuery}
										page={+productsQuery.page}
										perPage={+productsQuery.perPage}
										user={user}
									/>
								</div>
							)
						)}
					</div>
				</div>
				<CatalogBlock block={block} />
			</Container>
		</Section>
	)
}

export default Catalog
