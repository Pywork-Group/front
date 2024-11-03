import {
	GetFolderItemsDocument,
	useDeleteFileOrFolderMutation,
	useUploadFilesMutation,
} from '@/__generated__/output'
import toast from 'react-hot-toast'

export const useStorageActions = (type: 'folder' | 'file') => {
	const [deleteFileOrFolder] = useDeleteFileOrFolderMutation({
		refetchQueries: [GetFolderItemsDocument],
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			toast.success(
				type === 'folder' ? 'Папка успешно удалена' : 'Файл успешно удален'
			)
		},
		onError: () => {
			toast.error(
				type === 'folder'
					? 'Ошибка при удалении папки'
					: 'Ошибка при удалении файла'
			)
		},
	})

	const [editFileOrFolderName] = useDeleteFileOrFolderMutation({
		refetchQueries: [GetFolderItemsDocument],
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			toast.success(
				type === 'folder'
					? 'Название папки успешно изменено'
					: 'Название файла успешно изменено'
			)
		},
		onError: () => {
			toast.error(
				type === 'folder'
					? 'Ошибка при изменении названии папки'
					: 'Ошибка при изменении названии файла'
			)
		},
	})

	const [uploadFiles] = useUploadFilesMutation({
		refetchQueries: [GetFolderItemsDocument],
	})

	return {
		deleteFileOrFolder,
		editFileOrFolderName,
		uploadFiles,
	}
}
