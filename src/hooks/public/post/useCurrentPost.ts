import { usePostBySlugQuery } from '@/__generated__/output'

export const useCurrentPost = (slug: string) => {
	const { data, loading, error } = usePostBySlugQuery({
		fetchPolicy: 'no-cache',
		variables: {
			slug,
		},
	})

	return { post: data?.postBySlug, loading, error }
}
