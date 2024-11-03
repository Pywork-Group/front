import type { Metadata } from 'next'

import ManageProducts from '@/components/screens/manage/pages/products/ManageProducts'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function ManageProductsPage({ searchParams }: IPageSearchParam) {
	return <ManageProducts searchParams={searchParams} />
}
