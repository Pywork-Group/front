import { icons } from 'lucide-react'
import type { FC } from 'react'
import type { IIcon } from './interface/icon.interface'

const Icon: FC<IIcon> = ({ name, color, size, className }) => {
	const LucideIcon = icons[name]

	return (
		<LucideIcon color={color} size={size} className={className && className} />
	)
}

export default Icon
