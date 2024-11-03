'use client'

import Container from '@/components/ui/common/container/Container'
import Heading from '@/components/ui/common/heading/Heading'
import Section from '@/components/ui/common/section/Section'
import { useTags } from '@/hooks/public/tag/useTags'
import type { FC } from 'react'
import styles from './Tags.module.scss'
import Tag from './item/Tag'

const Tags: FC = () => {
	const { tags, count } = useTags()
	if (count === 0) return null

	return (
		<Section className={styles.section}>
			<Heading className={styles.heading}># ПОЛЯРНЫЕ ТЭГИ</Heading>
			<Container variant="lg">
				<div className={styles.tags}>
					<ul className={styles.list}>
						{tags.map((tag, index) => (
							<Tag key={index} tag={tag} place="public" />
						))}
					</ul>
				</div>
			</Container>
		</Section>
	)
}

export default Tags
