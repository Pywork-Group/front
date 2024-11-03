import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import styles from './Select.module.scss'
import type { ISelect } from './interface/select.interface'

function Select<K>({ data, onChange, value, label }: ISelect<K>) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.wrapper}>
			{label && <span className={styles.label}>{label}</span>}
			<div className={styles.select}>
				<button
					className={cn(styles.opener, {
						[styles.active]: isOpen,
					})}
					onClick={() => setIsOpen(!isOpen)}
				>
					{value?.label || 'Select'}
					<ChevronDown />
				</button>
				{isOpen && (
					<ul className={styles.list}>
						{data
							.filter((item) => item.key !== value?.key)
							.map((item, index) => (
								<li key={index} className={styles.item}>
									<button
										className={styles.button}
										onClick={() => {
											onChange(item)
											setIsOpen(false)
										}}
										disabled={item.key === value?.key}
									>
										{item.label}
									</button>
								</li>
							))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default Select
