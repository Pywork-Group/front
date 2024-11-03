'use client'

import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Loader from '@/components/ui/elements/loader/Loader'
import { useAbout } from '@/hooks/public/pages/useAbout'
import type { FC } from 'react'
import styles from './About.module.scss'

const About: FC = () => {
	const { about, loading } = useAbout()

	return loading ? (
		<Loader />
	) : (
		about && (
			<Section>
				<Container variant="smallest">
					<div className={styles.wrapper}>
						<div className={styles.fill}>
							<h2 className={styles.title}>{about.name}</h2>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{
									__html: about.content,
								}}
							/>
						</div>
					</div>
				</Container>
			</Section>
		)
	)
}

export default About
