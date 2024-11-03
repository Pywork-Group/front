'use client'

import Tag from '@/components/blocks/tags/item/Tag'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageTags } from '@/hooks/manage/tags/useManageTags'
import { useFilters } from '@/hooks/other/filters/useFilters'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageTags.module.scss'
import Pagination from '@/components/ui/elements/filters/pagination/Pagination'

const ManageTags: FC<IPageSearchParam> = ({ searchParams }) => {
	const {
		queryParams,
		setQueryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ searchParams })
	const { tags, count, createTag, deleteTag, toggleTag, duplicateTag } =
		useManageTags(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Метки</h1>
					<button className={globalStyles.create} onClick={() => createTag()}>
						<ListPlus />
						Создать Метку
					</button>
				</div>
				<Filters
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{count > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.tags}>
							{tags.map((tag) => (
								<Tag
									key={tag.id}
									className={styles.tag}
									tag={tag}
									place="admin"
									deleteHandler={() =>
										deleteTag({
											variables: {
												id: tag.id,
											},
										})
									}
									toggleHandler={() =>
										toggleTag({
											variables: {
												id: tag.id,
											},
										})
									}
									duplicateHandler={() =>
										duplicateTag({
											variables: {
												id: tag.id,
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

export default ManageTags
