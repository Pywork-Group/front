import type { Metadata } from 'next'

import ManageRubrics from '@/components/screens/manage/pages/rubrics/ManageRubrics'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageRubricsPage() {
	return <ManageRubrics />
}
