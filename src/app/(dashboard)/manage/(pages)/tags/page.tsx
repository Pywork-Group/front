import type { Metadata } from 'next'

import ManageTags from '@/components/screens/manage/pages/tags/ManageTags'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageTagsPage() {
	return <ManageTags />
}
