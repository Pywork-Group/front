import type { FC } from 'react'
import styles from './CartWrapper.module.scss'
import CartForm from './form/CartForm'
import type { ICartWrapper } from './interface/cart-wrapper.interface'
import CartTable from './table/CartTable'

const CartWrapper: FC<ICartWrapper> = ({ closeCart }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.fill}>
					<button onClick={closeCart} type="button" className={styles.close}>
						<span></span>
						<span></span>
					</button>
					<CartTable />
					<CartForm />
				</div>
			</div>
		</div>
	)
}

export default CartWrapper
