import type {
	TypeParamId,
	TypeParamSlug,
	TypeSearchParams,
} from '@/shared/types/param/param.type'

export interface IPageSlugParam {
	params: TypeParamSlug
}

export interface IPageIdParam {
	params: TypeParamId
}

export interface IPageSearchParam {
	searchParams?: TypeSearchParams
}
