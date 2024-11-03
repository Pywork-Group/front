import { QueryInput, usePostsQuery } from '@/__generated__/output'

export const usePosts = (query: QueryInput) => {
	const { data } = usePostsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query,
		},
	})

	return { posts: data?.posts.posts || [], count: data?.posts.count || 0 }
}
