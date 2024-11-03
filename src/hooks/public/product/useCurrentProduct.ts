import { useProductBySlugQuery } from '@/__generated__/output'

export const useCurrentProduct = (slug: string) => {
	const { data, error, loading } = useProductBySlugQuery({
		variables: {
			slug,
		},
	})

	return {
		product: data?.productBySlug?.product || null,
		similarProducts: data?.productBySlug?.similarProducts || [],
		error,
		loading
	}
}
