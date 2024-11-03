import Container from '@/components/ui/common/container/Container'
import type { FC } from 'react'
import styles from './FooterContent.module.scss'
import FooterContact from './contact/FooterContact'
import FooterMenu from './menu/FooterMenu'
import {
	FOOTER_MENU_DATA_1,
	FOOTER_MENU_DATA_2,
	FOOTER_MENU_DATA_3,
} from './menu/data/footer-menu.data'

const FooterContent: FC = () => {
	return (
		<div className={styles.content}>
			<Container variant="sm">
				<div className={styles.fill}>
					<div className={styles.left}>
						<FooterMenu menu={FOOTER_MENU_DATA_1} />
						<FooterMenu menu={FOOTER_MENU_DATA_2} />
						<FooterMenu menu={FOOTER_MENU_DATA_3} />
					</div>
					<div className={styles.right}>
						<FooterContact />
					</div>
				</div>
			</Container>
		</div>
	)
}

export default FooterContent
