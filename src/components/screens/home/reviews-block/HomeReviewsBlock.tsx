import { BlockType } from '@/__generated__/output'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Block from '@/components/ui/elements/block/Block'
import { useBlock } from '@/hooks/public/blocks/useBlock'
import type { FC } from 'react'
import styles from './HomeReviewsBlock.module.scss'

const HomeReviewsBlock: FC = async () => {
	const { block, error } = await useBlock(BlockType.HomeSecond)

	if(!block || error) return null

	return (
		<Section className={styles.section}>
			<Container variant="sm">
				<Block block={block} error={error} />
			</Container>
		</Section>
	)
}

export default HomeReviewsBlock
