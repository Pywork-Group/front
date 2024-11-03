import { Sort, useHolidaysQuery } from '@/__generated__/output'
import type { IOption } from '@/components/ui/common/selects/react-select/interface/react-select.interface'

export const useManageSelectHolidays = (excludeName?: string) => {
	const { data } = useHolidaysQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Newest,
			},
		},
	})

	return {
		holidays: data?.holidays.holidays
			.filter((holiday) => holiday.name !== excludeName)
			.map(
				(holiday): IOption => ({
					label: holiday.name,
					value: holiday.id,
				})
			),
	}
}
