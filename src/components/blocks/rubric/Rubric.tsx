import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import { ADMIN_EDITS } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import type { IRubric } from '@/shared/interfaces/rubric/rubric.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from './Rubric.module.scss'

const Rubric: FC<IRubric & IClassName & IManageActions> = ({
	deleteHandler,
	toggleHandler,
	duplicateHandler,
	place,
	rubric,
	className,
}) => {
	return (
		<div className={cn(styles.rubric, className && className)}>
			<div className={styles.wrapper}>
				<h3 className={styles.name}>{rubric.name}</h3>
			</div>
			<ManageActions
				place={place}
				deleteHandler={deleteHandler}
				toggleHandler={toggleHandler}
				duplicateHandler={duplicateHandler}
				edit={ADMIN_EDITS.RUBRIC(rubric.id)}
			/>
		</div>
	)
}

export default Rubric
