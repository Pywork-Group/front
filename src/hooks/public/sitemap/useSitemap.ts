import {
	SitemapDocument,
	type SitemapQuery,
	type SitemapQueryVariables,
} from '@/__generated__/output'
import { serverApolloClient } from '@/api/apollo/apollo.client'

export const useSitemap = async () => {
	const { data, error } = await serverApolloClient.query<
		SitemapQuery,
		SitemapQueryVariables
	>({
		fetchPolicy: 'no-cache',
		query: SitemapDocument,
	})

	return {
		categories: data.sitemap.categoriesSlugs || [],
		products: data.sitemap.productsSlugs || [],
		posts: data.sitemap.postsSlugs || [],
		error,
	}
}
