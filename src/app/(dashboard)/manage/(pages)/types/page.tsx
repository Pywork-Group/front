import type { Metadata } from 'next'

import ManageTypes from '@/components/screens/manage/pages/types/ManageTypes'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageTypesPage() {
	return <ManageTypes />
}
