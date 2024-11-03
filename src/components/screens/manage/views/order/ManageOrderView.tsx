'use client'

import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import { useManageOrderView } from '@/hooks/manage/orders/useManageOrderViews'
import type { FC } from 'react'
import styles from './ManageOrderView.module.scss'

const ManageOrderView: FC<{ queryId: string }> = ({ queryId }) => {
	const { data } = useManageOrderView(queryId)

	return (
		<Section className={styles.edit}>
			<Container>
				<div className={styles.tableWrapper}>
					<h2 className={styles.heading}>Детали заказа</h2>
					<div className={styles.customer}>
						<p className={styles.username}>
							Имя: <span>{data?.orderById.name}</span>
						</p>
						<p className={styles.phone}>
							Телефон: <span>{data?.orderById.phone}</span>
						</p>
					</div>
					<div className={styles.table}>
						<div className={styles.content}>
							<div className={styles.header}>
								<div className={styles.name}>Название</div>
								<div className={styles.quantity}>Количество</div>
								<div className={styles.color}>Цвет</div>
								<div className={styles.size}>Размер</div>
								<div className={styles.price}>Цена за шт.</div>
							</div>
							<div className={styles.items}>
								{data?.orderById.items.map((item) => (
									<div className={styles.item}>
										<div className={styles.name}>{item.product.name}</div>
										<div className={styles.quantity}>{item.quantity}</div>
										<div className={styles.color}>
											{item.color && (
												<span style={{ backgroundColor: item.color }}></span>
											)}
											<span style={{ backgroundColor: 'red' }}></span>
										</div>
										<div className={styles.size}>
											{item.size && <span>{item.size}</span>}
											<span>20</span>
										</div>
										<div className={styles.price}>{item.product.price} ₽</div>
									</div>
								))}
							</div>
						</div>
						<div className={styles.total}>
							<p className={styles.totalPrice}>
								ИТОГО: <span>{data?.orderById.total}</span> ₽
							</p>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default ManageOrderView
