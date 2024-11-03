import { BlockType } from '@/__generated__/output'
import Container from '@/components/ui/common/container/Container'
import Heading from '@/components/ui/common/heading/Heading'
import Section from '@/components/ui/common/section/Section'
import Block from '@/components/ui/elements/block/Block'
import { useBlock } from '@/hooks/public/blocks/useBlock'
import type { FC } from 'react'
import styles from './Advantages.module.scss'
import AdvantagesMenu from './menu/AdvantagesMenu'

const Advantages: FC = async () => {
	const { block, error } = await useBlock(BlockType.HomeFirst)

	if (!block || error) return null

	return (
		<Section className={styles.section}>
			<Heading className={styles.heading}>ПРЕИМУЩЕСТВА</Heading>
			<Container variant="md">
				<div className={styles.advantages}>
					<Block
						block={block}
						error={error}
						heading="h1"
						className={styles.info}
					/>
					<AdvantagesMenu />
				</div>
			</Container>
		</Section>
	)
}

export default Advantages
