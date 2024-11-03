export const usePagination = (
	page: number,
	length: number,
	setPagination: any
) => {
	const goToPreviousPage = () => {
		if (page > 1) {
			const previousPage = (page - 1).toString()
			setPagination((prev: object) => ({
				...prev,
				page: previousPage,
			}))
		}
	}

	const goToNextPage = () => {
		if (page < length) {
			const nextPage = (page + 1).toString()
			setPagination((prev: object) => ({
				...prev,
				page: nextPage,
			}))
		}
	}

	const goToPage = (pageNumber: number) => {
		setPagination((prev: object) => ({
			...prev,
			page: pageNumber.toString(),
		}))
	}

	return { goToPreviousPage, goToNextPage, goToPage }
}
