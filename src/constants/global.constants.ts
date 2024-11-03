export const GRAPHQL_SERVER_URL = process.env.GRAPHQL_SERVER_URL as string

export const IS_SERVER = typeof window === 'undefined'
export const IS_CLIENT = typeof window !== 'undefined'
export const IS_PRODUCTION = process.env.APP_ENV === 'production'
export const IS_DEVELOPMENT = process.env.APP_ENV === 'development'

export const ACCENT_COLOR = '#000'