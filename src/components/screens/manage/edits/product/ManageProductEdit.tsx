'use client'

import Container from '@/components/ui/common/container/Container'
import Button from '@/components/ui/common/form/button/Button'
import ColorPalette from '@/components/ui/common/form/color-palette/ColorPalette'
import Field from '@/components/ui/common/form/field/Field'
import TextEditor from '@/components/ui/common/form/text-editor/TextEditor'
import UploadField from '@/components/ui/common/form/upload-field/UploadField'
import {
	NUMBER_PATTERN_VALIDATION,
	PRICE_PATTERN_VALIDATION,
	REQUIRED_VALIDATION,
} from '@/components/ui/common/form/validations/form.validations'
import ReactSelect from '@/components/ui/common/selects/react-select/ReactSelect'
import { useManageSelectCategories } from '@/hooks/manage/categories/useManageSelectCategories'
import { useManageSelectCharacteristics } from '@/hooks/manage/characteristics/useManageSelectCharacteristics'
import { useManageSelectCollections } from '@/hooks/manage/collections/useManageSelectCollections'
import { useManageSelectHolidays } from '@/hooks/manage/holidays/useManageSelectHolidays'
import { useManageProductEdit } from '@/hooks/manage/products/useManageProductEdit'
import { useManageSelectTags } from '@/hooks/manage/tags/useManageSelectTags'
import { useManageSelectTypes } from '@/hooks/manage/types/useManageSelectTypes'
import { ListPlus, Trash2 } from 'lucide-react'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import globalStyles from '../ManageEdits.module.scss'
import styles from './ManageProductEdit.module.scss'
import ManageProductSeoEdit from './seo/ManageProductSeoEdit'

const ManageProductEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const {
		registerInput,
		control,
		errors,
		data,
		handleSubmit,
		onSubmit,
		sizes,
		colors,
	} = useManageProductEdit(queryId)
	const { tags } = useManageSelectTags()
	const { types } = useManageSelectTypes()
	const { characteristics } = useManageSelectCharacteristics()
	const { categories } = useManageSelectCategories()
	const { holidays } = useManageSelectHolidays()
	const { collections } = useManageSelectCollections()

	return (
		<div className={globalStyles.edit}>
			<Container>
				<div className={globalStyles.wrapper}>
					<h1 className={globalStyles.heading}>
						Редактирование - {data?.productById.name || 'Продукт'}
					</h1>
					<form className={globalStyles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...registerInput('name', REQUIRED_VALIDATION('Имя'))}
							className={styles.field}
							label="Имя"
							error={errors.name}
						/>
						<Field
							{...registerInput('sku', REQUIRED_VALIDATION('Артикул'))}
							className={styles.field}
							label="Артикул"
							error={errors.sku}
						/>
						<Controller
							name="price"
							control={control}
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<Field
									onChange={onChange}
									value={value}
									className={styles.field}
									label="Цена"
									error={error}
								/>
							)}
							rules={{
								...REQUIRED_VALIDATION('Цена'),
								...PRICE_PATTERN_VALIDATION(),
							}}
						/>
						<Controller
							name="oldPrice"
							control={control}
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<Field
									onChange={onChange}
									value={value || undefined}
									className={styles.field}
									label="Бывшая цена (Не обязательно)"
									error={error}
								/>
							)}
							rules={PRICE_PATTERN_VALIDATION()}
						/>
						<Field
							{...registerInput('packageQuantity', {
								...REQUIRED_VALIDATION('Количество в пачке'),
								...NUMBER_PATTERN_VALIDATION(),
							})}
							className={styles.field}
							label="Количество в пачке"
							error={errors.packageQuantity}
						/>
						<Controller
							name="tags"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<ReactSelect
									field={field}
									options={tags || []}
									label="Метки (Не обязательно)"
									error={error}
									className={styles.select}
									isMulti
								/>
							)}
						/>
						<Controller
							name="types"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<ReactSelect
									field={field}
									options={types || []}
									label="Типы (Не обязательно)"
									error={error}
									isMulti
									className={styles.select}
								/>
							)}
						/>
						<Controller
							name="characteristics"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<ReactSelect
									field={field}
									options={characteristics || []}
									label="Характеристики (Не обязательно)"
									error={error}
									className={styles.select}
									isMulti
								/>
							)}
						/>
						<Controller
							name="categories"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<ReactSelect
									field={field}
									options={categories || []}
									label="Категории (Не обязательно)"
									error={error}
									className={styles.select}
									isMulti
								/>
							)}
						/>
						<Controller
							name="holidays"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<ReactSelect
									field={field}
									options={holidays || []}
									label="Праздники (Не обязательно)"
									error={error}
									className={styles.select}
									isMulti
								/>
							)}
						/>
						<Controller
							name="collections"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<ReactSelect
									field={field}
									options={collections || []}
									label="Коллекции (Не обязательно)"
									error={error}
									className={styles.select}
									isMulti
								/>
							)}
						/>
						<Controller
							name="iconPath"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									className={styles.upload}
									onChange={onChange}
									value={value}
									error={error}
									label="Иконка (Не обязательно)"
								/>
							)}
						/>
						<Controller
							name="images"
							control={control}
							defaultValue={[]}
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									className={styles.objectUpload}
									onChange={onChange}
									value={value}
									error={error}
									isMulti
									placeholder="Выбрать картинки (Не обязательно)"
									label="Картинки"
									uploadedClassName={styles.uploadedImages}
								/>
							)}
						/>
						<Controller
							name="description"
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
							rules={REQUIRED_VALIDATION('Описание')}
						/>
						<div className={styles.objects}>
							{sizes.fields.length > 0 && (
								<h2 className={styles.objectTitle}>Размеры</h2>
							)}
							{sizes.fields.map((field, index) => (
								<div className={styles.object} key={field.id}>
									<div className={styles.objectFill}>
										<Field
											{...registerInput(
												`sizes.${index}.size`,
												REQUIRED_VALIDATION('Размер')
											)}
											className={styles.objectField}
											label="Размер"
											error={errors.sizes && errors.sizes[index]?.size}
										/>
										<Controller
											name={`sizes.${index}.price`}
											control={control}
											render={({
												field: { value, onChange },
												fieldState: { error },
											}) => (
												<Field
													onChange={onChange}
													value={value}
													className={styles.objectField}
													label="Цена"
													error={error}
												/>
											)}
											rules={{
												...REQUIRED_VALIDATION('Цена'),
												...PRICE_PATTERN_VALIDATION(),
											}}
										/>
										<Controller
											name={`sizes.${index}.oldPrice`}
											control={control}
											render={({
												field: { value, onChange },
												fieldState: { error },
											}) => (
												<Field
													onChange={onChange}
													value={value || undefined}
													className={styles.objectField}
													label="Бывшая цена (Не обязательно)"
													error={error}
												/>
											)}
											rules={PRICE_PATTERN_VALIDATION()}
										/>
									</div>
									<Button
										type="button"
										buttonClassName={styles.remove}
										wrapperClassName={styles.removeWrapper}
										onClick={() => sizes.remove(index)}
									>
										<Trash2 />
										Удалить Размер
									</Button>
								</div>
							))}
							<Button
								type="button"
								buttonClassName={styles.add}
								onClick={() =>
									sizes.append({ size: '', price: '0.00', oldPrice: undefined })
								}
							>
								<ListPlus />
								Добавить Размер
							</Button>
						</div>
						<div className={styles.objects}>
							{colors.fields.length > 0 && (
								<h2 className={styles.objectTitle}>Цвета</h2>
							)}
							{colors.fields.map((field, index) => (
								<div className={styles.object} key={field.id}>
									<div className={styles.objectFill}>
										<Controller
											name={`colors.${index}.color`}
											control={control}
											defaultValue="#ffffff"
											render={({
												field: { value, onChange },
												fieldState: { error },
											}) => (
												<ColorPalette
													className={styles.palette}
													value={value}
													onChange={onChange}
													error={error}
													label="Цвет"
												/>
											)}
											rules={REQUIRED_VALIDATION('Цвет')}
										/>
										<Controller
											name={`colors.${index}.images`}
											control={control}
											defaultValue={[]}
											render={({
												field: { value, onChange },
												fieldState: { error },
											}) => (
												<UploadField
													className={styles.objectUpload}
													onChange={onChange}
													value={value}
													error={error}
													isMulti
													placeholder="Выбрать картинки"
													label="Картинки"
													uploadedClassName={styles.uploadedImages}
												/>
											)}
											rules={REQUIRED_VALIDATION('Картинки')}
										/>
									</div>
									<Button
										type="button"
										buttonClassName={styles.remove}
										wrapperClassName={styles.removeWrapper}
										onClick={() => colors.remove(index)}
									>
										<Trash2 />
										Удалить Цвет
									</Button>
								</div>
							))}
							<Button
								type="button"
								buttonClassName={styles.add}
								onClick={() =>
									colors.append({
										color: '',
										images: [],
									})
								}
							>
								<ListPlus />
								Добавить Цвет
							</Button>
						</div>
						<ManageProductSeoEdit
							registerInput={registerInput}
							errors={errors}
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

export default ManageProductEdit
