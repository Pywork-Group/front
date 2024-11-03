'use client'

import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Loader from '@/components/ui/elements/loader/Loader'
import { useForBuyers } from '@/hooks/public/pages/useForBuyers'
import type { FC } from 'react'
import styles from './ForBuyers.module.scss'

const ForBuyers: FC = () => {
	const { forBuyers, loading } = useForBuyers()

	return loading ? (
		<Loader />
	) : (
		forBuyers && (
			<Section>
				<Container variant="smallest">
					<div className={styles.wrapper}>
						<div className={styles.fill}>
							<h2 className={styles.title}>{forBuyers.name}</h2>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: forBuyers.content,
								}}
							/>
						</div>
					</div>
				</Container>
			</Section>
		)
	)
}

export default ForBuyers
