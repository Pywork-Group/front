'use client'

import Type from '@/components/blocks/type/Type'
import Pagination from '@/components/ui/elements/filters/pagination/Pagination'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageTypes } from '@/hooks/manage/types/useManageTypes'
import { useFilters } from '@/hooks/other/filters/useFilters'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageTypes.module.scss'

const ManageTypes: FC<IPageSearchParam> = ({ searchParams }) => {
	const {
		queryParams,
		setQueryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ searchParams })
	const { types, count, createType, deleteType, toggleType, duplicateType } =
		useManageTypes(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Модели</h1>
					<button className={globalStyles.create} onClick={() => createType()}>
						<ListPlus />
						Создать Модель
					</button>
				</div>
				<Filters
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{count > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.types}>
							{types.map((type) => (
								<Type
									key={type.id}
									className={styles.type}
									type={type}
									place="admin"
									deleteHandler={() =>
										deleteType({
											variables: {
												id: type.id,
											},
										})
									}
									toggleHandler={() =>
										toggleType({
											variables: {
												id: type.id,
											},
										})
									}
									duplicateHandler={() =>
										duplicateType({
											variables: {
												id: type.id,
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

export default ManageTypes
