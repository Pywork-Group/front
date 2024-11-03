import type { TypeCatalogRootCategory } from '@/shared/types/catalog/catalog.type'

type TypeCategory = {
	name: string
	slug: string
}[]

export const getBreadcrumbCategories = (
	rootCategory: TypeCatalogRootCategory
): TypeCategory => {
	let parentPath: TypeCategory = [
		{ name: rootCategory.name, slug: rootCategory.slug },
	]
	let currentCategory: any = rootCategory
	let level = 0

	while (currentCategory.parent && level < 5) {
		currentCategory = currentCategory.parent
		parentPath.unshift({
			name: currentCategory.name,
			slug: currentCategory.slug,
		})
		level++
	}

	return parentPath
}
