import { Sort, useCollectionsQuery } from '@/__generated__/output'
import type { IOption } from '@/components/ui/common/selects/react-select/interface/react-select.interface'

export const useManageSelectCollections = (excludeName?: string) => {
	const { data } = useCollectionsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Newest,
			},
		},
	})

	return {
		collections: data?.collections.collections
			.filter((collection) => collection.name !== excludeName)
			.map(
				(collection): IOption => ({
					label: collection.name,
					value: collection.id,
				})
			),
	}
}
