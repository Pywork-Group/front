import { useGetFolderItemsQuery } from '@/__generated__/output'
import { useEffect, useState } from 'react'

export const useStorage = () => {
	const [folderPath, setFolderPath] = useState<string>('uploads')
	const [pathHistory, setPathHistory] = useState<string[]>(['uploads'])
	const pagination = {
		page: '1',
		perPage: '100',
	}
	const [storageQuery, setStorageQuery] = useState(pagination)
	const { data, refetch } = useGetFolderItemsQuery({
		variables: {
			folderPath,
			query: storageQuery,
		},
	})

	useEffect(() => {
		refetch({ folderPath })
	}, [folderPath, refetch])

	const goTo = (folderPath: string) => {
		setPathHistory((prevHistory) => [...prevHistory, folderPath])
		setFolderPath(folderPath)
	}

	const previous = () => {
		if (pathHistory.length > 1) {
			const previousPath = pathHistory[pathHistory.length - 2]
			setPathHistory((prevHistory) => prevHistory.slice(0, -1))
			setFolderPath(previousPath)
		}
	}

	const isFirst = pathHistory.length === 1

	return {
		folderPath,
		data,
		goTo,
		previous,
		isFirst,
		setStorageQuery,
		perPage: +storageQuery.perPage,
		page: +storageQuery.page,
	}
}
