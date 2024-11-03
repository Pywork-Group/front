import StaticImage from '@/components/ui/common/image/StaticImage'
import { SITE_NAME } from '@/constants/seo.constants'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link href="/" className={styles.logo}>
			<span className={styles.icon}>
				<StaticImage
					src="/images/global/logo.svg"
					width={45}
					height={47}
					alt={SITE_NAME}
				/>
			</span>
			<span className={styles.name}>СКОРО ПРАЗДНИК</span>
		</Link>
	)
}

export default Logo
