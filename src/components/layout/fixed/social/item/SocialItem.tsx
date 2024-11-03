import StaticImage from '@/components/ui/common/image/StaticImage'
import type { ISocialItem } from '@/shared/interfaces/social/socials.interface'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../Social.module.scss'

const SocialItem: FC<{ item: ISocialItem }> = ({ item: { icon, href } }) => {
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

export default SocialItem
