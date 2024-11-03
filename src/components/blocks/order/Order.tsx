import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import { ADMIN_VIEWS } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import type { IOrder } from '@/shared/interfaces/order/order.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from './Order.module.scss'

const Order: FC<IOrder & IClassName & IManageActions> = ({
	order,
	deleteHandler,
	toggleHandler,
	duplicateHandler,
	place,
	className,
}) => {
	return (
		<div className={cn(styles.order, className && className)}>
			<div className={styles.wrapper}>
				<div className={styles.row}>
					<span className={styles.label}>Имя:</span>
					<span className={styles.value}>{order.name}</span>
				</div>
				<div className={styles.row}>
					<span className={styles.label}>Телефон:</span>
					<span className={styles.value}>{order.phone}</span>
				</div>
			</div>
			<ManageActions
				place={place}
				deleteHandler={deleteHandler}
				toggleHandler={toggleHandler}
				duplicateHandler={duplicateHandler}
				edit={ADMIN_VIEWS.ORDER(order.id)}
			/>
		</div>
	)
}

export default Order
