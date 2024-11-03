import { Sort, Status, useProductsQuery } from '@/__generated__/output'

export const useProducts = (isPopular: boolean) => {
	const { data } = useProductsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Newest,
				status: Status.Published,
				perPage: '10',
				page: '1',
			},
			isPopular: isPopular,
		},
	})

	return {
		products: data?.products.products || [],
		count: data?.products.count || 0,
	}
}
