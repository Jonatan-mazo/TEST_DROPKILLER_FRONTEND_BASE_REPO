'use server'

import { API_DEV_BACK } from "@/config"

type changePasswordsProps = {
  oldPassword: string
  newPassword: string
  userId: string
  email: string
  changePasswordId: string
  token: string
}

type changePasswordResponse = {
  error: string | null
  data: any
}

export async function changePassword({ userId, email, newPassword, oldPassword, changePasswordId, token }: changePasswordsProps): Promise<changePasswordResponse | undefined> {
  const responseError = {
    error: 'No props provided',
    data: []
  }

  const responseErrorUID = {
    error: 'User ID not found',
    data: []
  }

  if (!userId) return responseErrorUID
  if (!changePasswordId) return responseErrorUID
  if (!email) return responseError
  if (!token) return responseError
  if (!newPassword) return responseError
  if (!oldPassword) return responseError

  const resProducts: any = await changePasswordFetch({ userId, email, newPassword, oldPassword, changePasswordId, token })

  if (resProducts.data) {
    return {
      error: null,
      data: JSON.stringify(resProducts.data)
    }
  } else {
    const response = {
      error: resProducts.error,
      data: null,
    }

    return response
  }

}


type Props = {
  oldPassword: string
  newPassword: string
  userId: string
  email: string
  changePasswordId: string
  token: string
}

const changePasswordFetch = async ({ userId, email, newPassword, oldPassword, changePasswordId, token }: Props) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, email, newPassword, oldPassword, changePasswordId }), // CAMBIAR userId por ChangePasswordID
  }

  try {
    const res = await fetch(`${API_DEV_BACK}/users/update-password`, config)

    if (res.ok && (res.status === 200 || res.status === 201)) {
      const response = await res.json()
      return { data: response, error: null }
    } else {
      const response = await res.json()
      return { data: null, error: response.message }
    }
  } catch (error: any) {
    return { data: null, error: error.message }
  }
}
