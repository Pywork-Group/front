import type { FC } from 'react'
import styles from './Header.module.scss'
import HeaderButtons from './buttons/HeaderButtons'
import HeaderContacts from './contacts/HeaderContacts'
import Logo from './logo/Logo'
import HeaderMenu from './menu/HeaderMenu'
import { HEADER_MENU_DATA } from './menu/data/header-menu.data'
import HeaderSocial from './social/HeaderSocial'
import { HEADER_SOCIAL_DATA } from './social/data/header-social.data'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<Logo />
				<HeaderMenu variant='main' menu={HEADER_MENU_DATA} />
				<HeaderSocial variant='main' social={HEADER_SOCIAL_DATA} />
			</div>
			<div className={styles.right}>
				<HeaderContacts variant='main' />
				<HeaderButtons />
			</div>
		</header>
	)
}

export default Header
