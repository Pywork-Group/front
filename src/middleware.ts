import { NextRequest, NextResponse } from 'next/server'
import { UserRole } from './__generated__/output'
import { EnumCookies } from './constants/enum.constants'
import { ADMIN_PAGES, PUBLIC_PAGES } from './constants/url.constants'
import { getSession } from './libs/iron.session.lib'

export async function middleware(request: NextRequest, response: NextResponse) {
	const refreshToken = request.cookies.get(EnumCookies.REFRESH_TOKEN)?.value
	const isAdminPage = request.url.includes(ADMIN_PAGES.HOME)
	const { user } = await getSession(request, response)

	if (!refreshToken || !user) {
		return redirectToLogin(isAdminPage, request)
	}

	try {
		if (user?.role === UserRole.Admin) return NextResponse.next()

		if (isAdminPage) return NextResponse.rewrite(new URL('/404', request.url))

		return NextResponse.next()
	} catch (error) {
		return redirectToLogin(isAdminPage, request)
	}
}

export const config = {
	matcher: ['/manage/:path*', '/profile'],
}

const redirectToLogin = (isAdminPage: boolean, request: NextRequest) => {
	return NextResponse.redirect(
		new URL(isAdminPage ? '/404' : PUBLIC_PAGES.LOGIN, request.url)
	)
}
