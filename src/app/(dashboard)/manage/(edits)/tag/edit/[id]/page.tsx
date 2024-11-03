import type { Metadata } from 'next'

import NotFoundPage from '@/app/not-found'
import ManageTagEdit from '@/components/screens/manage/edits/tag/ManageTagEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageIdParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageTagEditPage({ params }: IPageIdParam) {
	return params.id ? <ManageTagEdit queryId={params.id} /> : <NotFoundPage />
}
