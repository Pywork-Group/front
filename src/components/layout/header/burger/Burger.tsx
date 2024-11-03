import { X } from 'lucide-react'
import type { FC } from 'react'
import HeaderContacts from '../contacts/HeaderContacts'
import HeaderMenu from '../menu/HeaderMenu'
import { HEADER_MENU_DATA } from '../menu/data/header-menu.data'
import HeaderSocial from '../social/HeaderSocial'
import { HEADER_SOCIAL_DATA } from '../social/data/header-social.data'
import styles from './Burger.module.scss'

const Burger: FC<{ close: () => void }> = ({ close }) => {
	return (
		<div className={styles.burger}>
			<button onClick={close} className={styles.close}>
				<X />
			</button>
			<div className={styles.wrapper}>
				<HeaderMenu variant="burger" menu={HEADER_MENU_DATA} />
				<div className={styles.fill}>
					<HeaderSocial variant="burger" social={HEADER_SOCIAL_DATA} />
				</div>
			</div>
		</div>
	)
}

export default Burger
