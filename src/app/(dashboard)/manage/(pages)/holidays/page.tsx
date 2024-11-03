import type { Metadata } from 'next'

import ManageHolidays from '@/components/screens/manage/pages/holidays/ManageHolidays'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageHolidaysPage() {
	return <ManageHolidays />
}
