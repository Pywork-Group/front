import Icon from '@/components/ui/common/icon/Icon'
import { useCartStore } from '@/store/cart-store'
import type { FC } from 'react'
import styles from '../CartTable.module.scss'
import type { ICartItem } from '@/store/types/cart.type'

const QuantityButton: FC<{ item: ICartItem }> = ({ item }) => {
	const { changeQuantity } = useCartStore()

	return (
		<div className={styles.quantityBox}>
			<button
				className={styles.quantityBtn}
				onClick={() => changeQuantity(item.id, 'minus')}
				disabled={item.count === 1}
			>
				<Icon name="Minus" />
			</button>
			<span className={styles.quantityCount}>{item.count}</span>
			<button
				className={styles.quantityBtn}
				onClick={() => changeQuantity(item.id, 'plus')}
			>
				<Icon name="Plus" />
			</button>
		</div>
	)
}

export default QuantityButton
