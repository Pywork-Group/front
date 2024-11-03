import { CharacteristicType } from '@/__generated__/output'
import type { IOption } from '@/components/ui/common/selects/react-select/interface/react-select.interface'

export const CHARACTERISTIC_TYPES_DATA: IOption[] = [
	{
		label: 'Коллекция',
		value: CharacteristicType.Collection,
	},
	{
		label: 'Страна',
		value: CharacteristicType.Country,
	},
	{
		label: 'Оттенок',
		value: CharacteristicType.Hue,
	},
	{
		label: 'Производитель',
		value: CharacteristicType.Manufacturer,
	},
	{
		label: 'Материал',
		value: CharacteristicType.Material,
	},
	{
		label: 'Цвет',
		value: CharacteristicType.Color,
	},
]
