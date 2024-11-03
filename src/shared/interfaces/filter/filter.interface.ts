import type {
	TypeCatalogFilters,
	TypeQueryFilters,
} from '@/shared/types/filter/filter.type'
import type { IPageSearchParam } from '../param/param.interface'

export interface IQueryFilters extends IPageSearchParam {
	queryParams: TypeQueryFilters
	updateQueryFilters: (key: string, value: string | null) => void
}

export interface ICatalogFiltersActions {
	filters: TypeCatalogFilters
}
