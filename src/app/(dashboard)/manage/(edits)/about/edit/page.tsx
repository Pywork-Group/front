import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

const ManageAboutEdit = dynamic(
	() => import('@/components/screens/manage/edits/about/ManageAboutEdit'),
	{
		ssr: false,
	}
)

export default function ManageAboutEditPage() {
	return <ManageAboutEdit />
}
