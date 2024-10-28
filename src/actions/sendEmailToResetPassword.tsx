'use server'

import { API_DEV_BACK } from "@/config"

type changePasswordsProps = {
  email: string
}

type changePasswordResponse = {
  error: string | null
  data: any
}

export async function sendEmailToResetPassword({ email }: changePasswordsProps): Promise<changePasswordResponse> {
  const responseError = {
    error: 'No props provided',
    data: []
  }

  if (!email) return responseError

  const resProducts: any = await changePasswordFetch({ email })

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
  email: string
}

const changePasswordFetch = async ({ email }: Props) => {

  try {
    const res = await fetch(`${API_DEV_BACK}/users/forgot-password/${email}`)

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
