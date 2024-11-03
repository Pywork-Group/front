import { FolderUp, UploadCloud } from 'lucide-react'
import { useState, type FC } from 'react'
import Modal from '../../../modal/Modal'
import styles from './StorageActions.module.scss'
import StorageCreateFolder from './createFolder/StorageCreateFolder'
import type {
	IStorageActions,
	TypeStorageActions,
} from './interface/storage-actions.interface'
import StorageUpload from './upload/StorageUpload'

const StorageActions: FC<IStorageActions> = ({ folderPath }) => {
	const [isShow, setIsShow] = useState(false)
	const [type, setType] = useState<TypeStorageActions>('file')

	return (
		<div className={styles.actions}>
			<button
				type="button"
				className={styles.upload}
				onClick={() => {
					setType('file')
					setIsShow(true)
				}}
			>
				<UploadCloud />
				Загрузить файл
			</button>
			<button
				type="button"
				className={styles.upload}
				onClick={() => {
					setType('folder')
					setIsShow(true)
				}}
			>
				<FolderUp />
				Добавить папку
			</button>
			{isShow && (
				<Modal closeModal={() => setIsShow(false)}>
					{type === 'file' ? (
						<StorageUpload setIsShow={setIsShow} folderPath={folderPath} />
					) : (
						<StorageCreateFolder
							setIsShow={setIsShow}
							folderPath={folderPath}
						/>
					)}
				</Modal>
			)}
		</div>
	)
}

export default StorageActions
