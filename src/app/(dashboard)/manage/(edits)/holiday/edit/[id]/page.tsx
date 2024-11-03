import type { Metadata } from 'next'

import NotFoundPage from '@/app/not-found'
import ManageHolidayEdit from '@/components/screens/manage/edits/holiday/ManageHolidayEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageIdParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageHolidayEditPage({ params }: IPageIdParam) {
	return params.id ? (
		<ManageHolidayEdit queryId={params.id} />
	) : (
		<NotFoundPage />
	)
}
