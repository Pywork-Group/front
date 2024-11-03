'use client'

import '@/assets/styles/yandex-map.scss'
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import type { FC } from 'react'
import styles from '../Footer.module.scss'

const FooterMap: FC = () => {
	const geoMetry = [55.896246, 37.727625]
	const defaultState = {
		center: geoMetry,
		zoom: 17,
		controls: [],
	}
	const error = console.error
	console.error = (...args: any) => {
		if (/defaultProps/.test(args[0])) return
		error(...args)
	}
	return (
		<YMaps>
			<Map
				className={styles.map}
				style={{ width: '100%', height: 'auto' }}
				defaultState={defaultState}
			>
				<Placemark geometry={geoMetry} />
			</Map>
		</YMaps>
	)
}

export default FooterMap
