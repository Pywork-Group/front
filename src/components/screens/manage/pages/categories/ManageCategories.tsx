'use client'

import Category from '@/components/blocks/category/Category'
import Pagination from '@/components/ui/elements/filters/pagination/Pagination'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageCategories } from '@/hooks/manage/categories/useManageCategories'
import { useFilters } from '@/hooks/other/filters/useFilters'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageCategories.module.scss'

const ManageCategories: FC<IPageSearchParam> = ({ searchParams }) => {
	const {
		queryParams,
		setQueryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ searchParams })
	const {
		categories,
		count,
		createCategory,
		deleteCategory,
		toggleCategory,
		duplicateCategory,
	} = useManageCategories(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Категории</h1>
					<button
						className={globalStyles.create}
						onClick={() => createCategory()}
					>
						<ListPlus />
						Создать Категорию
					</button>
				</div>
				<Filters
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{count > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.categories}>
							{categories.map((category) => (
								<Category
									key={category.id}
									className={styles.category}
									category={category}
									place="admin"
									deleteHandler={() =>
										deleteCategory({
											variables: {
												id: category.id,
											},
										})
									}
									toggleHandler={() =>
										toggleCategory({
											variables: {
												id: category.id,
											},
										})
									}
									duplicateHandler={() =>
										duplicateCategory({
											variables: {
												id: category.id,
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

export default ManageCategories
