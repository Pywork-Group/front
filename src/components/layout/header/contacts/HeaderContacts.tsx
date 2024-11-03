import StaticImage from '@/components/ui/common/image/StaticImage'
import CallBtn from '@/components/ui/elements/call-btn/CallBtn'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './HeaderContacts.module.scss'

const HeaderContacts: FC<{ variant: 'burger' | 'main' }> = ({ variant }) => {
	return (
		<ul
			className={cn(styles.list, {
				[styles.burger]: variant === 'burger',
				[styles.main]: variant === 'main',
			})}
		>
			<li className={styles.item}>
				<Link href="tel: 79774404060" className={styles.link}>
					+7 (977) 440-40-60
				</Link>
			</li>
			<li className={styles.item}>
				<CallBtn className={styles.call}>
					<StaticImage
						src="/images/icons/phone.svg"
						width={20}
						height={20}
						alt="Phone"
					/>
					Обратный звонок
				</CallBtn>
			</li>
		</ul>
	)
}

export default HeaderContacts
