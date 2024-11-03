import {
	useTagByIdQuery,
	useUpdateTagMutation,
	type TagInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageTagEdit = (queryId: string) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<TagInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const tagId = +queryId

	const { data } = useTagByIdQuery({
		variables: {
			id: tagId,
		},
		fetchPolicy: 'no-cache',
		skip: !tagId,
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ tagById }) => {
			getKeys(tagById).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateTag] = useUpdateTagMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.TAGS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<TagInput> = async (data) => {
		await updateTag({
			variables: {
				id: tagId,
				data,
			},
		})
	}

	return { registerInput, control, errors, handleSubmit, onSubmit, data }
}
