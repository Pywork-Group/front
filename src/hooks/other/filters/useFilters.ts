import { Sort } from '@/__generated__/output'
import type { TypeQueryFilters } from '@/shared/types/filter/filter.type'
import { useState } from 'react'
import { useSearchFilter } from './useSearchFilter'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'

export const useFilters = ({ searchParams }: IPageSearchParam) => {
	const { searchTerm, debounceSearch, handleSearch } = useSearchFilter()

	const [queryParams, setQueryParams] = useState<TypeQueryFilters>({
		page: searchParams?.page ? String(searchParams.page) : '1',
		perPage: searchParams?.perPage ? String(searchParams.perPage) : '20',
		status: null,
		searchTerm,
		sort: Sort.Newest,
	})

	const updateQueryFilters = (key: string, value: string | null) => {
		setQueryParams((prevParams) => ({ ...prevParams, [key]: value }))
	}

	return {
		updateQueryFilters,
		handleSearch,
		queryParams,
		searchTerm,
		debounceSearch,
		setQueryParams
	}
}
