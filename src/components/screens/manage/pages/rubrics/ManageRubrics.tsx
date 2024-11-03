'use client'

import Rubric from '@/components/blocks/rubric/Rubric'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageRubrics } from '@/hooks/manage/rubrics/useManageRubrics'
import { useFilters } from '@/hooks/other/filters/useFilters'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageRubrics.module.scss'
import Pagination from '@/components/ui/elements/filters/pagination/Pagination'

const ManageRubrics: FC<IPageSearchParam> = ({ searchParams }) => {
	const {
		queryParams,
		setQueryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ searchParams })
	const {
		rubrics,
		count,
		createRubric,
		deleteRubric,
		toggleRubric,
		duplicateRubric,
	} = useManageRubrics(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Рубрики</h1>
					<button
						className={globalStyles.create}
						onClick={() => createRubric()}
					>
						<ListPlus />
						Создать Рубрику
					</button>
				</div>
				<Filters
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{count > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.rubrics}>
							{rubrics.map((rubric) => (
								<Rubric
									key={rubric.id}
									className={styles.rubric}
									rubric={rubric}
									place="admin"
									deleteHandler={() =>
										deleteRubric({
											variables: {
												id: rubric.id,
											},
										})
									}
									toggleHandler={() =>
										toggleRubric({
											variables: {
												id: rubric.id,
											},
										})
									}
									duplicateHandler={() =>
										duplicateRubric({
											variables: {
												id: rubric.id,
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

export default ManageRubrics
