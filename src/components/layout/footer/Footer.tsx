import type { FC } from 'react'
import styles from './Footer.module.scss'
import FooterContent from './content/FooterContent'
import FooterCopyright from './copyright/FooterCopyright'
import FooterMap from './map/FooterMap'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<FooterMap />
			<FooterContent />
			<FooterCopyright />
		</footer>
	)
}

export default Footer
