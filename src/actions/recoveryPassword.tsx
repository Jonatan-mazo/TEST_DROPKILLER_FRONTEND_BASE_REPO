'use server'

import { API_DEV_BACK } from "@/config"

type changePasswordsProps = {
  changePasswordId: string
  newPassword: string
}

type changePasswordResponse = {
  error: string | null
  data: any
}

export async function recoveryPassword({ changePasswordId, newPassword }: changePasswordsProps): Promise<changePasswordResponse | undefined> {
  const responseError = {
    error: 'No props provided',
    data: []
  }

  const responseErrorUID = {
    error: 'RecoveryID not found',
    data: []
  }

  if (!changePasswordId) return responseErrorUID
  if (!newPassword) return responseError

  const resProducts: any = await recoveryPasswordFetch({ changePasswordId, newPassword })

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
  changePasswordId: string
  newPassword: string
}

const recoveryPasswordFetch = async ({ changePasswordId, newPassword }: Props) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ changePasswordId, newPassword }),
  }

  try {
    const res = await fetch(`${API_DEV_BACK}/users/change-password`, config)

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