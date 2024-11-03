'use client'

import Characteristic from '@/components/blocks/characteristic/Characteristic'
import Pagination from '@/components/ui/elements/filters/pagination/Pagination'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageCharacteristics } from '@/hooks/manage/characteristics/useManageCharacteristics'
import { useFilters } from '@/hooks/other/filters/useFilters'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'
import { ListPlus } from 'lucide-react'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageCharacteristics.module.scss'

const ManageCharacteristics: FC<IPageSearchParam> = ({ searchParams }) => {
	const {
		queryParams,
		setQueryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ searchParams })
	const {
		characteristics,
		count,
		createCharacteristic,
		deleteCharacteristic,
		toggleCharacteristic,
		duplicateCharacteristic,
	} = useManageCharacteristics(queryParams, debounceSearch)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Характеристики</h1>
					<button
						className={globalStyles.create}
						onClick={() => createCharacteristic()}
					>
						<ListPlus />
						Создать Характеристику
					</button>
				</div>
				<Filters
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{count > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.characteristics}>
							{characteristics.map((characteristic) => (
								<Characteristic
									key={characteristic.id}
									className={styles.characteristic}
									characteristic={characteristic}
									place="admin"
									deleteHandler={() =>
										deleteCharacteristic({
											variables: {
												id: characteristic.id,
											},
										})
									}
									toggleHandler={() =>
										toggleCharacteristic({
											variables: {
												id: characteristic.id,
											},
										})
									}
									duplicateHandler={() =>
										duplicateCharacteristic({
											variables: {
												id: characteristic.id,
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

export default ManageCharacteristics
