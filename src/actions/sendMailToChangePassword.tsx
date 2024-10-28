'use server'

import { API_DEV_BACK } from "@/config"

export async function sendMailToChangePassword(email: string, token: string) {
  const responseErrorUID = {
    error: 'No data provided',
    data: []
  }

  if (!email) return responseErrorUID
  if (!token) return responseErrorUID

  const response = await changePasswordFetch(email, token)

  if (response.data) {
    return {
      error: null,
      data: JSON.stringify(response.data)
    }
  } else {
    const res = {
      error: response.error,
      data: null,
    }

    return response
  }

}

const changePasswordFetch = async (email: string, token: string) => {
  try {

    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    }

    const res = await fetch(`${API_DEV_BACK}/users/replace-password/${email}`, config)

    if (res.ok && (res.status === 200 || res.status === 201)) {
      const response = await res.text()
      return { data: response, error: null }
    } else {
      const response = await res.json()

      return { data: null, error: response.message }
    }
  } catch (error: any) {
    return { data: null, error: error.message }
  }
}
