import {
	useProductByIdQuery,
	useUpdateProductMutation,
	type ProductInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useFieldArray, useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageProductEdit = (queryId: string) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<ProductInput>({
		mode: 'onChange',
	})
	const sizes = useFieldArray({
		control,
		name: 'sizes',
	})
	const colors = useFieldArray({
		control,
		name: 'colors',
	})

	const { push } = useRouter()
	const productId = +queryId

	const { data } = useProductByIdQuery({
		variables: {
			id: productId,
		},
		fetchPolicy: 'no-cache',
		skip: !productId,
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ productById }) => {
			const {
				tags,
				types,
				characteristics,
				categories,
				holidays,
				collections,
				packageQuantity,
				...response
			} = productById

			getKeys(response).forEach(({ key, value }) => {
				setValue(key, value)
			})

			const selectedTags = tags.map((tag) => ({
				name: tag.name,
				value: tag.id,
			}))
			const selectedHolidays = holidays.map((holiday) => ({
				name: holiday.name,
				value: holiday.id,
			}))
			const selectedCollections = collections.map((collection) => ({
				name: collection.name,
				value: collection.id,
			}))
			const selectedTypes = types.map((type) => ({
				name: type.name,
				value: type.id,
			}))
			const selectedCharacteristics = characteristics.map((characteristic) => ({
				name: characteristic.name,
				value: characteristic.id,
			}))
			const selectedCategories = categories.map((category) => ({
				name: category.name,
				value: category.id,
			}))
			setValue('tags', selectedTags)
			setValue('types', selectedTypes)
			setValue('characteristics', selectedCharacteristics)
			setValue('categories', selectedCategories)
			setValue('holidays', selectedHolidays)
			setValue('collections', selectedCollections)
			setValue('packageQuantity', String(packageQuantity))
		},
	})

	const [updateProduct] = useUpdateProductMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.PRODUCTS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<ProductInput> = async (data) => {
		await updateProduct({
			variables: {
				id: productId,
				data,
			},
		})
	}

	return {
		registerInput,
		control,
		errors,
		handleSubmit,
		onSubmit,
		data,
		sizes,
		colors,
	}
}
