import { Sort, Status, useTagsQuery } from '@/__generated__/output'

export const useTags = () => {
	const { data } = useTagsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Oldest,
				status: Status.Published,
			},
		},
	})

	return { tags: data?.tags.tags || [], count: data?.tags.count || 0 }
}
