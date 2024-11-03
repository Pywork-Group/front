import { Sort, useTypesQuery } from '@/__generated__/output'
import type { IOption } from '@/components/ui/common/selects/react-select/interface/react-select.interface'

export const useManageSelectTypes = () => {
	const { data } = useTypesQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Newest,
			},
		},
	})

	return {
		types: data?.types.types.map(
			(type): IOption => ({
				label: type.name,
				value: type.id,
			})
		),
	}
}
