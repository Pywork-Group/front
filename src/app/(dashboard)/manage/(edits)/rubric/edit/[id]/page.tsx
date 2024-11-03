import type { Metadata } from 'next'

import NotFoundPage from '@/app/not-found'
import ManageRubricEdit from '@/components/screens/manage/edits/rubric/ManageRubricEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageIdParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageRubricEditPage({ params }: IPageIdParam) {
	return params.id ? <ManageRubricEdit queryId={params.id} /> : <NotFoundPage />
}
