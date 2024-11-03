import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import { ADMIN_EDITS } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import type { TypeCategory } from '@/shared/types/category/category.type'
import cn from 'clsx'
import type { FC } from 'react'
import styles from './Category.module.scss'

const Category: FC<TypeCategory & IClassName & IManageActions> = ({
	deleteHandler,
	toggleHandler,
	duplicateHandler,
	place,
	category,
	className,
}) => {
	return (
		<div className={cn(styles.category, className && className)}>
			<div className={styles.wrapper}>
				<h3 className={styles.name}>{category.name}</h3>
			</div>
			<ManageActions
				place={place}
				deleteHandler={deleteHandler}
				toggleHandler={toggleHandler}
				duplicateHandler={duplicateHandler}
				edit={ADMIN_EDITS.CATEGORY(category.id)}
			/>
		</div>
	)
}

export default Category
