import StaticImage from '@/components/ui/common/image/StaticImage'
import { useStorageActions } from '@/hooks/manage/storage/useStorageActions'
import { formatDate } from '@/utils/formats/other/format-date.util'
import { Check, X } from 'lucide-react'
import type { FC } from 'react'
import styles from './StorageFiles.module.scss'
import type { IStorageFiles } from './interface/storage-files.interface'

const StorageFiles: FC<IStorageFiles> = ({
	files,
	pickedFiles,
	onFileSelect,
}) => {
	const { deleteFileOrFolder } = useStorageActions('file')

	return (
		<ul className={styles.files}>
			{files.map((file, index) => (
				<li key={index} className={styles.file}>
					{pickedFiles.includes(`/${file.path}`) && (
						<span className={styles.picked}>
							<Check />
						</span>
					)}
					<button
						type="button"
						className={styles.btn}
						onClick={() => onFileSelect(`/${file.path}`)}
					>
						<div className={styles.preview}>
							<StaticImage
								src={`/${file.path}`}
								width={150}
								height={150}
								alt={file.name}
							/>
						</div>
						<span>{file.name}</span>
						<div className={styles.info}>
							<span>{formatDate(file.createdAt)}</span>
							<span>{file.size}</span>
						</div>
					</button>
					<button
						type="button"
						className={styles.remove}
						onClick={() => {
							deleteFileOrFolder({
								variables: {
									path: file.path,
								},
							})
						}}
					>
						<X />
					</button>
				</li>
			))}
		</ul>
	)
}

export default StorageFiles
