import type { Metadata } from 'next'

import ManageOrders from '@/components/screens/manage/pages/orders/ManageOrders'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageOrdersPage({ searchParams }: IPageSearchParam) {
	return <ManageOrders searchParams={searchParams} />
}
