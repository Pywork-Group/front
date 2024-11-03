import type { IMenu } from '@/shared/interfaces/menu/menu.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from './HeaderMenu.module.scss'
import HeaderMenuItem from './item/HeaderMenuItem'

const HeaderMenu: FC<{ menu: IMenu; variant: 'burger' | 'main' }> = ({
	menu: { items },
	variant,
}) => {
	return (
		<nav
			className={cn(styles.nav, {
				[styles.burger]: variant === 'burger',
				[styles.main]: variant === 'main',
			})}
		>
			<ul className={styles.list}>
				{items.map((item, index) => (
					<HeaderMenuItem key={index} item={item} />
				))}
			</ul>
		</nav>
	)
}

export default HeaderMenu
