import type { ICatalogFiltersArguments } from '@/components/ui/templates/catalog/filters/interface/catalog-filters.interface'
import type {
	TypeCatalogFilters,
	TypeCatalogRangeFilters,
} from '@/shared/types/filter/filter.type'
import {
	useEffect,
	useState,
	type ChangeEvent,
	type Dispatch,
	type SetStateAction,
} from 'react'

export const useCatalogRangeFilters = (
	filters: TypeCatalogFilters,
	productsQuery: ICatalogFiltersArguments,
	setProductsQuery: Dispatch<SetStateAction<ICatalogFiltersArguments>>,
	isMouseUp: boolean,
	setIsMouseUp: Dispatch<SetStateAction<boolean>>
) => {
	const [errors, setErrors] = useState({
		min: '',
		max: '',
	})
	const [values, setValues] = useState({
		min: productsQuery.min ? productsQuery.min : filters.price.min,
		max: productsQuery.max ? productsQuery.max : filters.price.max,
	})

	const onChange = (
		e: ChangeEvent<HTMLInputElement>,
		variant: keyof TypeCatalogRangeFilters,
		input: 'range' | 'input'
	) => {
		const newValue = parseFloat(e.target.value) || 0

		let newErrors = {
			min: '',
			max: '',
		}
		if (isNaN(newValue)) return

		if (!newValue && newValue !== 0) {
			newErrors[variant] = `Поле обязательно.`
		} else if (variant === 'min' || variant === 'max') {
			if (newValue < filters.price.min) {
				newErrors[variant] = `Минимум - ${filters.price.min}`
			} else if (newValue > filters.price.max) {
				newErrors[variant] = `Максимум - ${filters.price.max}`
			}
		}

		setErrors(newErrors)
		setValues((prev) => ({
			...prev,
			[variant]: newValue,
		}))
		if (!newErrors.min && !newErrors.max && input !== 'range') {
			setTimeout(() => {
				setProductsQuery((prev) => ({
					...prev,
					...(variant === 'min'
						? { min: String(newValue) }
						: variant === 'max'
						? { max: String(newValue) }
						: {}),
				}))
			}, 500)
		}
	}

	useEffect(() => {
		if (isMouseUp) {
			setProductsQuery((prev) => ({
				...prev,
				min: String(values.min),
				max: String(values.max),
			}))
			setIsMouseUp(false)
		}
	}, [isMouseUp])

	return {
		onChange,
		values,
		errors,
	}
}
