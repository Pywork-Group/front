import { Status } from '@/__generated__/output'
import type { ISelectItem } from '@/components/ui/common/selects/custom-select/interface/select.interface'

export const PUBLISH_FILTER_DATA: ISelectItem<Status | null>[] = [
	{
		key: null,
		label: 'All',
	},
	{
		key: Status.Published,
		label: 'Published',
	},
	{
		key: Status.Hidden,
		label: 'Hidden',
	},
]
