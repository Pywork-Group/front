'use client'

import type { QueryInput } from '@/__generated__/output'
import Order from '@/components/blocks/order/Order'
import Pagination from '@/components/ui/elements/filters/pagination/Pagination'
import Filters from '@/components/ui/templates/filters/Filters'
import ManageSidebar from '@/components/ui/templates/manage/sidebar/ManageSidebar'
import { useManageOrders } from '@/hooks/manage/orders/useManageOrders'
import { useFilters } from '@/hooks/other/filters/useFilters'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'
import type { FC } from 'react'
import globalStyles from '../ManagePages.module.scss'
import styles from './ManageOrders.module.scss'

const ManageOrders: FC<IPageSearchParam> = ({ searchParams }) => {
	const {
		queryParams,
		setQueryParams,
		updateQueryFilters,
		handleSearch,
		searchTerm,
		debounceSearch,
	} = useFilters({ searchParams })
	const { orders, count, deleteOrder } = useManageOrders(
		queryParams as QueryInput,
		debounceSearch
	)

	return (
		<div className={globalStyles.wrapper}>
			<ManageSidebar
				className={globalStyles.sidebar}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<div className={globalStyles.content}>
				<div className={globalStyles.top}>
					<h1 className={globalStyles.heading}>Заказы</h1>
				</div>
				<Filters
					queryParams={queryParams}
					updateQueryFilters={updateQueryFilters}
				/>
				{count > 0 && (
					<div className={globalStyles.fill}>
						<div className={styles.orders}>
							{orders.map((order) => (
								<Order
									place="admin"
									order={order}
									className={styles.order}
									deleteHandler={() =>
										deleteOrder({
											variables: {
												id: order.id,
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

export default ManageOrders
