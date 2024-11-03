'use client'

import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { useManageCollections } from '@/hooks/manage/collections/useManageCollections'
import { useFilters } from '@/hooks/other/filters/useFilters'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageCollections.module.scss'
import Pagination from '@/components/ui/elements/filters/pagination/Pagination'

const ManageCollections: FC<IPageSearchParam> = ({ searchParams }) => {
	const {
		queryParams,
		setQueryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ searchParams })
	const {
		collections,
		count,
		createCollection,
		deleteCollection,
		toggleCollection,
		duplicateCollection,
	} = useManageCollections(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Коллекции</h1>
					<button
						className={globalStyles.create}
						onClick={() => createCollection()}
					>
						<ListPlus />
						Создать Коллекцию
					</button>
				</div>
				<Filters
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{count > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.collections}>
							{collections.map((collection) => (
								<div className={styles.collection} key={collection.id}>
									<h2 className={styles.name}>{collection.name}</h2>
									<ManageActions
										place="admin"
										deleteHandler={() =>
											deleteCollection({
												variables: {
													id: collection.id,
												},
											})
										}
										toggleHandler={() =>
											toggleCollection({
												variables: {
													id: collection.id,
												},
											})
										}
										duplicateHandler={() =>
											duplicateCollection({
												variables: {
													id: collection.id,
												},
											})
										}
										edit={ADMIN_EDITS.COLLECTION(collection.id)}
									/>
								</div>
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

export default ManageCollections
