import type { Metadata } from 'next'

import NotFoundPage from '@/app/not-found'
import ManageCollectionEdit from '@/components/screens/manage/edits/collection/ManageCollectionEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageIdParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageCollectionEditPage({ params }: IPageIdParam) {
	return params.id ? (
		<ManageCollectionEdit queryId={params.id} />
	) : (
		<NotFoundPage />
	)
}
