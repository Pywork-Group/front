'use client'

import Pagination from '@/components/ui/elements/filters/pagination/Pagination'
import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { useManageHolidays } from '@/hooks/manage/holidays/useManageHolidays'
import { useFilters } from '@/hooks/other/filters/useFilters'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageHolidays.module.scss'

const ManageHolidays: FC<IPageSearchParam> = ({ searchParams }) => {
	const {
		queryParams,
		setQueryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ searchParams })
	const {
		holidays,
		count,
		createHoliday,
		deleteHoliday,
		toggleHoliday,
		duplicateHoliday,
	} = useManageHolidays(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Праздники</h1>
					<button
						className={globalStyles.create}
						onClick={() => createHoliday()}
					>
						<ListPlus />
						Создать Праздник
					</button>
				</div>
				<Filters
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{count > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.holidays}>
							{holidays.map((holiday) => (
								<div className={styles.holiday} key={holiday.id}>
									<h2 className={styles.name}>{holiday.name}</h2>
									<ManageActions
										place="admin"
										deleteHandler={() =>
											deleteHoliday({
												variables: {
													id: holiday.id,
												},
											})
										}
										toggleHandler={() =>
											toggleHoliday({
												variables: {
													id: holiday.id,
												},
											})
										}
										duplicateHandler={() =>
											duplicateHoliday({
												variables: {
													id: holiday.id,
												},
											})
										}
										edit={ADMIN_EDITS.HOLIDAY(holiday.id)}
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

export default ManageHolidays
