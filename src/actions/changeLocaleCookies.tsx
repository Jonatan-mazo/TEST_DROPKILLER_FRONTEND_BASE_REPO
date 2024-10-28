'use server'

import { cookies } from 'next/headers'

export async function changeLocaleCookies(data: string) {
  cookies().set('dropkillerLocale', data.toLowerCase())
}