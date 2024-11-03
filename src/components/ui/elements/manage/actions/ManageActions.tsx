import { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import cn from 'clsx'
import { Copy, Pencil, Trash2 } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './ManageActions.module.scss'

const ManageActions: FC<IManageActions & IClassName & { edit: string }> = ({
	className,
	deleteHandler,
	toggleHandler,
	duplicateHandler,
	place,
	edit,
}) => {
	return (
		place === 'admin' && (
			<div className={cn(styles.actions, className && className)}>
				{deleteHandler && (
					<button className={styles.remove} onClick={deleteHandler}>
						<Trash2 />
					</button>
				)}
				{duplicateHandler && (
					<button className={styles.duplicate} onClick={duplicateHandler}>
						<Copy />
					</button>
				)}
				<Link className={styles.edit} href={edit} target='_blank'>
					<Pencil />
				</Link>
			</div>
		)
	)
}

export default ManageActions
