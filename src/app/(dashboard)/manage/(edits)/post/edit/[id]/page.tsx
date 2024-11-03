import type { Metadata } from 'next'

import NotFoundPage from '@/app/not-found'
import ManagePostEdit from '@/components/screens/manage/edits/post/ManagePostEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageIdParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManagePostEditPage({ params }: IPageIdParam) {
	return params.id ? <ManagePostEdit queryId={params.id} /> : <NotFoundPage />
}
