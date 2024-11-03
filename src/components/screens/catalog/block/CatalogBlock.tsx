import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Block from '@/components/ui/elements/block/Block'
import type { IBlock } from '@/components/ui/elements/block/interface/block.interface'
import type { FC } from 'react'
import styles from '../Catalog.module.scss'

const CatalogBlock: FC<IBlock> = ({ block }) => {
	return (
		<Section className={styles.block}>
			<Container>
				<Block block={block} />
			</Container>
		</Section>
	)
}

export default CatalogBlock
