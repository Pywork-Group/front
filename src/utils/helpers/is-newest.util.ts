export const isNewest = (createdAt: string) => {
	const now = new Date()

	const createdDate = new Date(createdAt)

	const differenceInMs = now.getTime() - createdDate.getTime()

	const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24)

	return differenceInDays <= 2
}
