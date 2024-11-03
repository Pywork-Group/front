import cn from 'clsx'
import { X } from 'lucide-react'
import type { FC, PropsWithChildren } from 'react'
import { useRef } from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'
import type { IModal } from './interface/modal.interface'

const Modal: FC<PropsWithChildren<IModal>> = ({
	children,
	className,
	closeModal,
}) => {
	const modalRef = useRef<HTMLElement | null>(document.getElementById('modal'))

	if (!modalRef.current) return null

	return ReactDOM.createPortal(
		<div className={cn(styles.overlay, className && className)}>
			<div className={styles.window}>
				<button onClick={closeModal} className={styles.close}>
					<X />
				</button>
				{children}
			</div>
		</div>,
		modalRef.current
	)
}

export default Modal
