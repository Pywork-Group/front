'use client'

import Select from '@/components/ui/common/selects/custom-select/Select'
import type { FC } from 'react'
import type { IPerPageFilter } from '../interface/filters.interface'
import { PER_PAGE_FILTER_DATA } from './data/per-page-filter.data'

const PerPageFilter: FC<IPerPageFilter> = ({ updateQueryFilters, perPage }) => {
	return (
		<Select<string>
			label="Per Page"
			data={PER_PAGE_FILTER_DATA}
			onChange={(value) => {
				updateQueryFilters('perPage', value.key)
			}}
			value={PER_PAGE_FILTER_DATA.find((value) => value.key === perPage)}
		/>
	)
}

export default PerPageFilter
