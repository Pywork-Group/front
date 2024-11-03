import type { Metadata } from 'next'

import ManagePosts from '@/components/screens/manage/pages/posts/ManagePosts'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManagePostsPage() {
	return <ManagePosts />
}
