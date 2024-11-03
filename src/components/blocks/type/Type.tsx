import StaticImage from '@/components/ui/common/image/StaticImage'
import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import { ADMIN_EDITS } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import type { TypeType } from '@/shared/types/type/type.type'
import cn from 'clsx'
import type { FC } from 'react'
import styles from './Type.module.scss'

const Type: FC<TypeType & IClassName & IManageActions> = ({
	type,
	place,
	toggleHandler,
	deleteHandler,
	duplicateHandler,
	className,
}) => {
	return (
		<div className={cn(styles.type, className && className)}>
			<div className={styles.wrapper}>
				<StaticImage
					className={styles.icon}
					src={type.iconPath}
					width={0}
					height={0}
					sizes="100vw"
					alt="Type"
				/>
			</div>
			<ManageActions
				place={place}
				deleteHandler={deleteHandler}
				toggleHandler={toggleHandler}
				duplicateHandler={duplicateHandler}
				edit={ADMIN_EDITS.TYPE(type.id)}
			/>
		</div>
	)
}

export default Type
