import type { Metadata } from 'next'

import ManageCategories from '@/components/screens/manage/pages/categories/ManageCategories'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageCategoriesPage() {
	return <ManageCategories />
}
