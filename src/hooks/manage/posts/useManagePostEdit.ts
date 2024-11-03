import {
	usePostByIdQuery,
	useUpdatePostMutation,
	type PostInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManagePostEdit = (queryId: string) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<PostInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const postId = +queryId

	const { data } = usePostByIdQuery({
		variables: {
			id: postId,
		},
		fetchPolicy: 'no-cache',
		skip: !postId,
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ postById }) => {
			const { rubrics, ...response } = postById

			const selectedRubrics = rubrics.map((rubric) => ({
				name: rubric.name,
				value: rubric.id,
			}))

			setValue('rubrics', selectedRubrics)

			getKeys(response).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updatePost] = useUpdatePostMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.POSTS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<PostInput> = async (data) => {
		await updatePost({
			variables: {
				id: postId,
				data,
			},
		})
	}

	return { registerInput, control, errors, handleSubmit, onSubmit, data }
}
