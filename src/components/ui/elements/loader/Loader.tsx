import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from './Loader.module.scss'

const Loader: FC<IClassName> = ({ className }) => {
	return (
		<div className={cn(styles.loader, className && className)}>
			<span className={styles.circle}></span>
			<span className={styles.circle}></span>
		</div>
	)
}

export default Loader
