import Icon from '@/components/ui/common/icon/Icon'
import { useCartStore } from '@/store/cart-store'
import type { FC } from 'react'
import styles from './CartTable.module.scss'
import QuantityButton from './quantity/QuantityButton'

const CartTable: FC = () => {
	const { cart, remove, totalPrice } = useCartStore()

	return (
		<div className={styles.tableWrapper}>
			<h2 className={styles.heading}>Ваш заказ</h2>
			<div className={styles.table}>
				<div className={styles.content}>
					<div className={styles.header}>
						<div className={styles.name}>Название</div>
						<div className={styles.color}>Цвет</div>
						<div className={styles.size}>Размер</div>
						<div className={styles.quantity}>Количество</div>
						<div className={styles.price}>Цена за шт.</div>
						<div className={styles.remove}></div>
					</div>
					<div className={styles.items}>
						{cart.map((item) => (
							<div key={item.id} className={styles.item}>
								<div className={styles.name}>{item.name}</div>
								<div className={styles.color}>
									{item.selectedColor && (
										<span
											style={{ backgroundColor: item.selectedColor }}
										></span>
									)}
								</div>
								<div className={styles.size}>
									{item.selectedSize && <span>{item.selectedSize}</span>}
								</div>
								<div className={styles.quantity}>
									<QuantityButton item={item} />
								</div>
								<div className={styles.price}>{item.price} ₽</div>
								<div className={styles.remove}>
									<button
										className={styles.removeBtn}
										onClick={() => remove(item.id)}
									>
										<Icon name="Trash2" />
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className={styles.total}>
					<p className={styles.totalPrice}>
						ИТОГО: <span>{totalPrice()}</span> ₽
					</p>
				</div>
			</div>
		</div>
	)
}

export default CartTable
