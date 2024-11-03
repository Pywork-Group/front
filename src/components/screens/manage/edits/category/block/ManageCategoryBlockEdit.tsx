import Field from '@/components/ui/common/form/field/Field'
import TextEditor from '@/components/ui/common/form/text-editor/TextEditor'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import globalStyles from '../../ManageEdits.module.scss'
import styles from '../ManageCategoryEdit.module.scss'
import type { IManageCategoryBlockEdit } from './interface/manage-category-block-edit.interface'

const ManageCategoryBlockEdit: FC<IManageCategoryBlockEdit> = ({
	registerInput,
	control,
	errors,
}) => {
	return (
		<div className={styles.block}>
			<div className={globalStyles.fill}>
				<div className={styles.object}>
					<h3 className={globalStyles.subHeading}>Текстовый блок</h3>
					<div className={styles.objectFill}>
						<Field
							{...registerInput(`block.heading`)}
							className={styles.objectField}
							label="Заголовок"
							error={errors.block?.heading}
						/>
						<Controller
							name={`block.content`}
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
									label="Описание"
								/>
							)}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ManageCategoryBlockEdit
