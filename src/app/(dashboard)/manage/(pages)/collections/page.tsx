import type { Metadata } from 'next'

import ManageCollections from '@/components/screens/manage/pages/collections/ManageCollections'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageCollectionsPage() {
	return <ManageCollections />
}
