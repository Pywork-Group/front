import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'
import type { IButton } from './interface/button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	buttonClassName,
	wrapperClassName,
	...rest
}) => {
	return (
		<div className={cn(styles.field, wrapperClassName && wrapperClassName)}>
			<button
				className={cn(styles.button, buttonClassName && buttonClassName)}
				{...rest}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
