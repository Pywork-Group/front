import cn from 'clsx'
import type { FC } from 'react'
import styles from './Block.module.scss'
import type { IBlock } from './interface/block.interface'

const Block: FC<IBlock> = ({ block, heading = 'h2', error, className }) => {
	if (!block || !block.heading || !block.content || error) return null

	const HeadingTag = heading as keyof JSX.IntrinsicElements

	return (
		<div className={cn(styles.block, className && className)}>
			<HeadingTag className={styles.heading}>{block.heading}</HeadingTag>
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: block.content }}
			/>
		</div>
	)
}

export default Block
