import { Sort, Status, useCatalogQuery } from '@/__generated__/output'
import type { ICatalogFiltersArguments } from '@/components/ui/templates/catalog/filters/interface/catalog-filters.interface'
import type { TypeSearchParams } from '@/shared/types/param/param.type'
import { useEffect, useState } from 'react'

export const useCatalog = (
	searchParams?: TypeSearchParams,
	categorySlug?: string
) => {
	const [productsQuery, setProductsQuery] = useState<ICatalogFiltersArguments>({
		page: searchParams?.page ? String(searchParams.page) : '1',
		perPage: '18',
		sort: Sort.Newest,
		status: Status.Published,
		types: [],
		sizes: [],
		colors: [],
		hues: [],
		manufacturers: [],
		materials: [],
		collections: searchParams?.collection
			? [searchParams.collection as string]
			: [],
		holidays: searchParams?.holiday ? [searchParams.holiday as string] : [],
		countries: [],
		tags: searchParams?.tag ? [searchParams.tag as string] : [],
	})

	useEffect(() => {
		if (searchParams?.searchTerm) {
			setProductsQuery((prevQuery) => ({
				...prevQuery,
				searchTerm: String(searchParams.searchTerm),
			}))
		} else {
			setProductsQuery((prevQuery) => ({
				...prevQuery,
				searchTerm: '',
			}))
		}
	}, [searchParams?.searchTerm])

	const { data, error, loading } = useCatalogQuery({
		fetchPolicy: 'no-cache',
		variables: {
			data: {
				categorySlug,
				categoryInput: {
					sort: Sort.Newest,
					status: Status.Published,
					...(!categorySlug ? { isParents: true } : {}),
				},
				productInput: productsQuery,
			},
		},
	})

	return {
		block: data?.catalog.block || null,
		rootCategory: data?.catalog.rootCategory || null,
		categories: data?.catalog.categories || [],
		filters: data?.catalog.filters || null,
		products: data?.catalog.products || [],
		productsCount: data?.catalog.productsCount || 0,
		productsQuery,
		setProductsQuery,
		error,
		loading,
	}
}
