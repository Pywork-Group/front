import type { ButtonHTMLAttributes } from 'react'

export interface IButtonProps {
	wrapperClassName?: string
	buttonClassName?: string
}

type TypeButtonPropsField = ButtonHTMLAttributes<HTMLButtonElement> &
	IButtonProps

export interface IButton extends TypeButtonPropsField {}
