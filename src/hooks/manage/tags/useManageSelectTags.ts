import { Sort, useTagsQuery } from '@/__generated__/output'
import type { IOption } from '@/components/ui/common/selects/react-select/interface/react-select.interface'

export const useManageSelectTags = () => {
	const { data } = useTagsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Newest,
			},
		},
	})

	return {
		tags: data?.tags.tags.map(
			(tag): IOption => ({
				label: tag.name,
				value: tag.id,
			})
		),
	}
}
