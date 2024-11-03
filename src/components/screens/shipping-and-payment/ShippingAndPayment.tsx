'use client'

import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Loader from '@/components/ui/elements/loader/Loader'
import { useShippingAndPayment } from '@/hooks/public/pages/useShippingAndPayment'
import type { FC } from 'react'
import styles from './ShippingAndPayment.module.scss'

const ShippingAndPayment: FC = () => {
	const { shippingAndPayment, loading } = useShippingAndPayment()

	return loading ? (
		<Loader />
	) : (
		shippingAndPayment && (
			<Section>
				<Container variant="smallest">
					<div className={styles.wrapper}>
						<div className={styles.fill}>
							<h2 className={styles.title}>
								{shippingAndPayment.shippingName}
							</h2>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: shippingAndPayment.shippingContent,
								}}
							/>
						</div>
						<div className={styles.fill}>
							<h2 className={styles.title}>{shippingAndPayment.paymentName}</h2>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: shippingAndPayment.paymentContent,
								}}
							/>
						</div>
					</div>
				</Container>
			</Section>
		)
	)
}

export default ShippingAndPayment
