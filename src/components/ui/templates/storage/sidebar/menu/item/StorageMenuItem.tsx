import Icon from '@/components/ui/common/icon/Icon'
import type { FC } from 'react'
import styles from '../../StorageSidebar.module.scss'
import type { IStorageMenuItem } from '../interface/storage-menu.interface'

const StorageMenuItem: FC<{ item: IStorageMenuItem }> = ({ item }) => {
	return (
		<li className={styles.item}>
			<button type="button" className={styles.link}>
				<Icon name={item.icon} />
				{item.label}
			</button>
		</li>
	)
}

export default StorageMenuItem
