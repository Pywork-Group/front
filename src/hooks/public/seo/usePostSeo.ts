import {
	PostSeoDocument,
	type PostSeoQuery,
	type PostSeoQueryVariables,
} from '@/__generated__/output'
import { serverApolloClient } from '@/api/apollo/apollo.client'

export const usePostSeo = async (slug?: string) => {
	let seo = null
	let error = null

	if (slug) {
		const query = await serverApolloClient.query<
			PostSeoQuery,
			PostSeoQueryVariables
		>({
			fetchPolicy: 'no-cache',
			query: PostSeoDocument,
			variables: {
				slug,
			},
		})
		seo = query.data.postSeo
		error = query.error
	}

	return {
		seo,
		error,
	}
}
