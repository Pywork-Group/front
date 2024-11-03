import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

const ManageShippingAndPaymentEdit = dynamic(
	() =>
		import(
			'@/components/screens/manage/edits/shipping-and-payment/ManageShippingAndPaymentEdit'
		),
	{
		ssr: false,
	}
)

export default function ManageShippingAndPaymentEditPage() {
	return <ManageShippingAndPaymentEdit />
}
