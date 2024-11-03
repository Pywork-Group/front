import { Sort, useCategoriesQuery } from '@/__generated__/output'
import type { IOption } from '@/components/ui/common/selects/react-select/interface/react-select.interface'

export const useManageSelectCategories = (excludeName?: string) => {
	const { data } = useCategoriesQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Newest,
			},
		},
	})

	return {
		categories: data?.categories.categories
			.filter((category) => category.name !== excludeName)
			.map(
				(category): IOption => ({
					label: category.name,
					value: category.id,
				})
			),
	}
}
