import { Sort, useCharacteristicsQuery } from '@/__generated__/output'
import type { IOption } from '@/components/ui/common/selects/react-select/interface/react-select.interface'
import { CHARACTERISTIC_TYPES_TRANSLATE } from '@/translates/characteristic-types.translate'
import { isHex } from '@/utils/helpers/is-hex.util'

export const useManageSelectCharacteristics = () => {
	const { data } = useCharacteristicsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				sort: Sort.Newest,
			},
		},
	})

	return {
		characteristics: data?.characteristics.characteristics.map(
			(characteristic): IOption => ({
				label: isHex(characteristic.name)
					? `${CHARACTERISTIC_TYPES_TRANSLATE[characteristic.type]} -`
					: `${CHARACTERISTIC_TYPES_TRANSLATE[characteristic.type]}-${
							characteristic.name
					  }`,
				value: characteristic.id,
				color: isHex(characteristic.name) ? `#${characteristic.name}` : '',
			})
		),
	}
}
