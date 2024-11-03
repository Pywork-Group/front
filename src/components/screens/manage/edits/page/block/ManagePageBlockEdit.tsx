import { PageType } from '@/__generated__/output'
import Field from '@/components/ui/common/form/field/Field'
import TextEditor from '@/components/ui/common/form/text-editor/TextEditor'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import globalStyles from '../../ManageEdits.module.scss'
import styles from '../ManagePageEdit.module.scss'
import type { IManagePageBlockEdit } from './interface/manage-page-block-edit.interface'

const ManagePageBlockEdit: FC<IManagePageBlockEdit> = ({
	type,
	registerInput,
	control,
	errors,
}) => {
	const isHome = type === PageType.Home

	return (
		<div className={styles.block}>
			<div className={globalStyles.fill}>
				<div className={styles.object}>
					<h3 className={globalStyles.subHeading}>
						{isHome ? 'Блок в преимуществах' : 'Текстовый блок'}
					</h3>
					<div className={styles.objectFill}>
						<Field
							{...registerInput(`blocks.${0}.heading`)}
							className={styles.objectField}
							label="Заголовок"
							error={errors.blocks && errors.blocks[0]?.heading}
						/>
						<Controller
							name={`blocks.${0}.content`}
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
				{isHome && (
					<>
						<div className={styles.object}>
							<h3 className={globalStyles.subHeading}>Блок под отзывами</h3>
							<div className={styles.objectFill}>
								<Field
									{...registerInput(`blocks.${1}.heading`)}
									className={styles.objectField}
									label="Заголовок"
									error={errors.blocks && errors.blocks[1]?.heading}
								/>
								<Controller
									name={`blocks.${1}.content`}
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
						<div className={styles.object}>
							<h3 className={globalStyles.subHeading}>Блок под статьями</h3>
							<div className={styles.objectFill}>
								<Field
									{...registerInput(`blocks.${2}.heading`)}
									className={styles.objectField}
									label="Заголовок"
									error={errors.blocks && errors.blocks[2]?.heading}
								/>
								<Controller
									name={`blocks.${2}.content`}
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
					</>
				)}
			</div>
		</div>
	)
}

export default ManagePageBlockEdit
