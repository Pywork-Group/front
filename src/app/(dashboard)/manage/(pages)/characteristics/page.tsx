import type { Metadata } from 'next'

import ManageCharacteristics from '@/components/screens/manage/pages/characteristic/ManageCharacteristics'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageCharacteristicsPage() {
	return <ManageCharacteristics />
}
