import {
	ProductSeoDocument,
	type ProductSeoQuery,
	type ProductSeoQueryVariables,
} from '@/__generated__/output'
import { serverApolloClient } from '@/api/apollo/apollo.client'

export const useProductSeo = async (slug?: string) => {
	let seo = null
	let error = null

	if (slug) {
		const query = await serverApolloClient.query<
			ProductSeoQuery,
			ProductSeoQueryVariables
		>({
			fetchPolicy: 'no-cache',
			query: ProductSeoDocument,
			variables: {
				slug,
			},
		})
		seo = query.data.productSeo
		error = query.error
	}

	return {
		seo,
		error,
	}
}
