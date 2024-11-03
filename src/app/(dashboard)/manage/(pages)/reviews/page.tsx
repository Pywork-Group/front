import type { Metadata } from 'next'

import ManageReviews from '@/components/screens/manage/pages/reviews/ManageReviews'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageReviewsPage() {
	return <ManageReviews />
}
