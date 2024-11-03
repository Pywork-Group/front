'use server'

import type { User } from '@/__generated__/output'
import { getServerActionSession, sessionOptions } from '@/libs/iron.session.lib'
import { getServerActionIronSession, IronSessionData } from 'iron-session'
import { cookies } from 'next/headers'

export async function getServerSession() {
	const { user } = await getServerActionSession()

	return user
}

export const setServerSession = async (user: User | null) => {
	const session = await getServerActionSession()
	session.user = user
	await session.save()
}

export const destroySession = async () => {
	const session = await getServerActionIronSession<IronSessionData>(
		sessionOptions,
		cookies()
	)
	await session.destroy()
}
