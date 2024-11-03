import StaticImage from '@/components/ui/common/image/StaticImage'
import type { FC } from 'react'
import styles from '../Footer.module.scss'

const FooterCopyright: FC = () => {
	return (
		<div className={styles.copyright}>
			<StaticImage
				src="/images/icons/copyright.png"
				width={19}
				height={19}
				alt="Copyright"
			/>
			2023-2024 Все права защищены
		</div>
	)
}

export default FooterCopyright
