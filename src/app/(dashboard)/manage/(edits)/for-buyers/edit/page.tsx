import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

const ManageForBuyersEdit = dynamic(
	() => import('@/components/screens/manage/edits/for-buyers/ManageForBuyersEdit'),
	{
		ssr: false,
	}
)

export default function ManageForBuyersEditPage() {
	return <ManageForBuyersEdit />
}
