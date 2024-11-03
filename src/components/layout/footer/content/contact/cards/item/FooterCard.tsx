import StaticImage from '@/components/ui/common/image/StaticImage'
import type { FC } from 'react'
import styles from '../../../FooterContent.module.scss'
import type { IFooterCard } from '../interface/footer-card.interface'

const FooterCard: FC<{ card: IFooterCard }> = ({ card: { icon } }) => {
	return (
		<li className={styles.card}>
			<StaticImage
				src={icon.src}
				width={icon.width}
				height={icon.height}
				alt={icon.alt}
			/>
		</li>
	)
}

export default FooterCard
