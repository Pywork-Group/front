import cn from 'clsx'
import type { FC } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'
import globalStyles from '../Form.module.scss'
import type { IColorPalette } from './interface/color-palette.interface'

const ColorPalette: FC<IColorPalette> = ({
	label,
	className,
	error,
	value,
	onChange,
}) => {
	return (
		<div className={cn(globalStyles.field, className && className)}>
			{label && <label className={globalStyles.label}>{label}</label>}
			{error && <p className={globalStyles.error}>{error.message}</p>}
			<ColorPicker value={value} onChange={onChange} />
		</div>
	)
}

export default ColorPalette
