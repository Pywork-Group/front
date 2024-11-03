import {
	PostsDocument,
	useCreatePostMutation,
	useDeletePostMutation,
	useDuplicatePostMutation,
	usePostsQuery,
	useTogglePostMutation,
	type QueryInput,
} from '@/__generated__/output'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManagePosts = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = usePostsQuery({
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

	const [createPost] = useCreatePostMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createPost }) => {
			toast.success('Пост успешно создан.')
			push(ADMIN_EDITS.POST(createPost.id))
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deletePost] = useDeletePostMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [PostsDocument],
		onCompleted: () => {
			toast.success('Пост успешно удален.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [togglePost] = useTogglePostMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [PostsDocument],
		onCompleted: () => {
			toast.success('Статус поста успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [duplicatePost] = useDuplicatePostMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [PostsDocument],
		onCompleted: () => {
			toast.success('Дубликат поста создана.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		posts: data?.posts.posts || [],
		count: data?.posts.count || 0,
		createPost,
		deletePost,
		togglePost,
		duplicatePost,
	}
}
