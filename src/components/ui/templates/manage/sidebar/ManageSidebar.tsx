import SearchField from '@/components/ui/common/form/search-field/SearchField'
import type { FC } from 'react'
import styles from './ManageSidebar.module.scss'
import type { IManageSidebar } from './interface/manage-sidebar.interface'
import ManageMenu from './menu/ManageMenu'
import { MANAGE_MENU_DATA } from './menu/data/manage-menu.data'

const ManageSidebar: FC<IManageSidebar> = ({
	className,
	handleSearch,
	searchTerm,
}) => {
	return (
		<div className={className}>
			<SearchField
				size="sm"
				className={styles.search}
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				placeholder="Поиск"
			/>
			<h2 className={styles.title}>Меню</h2>
			<ManageMenu menu={MANAGE_MENU_DATA} />
		</div>
	)
}

export default ManageSidebar
