import StaticImage from '@/components/ui/common/image/StaticImage'
import type { ISocialItem } from '@/shared/interfaces/social/socials.interface'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../HeaderSocial.module.scss'

const HeaderSocialItem: FC<{ item: ISocialItem }> = ({
	item: { href, icon },
}) => {
	return (
		<li className={styles.item}>
			<Link href={href} className={styles.link}>
				<StaticImage
					src={icon.src}
					width={icon.width}
					height={icon.height}
					alt={icon.alt}
				/>
			</Link>
		</li>
	)
}

export default HeaderSocialItem
