import type {
	Sort,
	Status,
} from '@/__generated__/output'
import type { IQueryFilters } from '@/shared/interfaces/filter/filter.interface'

export type TypeYearFilter = 'movie' | 'serial'

export interface IFilterProps
	extends Pick<IQueryFilters, 'updateQueryFilters'> {}

export interface IPublishedFilter extends IFilterProps {
	status?: Status | null
}

export interface ISortFilter extends IFilterProps {
	sort?: Sort | null
}

export interface IPerPageFilter extends IFilterProps {
	perPage?: string | null
}

export interface IYearFilter extends IFilterProps {
	year?: string | null
	type: TypeYearFilter
}
