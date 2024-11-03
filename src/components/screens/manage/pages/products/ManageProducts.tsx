'use client'

import Product from '@/components/blocks/products/item/Product'
import Pagination from '@/components/ui/elements/filters/pagination/Pagination'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageProducts } from '@/hooks/manage/products/useManageProducts'
import { useFilters } from '@/hooks/other/filters/useFilters'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageProducts.module.scss'

const ManageProducts: FC<IPageSearchParam> = ({ searchParams }) => {
	const {
		queryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		setQueryParams,
		debounceSearch,
	} = useFilters({ searchParams })
	const {
		products,
		count,
		createProduct,
		deleteProduct,
		toggleProduct,
		duplicateProduct,
	} = useManageProducts(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Продукты</h1>
					<button
						className={globalStyles.create}
						onClick={() => createProduct()}
					>
						<ListPlus />
						Создать Продукт
					</button>
				</div>
				<Filters
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{count > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.products}>
							{products.map((product) => (
								<Product
									key={product.id}
									className={styles.product}
									product={product}
									place="admin"
									deleteHandler={() =>
										deleteProduct({
											variables: {
												id: product.id,
											},
										})
									}
									toggleHandler={() =>
										toggleProduct({
											variables: {
												id: product.id,
											},
										})
									}
									duplicateHandler={() =>
										duplicateProduct({
											variables: {
												id: product.id,
											},
										})
									}
								/>
							))}
						</div>
						{queryParams.page &&
							queryParams.perPage &&
							count > +queryParams.perPage && (
								<Pagination
									length={count}
									page={+queryParams.page}
									perPage={+queryParams.perPage}
									setPagination={setQueryParams}
									className={globalStyles.pagination}
								/>
							)}
					</div>
				)}
			</div>
		</div>
	)
}

export default ManageProducts
