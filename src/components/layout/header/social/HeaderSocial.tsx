import type { ISocial } from '@/shared/interfaces/social/socials.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from './HeaderSocial.module.scss'
import HeaderSocialItem from './item/HeaderSocialItem'

const HeaderSocial: FC<{ social: ISocial; variant: 'burger' | 'main' }> = ({
	social: { items },
	variant,
}) => {
	return (
		<ul
			className={cn(styles.list, {
				[styles.burger]: variant === 'burger',
				[styles.main]: variant === 'main',
			})}
		>
			{items.map((item, index) => (
				<HeaderSocialItem key={index} item={item} />
			))}
		</ul>
	)
}

export default HeaderSocial
