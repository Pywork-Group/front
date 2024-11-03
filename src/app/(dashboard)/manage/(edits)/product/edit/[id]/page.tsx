import type { Metadata } from 'next'

import NotFoundPage from '@/app/not-found'
import ManageProductEdit from '@/components/screens/manage/edits/product/ManageProductEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageIdParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageProductEditPage({ params }: IPageIdParam) {
	return params.id ? (
		<ManageProductEdit queryId={params.id} />
	) : (
		<NotFoundPage />
	)
}
