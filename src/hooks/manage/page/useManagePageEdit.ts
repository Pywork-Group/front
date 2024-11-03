import {
	BlockType,
	PageType,
	usePageQuery,
	useUpdatePageMutation,
	type PageInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManagePageEdit = (type: PageType) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<PageInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()

	usePageQuery({
		fetchPolicy: 'no-cache',
		variables: {
			type,
		},
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ page }) => {
			getKeys(page).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updatePage] = useUpdatePageMutation({
		onCompleted: () => {
			push(ADMIN_PAGES.ORDERS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<PageInput> = async (data) => {
		const blocks = data.blocks?.map((block, index) => ({
			...block,
			type:
				type === PageType.Home
					? index === 0
						? BlockType.HomeFirst
						: index === 1
						? BlockType.HomeSecond
						: BlockType.HomeThird
					: undefined,
		}))
		await updatePage({
			variables: {
				type,
				data: {
					seo: data.seo,
					blocks,
				},
			},
		})
	}

	return {
		registerInput,
		control,
		errors,
		handleSubmit,
		onSubmit,
	}
}
