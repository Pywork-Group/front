import type { Metadata } from 'next'

import NotFoundPage from '@/app/not-found'
import ManageCategoryEdit from '@/components/screens/manage/edits/category/ManageCategoryEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageIdParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageCategoryEditPage({ params }: IPageIdParam) {
	return params.id ? (
		<ManageCategoryEdit queryId={params.id} />
	) : (
		<NotFoundPage />
	)
}
