'use client'

import { Status } from '@/__generated__/output'
import Select from '@/components/ui/common/selects/custom-select/Select'
import type { FC } from 'react'
import type { IPublishedFilter } from '../interface/filters.interface'
import { PUBLISH_FILTER_DATA } from './data/published-filter.data'

const PublishedFilter: FC<IPublishedFilter> = ({
	updateQueryFilters,
	status,
}) => {
	return (
		<Select<Status | null>
			label="Visibility"
			data={PUBLISH_FILTER_DATA}
			onChange={(value) => {
				updateQueryFilters('status', value.key)
			}}
			value={PUBLISH_FILTER_DATA.find((value) => value.key === status)}
		/>
	)
}

export default PublishedFilter
