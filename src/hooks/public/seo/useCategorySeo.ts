import {
	CategorySeoDocument,
	type CategorySeoQuery,
	type CategorySeoQueryVariables,
} from '@/__generated__/output'
import { serverApolloClient } from '@/api/apollo/apollo.client'

export const useCategorySeo = async (slug?: string) => {
	let seo = null
	let error = null

	if (slug) {
		const query = await serverApolloClient.query<
			CategorySeoQuery,
			CategorySeoQueryVariables
		>({
			fetchPolicy: 'no-cache',
			query: CategorySeoDocument,
			variables: {
				slug,
			},
		})
		seo = query.data.categorySeo
		error = query.error
	}

	return {
		seo,
		error,
	}
}
