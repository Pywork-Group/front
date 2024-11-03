import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import { ADMIN_EDITS } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import type { TypeCharacteristic } from '@/shared/types/characteristic/characteristic.type'
import { CHARACTERISTIC_TYPES_TRANSLATE } from '@/translates/characteristic-types.translate'
import cn from 'clsx'
import type { FC } from 'react'
import styles from './Characteristic.module.scss'
import { isHex } from '@/utils/helpers/is-hex.util'

const Characteristic: FC<TypeCharacteristic & IClassName & IManageActions> = ({
	deleteHandler,
	toggleHandler,
	duplicateHandler,
	place,
	characteristic,
	className,
}) => {
	return (
		<div className={cn(styles.characteristic, className && className)}>
			<div className={styles.wrapper}>
				{isHex(characteristic.name) ? (
					<div
						className={styles.color}
						style={{ backgroundColor: `#${characteristic.name}` }}
					></div>
				) : (
					<h3 className={styles.name}>{characteristic.name}</h3>
				)}
				<span className={styles.type}>
					{CHARACTERISTIC_TYPES_TRANSLATE[characteristic.type]}
				</span>
			</div>
			<ManageActions
				place={place}
				deleteHandler={deleteHandler}
				toggleHandler={toggleHandler}
				duplicateHandler={duplicateHandler}
				edit={ADMIN_EDITS.CHARACTERISTIC(characteristic.id)}
			/>
		</div>
	)
}

export default Characteristic
