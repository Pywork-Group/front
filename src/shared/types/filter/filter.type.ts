import type { CatalogQuery, QueryInput } from '@/__generated__/output'

export type TypeQueryFilters = QueryInput

export type TypeCatalogFilters = CatalogQuery['catalog']['filters']

export type TypeCatalogRangeFilter = Pick<TypeCatalogFilters, 'price'>
export type TypeCatalogRangeFilters = Pick<
	TypeCatalogRangeFilter['price'],
	'min' | 'max'
>

export type TypeCatalogRangeFiltersErrors = {
	[K in keyof TypeCatalogRangeFilters]: string
}
