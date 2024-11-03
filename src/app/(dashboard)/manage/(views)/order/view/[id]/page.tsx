import type { Metadata } from 'next'

import NotFoundPage from '@/app/not-found'
import ManageOrderView from '@/components/screens/manage/views/order/ManageOrderView'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageIdParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageOrderViewPage({ params }: IPageIdParam) {
	return params.id ? <ManageOrderView queryId={params.id} /> : <NotFoundPage />
}
