'use server'

import { cookies } from "next/headers";

export async function checkIsSessionActive() {
  const cookieStore = cookies();
  const AuthCookie = cookieStore.get('Authorization')
  if (AuthCookie) return true
  else return false
}