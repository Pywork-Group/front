import { CharacteristicType } from '@/__generated__/output'
import type { ICurrentProduct } from '@/shared/interfaces/product/product.interface'
import { CHARACTERISTIC_TYPES_TRANSLATE } from '@/translates/characteristic-types.translate'
import ntc from 'ntcjs'
import type { FC } from 'react'
import styles from './ProductSingleAboutCharacteristics.module.scss'

const ProductSingleAboutCharacteristics: FC<ICurrentProduct> = ({
	product,
}) => {
	const groupedCharacteristics = product.characteristics.reduce((acc, item) => {
		const label = CHARACTERISTIC_TYPES_TRANSLATE[item.type]
		if (acc[label]) {
			acc[label].push(item.name)
		} else {
			acc[label] = [item.name]
		}
		return acc
	}, {} as Record<string, string[]>)

	return (
		<div className={styles.characteristics}>
			<h2 className={styles.title}>Характеристики</h2>
			{Object.keys(groupedCharacteristics).length > 0 && (
				<ul className={styles.list}>
					{Object.entries(groupedCharacteristics).map(([label, values]) => (
						<li className={styles.item} key={label}>
							<span className={styles.label}>{label}:</span>
							<span className={styles.value}>
								{label ===
								CHARACTERISTIC_TYPES_TRANSLATE[CharacteristicType.Color]
									? values.map((value) => (
											<span
												className={styles.colorCircle}
												style={{
													backgroundColor: `#${value}`,
													border:
														ntc.name(`#${value}`)[1] === 'White'
															? `1px solid '#000'`
															: 'none',
												}}
											></span>
									  ))
									: values.join(', ')}
							</span>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default ProductSingleAboutCharacteristics
