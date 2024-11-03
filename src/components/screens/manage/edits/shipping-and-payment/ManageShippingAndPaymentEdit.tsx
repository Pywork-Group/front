'use client'

import Container from '@/components/ui/common/container/Container'
import Button from '@/components/ui/common/form/button/Button'
import Field from '@/components/ui/common/form/field/Field'
import TextEditor from '@/components/ui/common/form/text-editor/TextEditor'
import { REQUIRED_VALIDATION } from '@/components/ui/common/form/validations/form.validations'
import { useManageShippingAndPaymentEdit } from '@/hooks/manage/pages/useManageShippingAndPaymentEdit'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import globalStyles from '../ManageEdits.module.scss'
import styles from './ManageShippingAndPaymentEdit.module.scss'

const ManageShippingAndPaymentEdit: FC = () => {
	const { registerInput, control, errors, handleSubmit, onSubmit } =
		useManageShippingAndPaymentEdit()

	return (
		<div className={globalStyles.edit}>
			<Container>
				<div className={globalStyles.wrapper}>
					<h1 className={globalStyles.heading}>Доставка и Оплата</h1>
					<form className={globalStyles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...registerInput(
								'shippingName',
								REQUIRED_VALIDATION('Название для доставки')
							)}
							className={styles.field}
							label="Название для доставки"
							error={errors.shippingName}
						/>
						<Controller
							name="shippingContent"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<TextEditor
									className={styles.editor}
									onChange={onChange}
									error={error}
									value={value}
									label="Описание для доставки"
								/>
							)}
							rules={REQUIRED_VALIDATION('Описание для доставки')}
						/>
						<Field
							{...registerInput(
								'paymentName',
								REQUIRED_VALIDATION('Название для оплаты')
							)}
							className={styles.field}
							label="Название для оплаты"
							error={errors.paymentName}
						/>
						<Controller
							name="paymentContent"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<TextEditor
									className={styles.editor}
									onChange={onChange}
									error={error}
									value={value}
									label="Описание для оплаты"
								/>
							)}
							rules={REQUIRED_VALIDATION('Описание для оплаты')}
						/>
						<Button
							buttonClassName={globalStyles.update}
							wrapperClassName={globalStyles.updateWrapper}
						>
							Обновить
						</Button>
					</form>
				</div>
			</Container>
		</div>
	)
}

export default ManageShippingAndPaymentEdit
