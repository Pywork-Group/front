import type { GetFolderItemsQuery } from '@/__generated__/output'
import type { Dispatch, SetStateAction } from 'react'

export interface IStorageContent {
	pickedFiles: string[]
	data: GetFolderItemsQuery | undefined
	goTo: (folderPath: string) => void
	previous: () => void
	onFileSelect: (fileUrl: string) => void
	isFirst: boolean
	folderPath: string
	setStorageQuery: Dispatch<
		SetStateAction<{
			page: string
			perPage: string
		}>
	>
	page: number
	perPage: number
}
