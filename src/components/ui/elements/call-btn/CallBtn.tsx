'use client'

import { useSendCallRequest } from '@/hooks/public/request/useSendCallRequest'
import { useState, type FC, type PropsWithChildren } from 'react'
import { Controller } from 'react-hook-form'
import Field from '../../common/form/field/Field'
import MaskedField from '../../common/form/masked-field/MaskedField'
import Modal from '../../templates/modal/Modal'
import styles from './CallBtn.module.scss'
import type { ICallBtn } from './interface/call-btn.interface'

const CallBtn: FC<PropsWithChildren<ICallBtn>> = ({ className, children }) => {
	const { registerInput, control, errors, handleSubmit, onSubmit } =
		useSendCallRequest()
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<button
				className={className && className}
				onClick={() => setIsShow(true)}
			>
				{children}
			</button>
			{isShow && (
				<Modal closeModal={() => setIsShow(false)} className={styles.modal}>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...registerInput('name', {
								required: 'Ваше имя обязательное поле',
							})}
							className={styles.field}
							placeholder="Ваше имя"
							error={errors.name}
						/>
						<Controller
							name="phone"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<MaskedField
									className={styles.field}
									mask={'+{7} (000) 000-00-00'}
									placeholder="Телефон"
									error={error}
									value={String(value)}
									onChange={onChange}
								/>
							)}
							rules={{
								required: 'Телефон обязательное поле',
							}}
						/>
						<button className={styles.send}>Отправить</button>
					</form>
				</Modal>
			)}
		</>
	)
}

export default CallBtn
