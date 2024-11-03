import type { Metadata } from 'next'

import NotFoundPage from '@/app/not-found'
import ManageReviewEdit from '@/components/screens/manage/edits/review/ManageReviewEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageIdParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageReviewEditPage({ params }: IPageIdParam) {
	return params.id ? <ManageReviewEdit queryId={params.id} /> : <NotFoundPage />
}
