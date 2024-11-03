import type { Metadata } from 'next'

import NotFoundPage from '@/app/not-found'
import ManageCharacteristicEdit from '@/components/screens/manage/edits/characteristic/ManageCharacteristicEdit'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageIdParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageCharacteristicEditPage({ params }: IPageIdParam) {
	return params.id ? (
		<ManageCharacteristicEdit queryId={params.id} />
	) : (
		<NotFoundPage />
	)
}
