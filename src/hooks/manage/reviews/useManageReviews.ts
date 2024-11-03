import {
	ReviewsDocument,
	useCreateReviewMutation,
	useDeleteReviewMutation,
	useDuplicateReviewMutation,
	useReviewsQuery,
	useToggleReviewMutation,
	type QueryInput,
} from '@/__generated__/output'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageReviews = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useReviewsQuery({
		variables: {
			query: {
				...queryParams,
				searchTerm: debounceSearch,
			},
		},
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [createReview] = useCreateReviewMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createReview }) => {
			toast.success('Отзыв успешно создан.')
			push(ADMIN_EDITS.REVIEW(createReview.id))
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteReview] = useDeleteReviewMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [ReviewsDocument],
		onCompleted: () => {
			toast.success('Отзыв успешно удален.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleReview] = useToggleReviewMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [ReviewsDocument],
		onCompleted: () => {
			toast.success('Статус отзыва успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [duplicateReview] = useDuplicateReviewMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [ReviewsDocument],
		onCompleted: () => {
			toast.success('Дубликат отзыва создан.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		reviews: data?.reviews.reviews || [],
		count: data?.reviews.count || 0,
		createReview,
		deleteReview,
		toggleReview,
		duplicateReview,
	}
}
