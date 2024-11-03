import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import StaticImage from '../image/StaticImage'
import styles from './Heading.module.scss'
import type { IHeading } from './interface/heading.interface'

const Heading: FC<PropsWithChildren<IHeading>> = ({ children, className }) => {
	return (
		<h2 className={cn(styles.heading, className && className)}>
			<StaticImage
				src="images/global/heading-left.svg"
				width={430}
				height={1}
				alt="Line"
			/>
			{children}
			<StaticImage
				src="images/global/heading-right.svg"
				width={430}
				height={1}
				alt="Line"
			/>
		</h2>
	)
}

export default Heading
