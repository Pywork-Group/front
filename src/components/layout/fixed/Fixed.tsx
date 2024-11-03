import type { FC } from 'react'
import styles from './Fixed.module.scss'
import Social from './social/Social'

const Fixed: FC = () => {
	return (
		<div className={styles.fixed}>
			<Social />
		</div>
	)
}

export default Fixed
