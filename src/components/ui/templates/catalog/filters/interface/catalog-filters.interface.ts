import type {
	FiltersItem,
	ImageFilter,
	QueryProductInput,
} from '@/__generated__/output'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { ICatalogFiltersActions } from '@/shared/interfaces/filter/filter.interface'
import type { TypeCatalogFilters } from '@/shared/types/catalog/catalog.type'
import type { TypeProductDisplay } from '@/shared/types/product/product.type'
import type { Dispatch, SetStateAction } from 'react'

export interface ICatalogSort {
	productsQuery: ICatalogFiltersArguments
	setProductsQuery: Dispatch<SetStateAction<ICatalogFiltersArguments>>
}

export interface ICatalogDisplay {
	display: TypeProductDisplay
	setDisplay: Dispatch<SetStateAction<TypeProductDisplay>>
	setProductsQuery: Dispatch<SetStateAction<ICatalogFiltersArguments>>
}

export interface ICatalogFiltersArguments extends QueryProductInput {
	perPage: NonNullable<QueryProductInput['perPage']>
	page: NonNullable<QueryProductInput['page']>
	sort: NonNullable<QueryProductInput['sort']>
	status: NonNullable<QueryProductInput['status']>
	types: NonNullable<QueryProductInput['types']>
	sizes: NonNullable<QueryProductInput['sizes']>
	colors: NonNullable<QueryProductInput['colors']>
	hues: NonNullable<QueryProductInput['hues']>
	manufacturers: NonNullable<QueryProductInput['manufacturers']>
	materials: NonNullable<QueryProductInput['materials']>
	collections: NonNullable<QueryProductInput['collections']>
	holidays: NonNullable<QueryProductInput['holidays']>
	countries: NonNullable<QueryProductInput['countries']>
	tags: NonNullable<QueryProductInput['tags']>
}

export interface ICatalogFilters extends IClassName {
	filters: TypeCatalogFilters | null
	productsQuery: ICatalogFiltersArguments
	setProductsQuery: Dispatch<SetStateAction<ICatalogFiltersArguments>>
	closeFilters: () => void
}

export interface ICatalogFiltersItem {
	heading: string
	variant: keyof Pick<
		ICatalogFiltersArguments,
		| 'colors'
		| 'sizes'
		| 'hues'
		| 'types'
		| 'manufacturers'
		| 'materials'
		| 'collections'
		| 'holidays'
		| 'countries'
	>
	items: FiltersItem[]
	productsQuery: ICatalogFiltersArguments
	setProductsQuery: Dispatch<SetStateAction<ICatalogFiltersArguments>>
}

export interface ICatalogFiltersImageItem {
	heading: string
	items: ImageFilter[]
	variant: keyof Pick<
		ICatalogFiltersArguments,
		| 'colors'
		| 'sizes'
		| 'hues'
		| 'types'
		| 'manufacturers'
		| 'materials'
		| 'collections'
		| 'holidays'
		| 'countries'
	>
	productsQuery: ICatalogFiltersArguments
	setProductsQuery: Dispatch<SetStateAction<ICatalogFiltersArguments>>
}

export interface ICatalogFiltersPrice extends ICatalogFiltersActions {
	filters: TypeCatalogFilters
	productsQuery: ICatalogFiltersArguments
	setProductsQuery: Dispatch<SetStateAction<ICatalogFiltersArguments>>
}
