import { validEmail } from '@/utils/regex/email.regex'

export const REQUIRED_VALIDATION = (name: string) => ({
	required: `${name} - обязательное поле.`,
})

export const LENGTH_VALIDATION = (count: number) => ({
	minLength: {
		value: count,
		message: `Минимум ${count} символов.`,
	},
})

export const PATTERN_VALIDATION = (pattern: RegExp, name: string) => ({
	pattern: {
		value: pattern,
		message: `Введите корректный ${name}`,
	},
})

export const PRICE_PATTERN_VALIDATION = () => ({
	pattern: {
		value: /^\d+\.\d{2}$/,
		message: 'Введите в правильном формате, например: 100.00',
	},
})

export const NUMBER_PATTERN_VALIDATION = () => ({
	pattern: {
		value: /(?:^|[^.,\d])(\d+)(?:[^.,\d]|$)/,
		message: 'Введите число',
	},
})

export const emailValidation = {
	...REQUIRED_VALIDATION('E-mail'),
	...PATTERN_VALIDATION(validEmail, 'E-mail'),
}

export const passwordValidation = {
	...REQUIRED_VALIDATION('Пароль'),
	...LENGTH_VALIDATION(6),
}

export const loginValidation = {
	...REQUIRED_VALIDATION('Логин'),
	...LENGTH_VALIDATION(6),
}
