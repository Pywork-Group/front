import type { CatalogQuery } from '@/__generated__/output'

export type TypeCatalog = CatalogQuery

export type TypeCatalogCategories = CatalogQuery['catalog']['categories']

export type TypeCatalogProducts = CatalogQuery['catalog']['products']

export type TypeCatalogFilters = CatalogQuery['catalog']['filters']

export type TypeCatalogRootCategory = NonNullable<CatalogQuery['catalog']['rootCategory']>

export type TypeCatalogBlock = CatalogQuery['catalog']['block']