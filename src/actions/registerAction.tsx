'use server'

import { API_DEV_BACK } from "@/config"

type makeRegisterProps = {
  password: string
  fullname: string
  email: string
  mobilePhone: string
  country: string
}

type changePasswordResponse = {
  error: string | null
  data: any
}

export async function makeRegister({ fullname, email, password, mobilePhone, country }: makeRegisterProps): Promise<changePasswordResponse | undefined> {
  const responseError = {
    error: 'No props provided',
    data: []
  }

  if (!fullname) return responseError
  if (!password) return responseError
  if (!email) return responseError
  if (!mobilePhone) return responseError
  if (!country) return responseError

  const registerObj = {
    fullname,
    password,
    email,
    mobilePhone,
    country
  }

  const resProducts: any = await makeRegisterFetch(registerObj)

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
  password: string
  fullname: string
  email: string
  mobilePhone: string
  country: string
}

const makeRegisterFetch = async (registerObj: Props) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerObj),
  }

  try {
    const res = await fetch(`${API_DEV_BACK}/users/signup`, config)

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
