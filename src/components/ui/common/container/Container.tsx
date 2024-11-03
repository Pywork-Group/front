import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import styles from './Container.module.scss'
import type { IContainer } from './interface/container.interface'

const Container: FC<PropsWithChildren<IContainer>> = ({
	children,
	variant = 'md',
	className,
}) => {
	return (
		<div
			className={cn(
				styles.container,
				{
					[styles.extra]: variant === 'extra',
					[styles.lg]: variant === 'lg',
					[styles.md]: variant === 'md',
					[styles.sm]: variant === 'sm',
					[styles.smallest]: variant === 'smallest',
				},
				className && className
			)}
		>
			{children}
		</div>
	)
}

export default Container
