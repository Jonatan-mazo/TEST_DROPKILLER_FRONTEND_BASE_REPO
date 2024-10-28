'use server'

import { API_DEV_BACK } from "@/config"

type saveProductsProps = {
  token: string
  productID: string
}

type saveProductsResponse = {
  error: string | null
  data: string | null
}

export async function savingProducts({ token, productID }: saveProductsProps): Promise<saveProductsResponse | undefined> {
  const responseError = {
    error: 'token or productID invalid',
    data: null
  }

  if (!token) return responseError

  const resProducts: any = await saveProductsFn({ token, productID })
  if (resProducts.data) {
    return {
      error: null,
      data: resProducts.data.message
    }
  } else {
    const response = {
      error: 'No product saved',
      data: null,
    }

    return response
  }

}



type Props = {
  token: string
  productID: string
}

const saveProductsFn = async ({ token, productID }: Props) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  }

  try {
    const res = await fetch(`${API_DEV_BACK}/product-follow/${productID}`, config)

    if (res.ok && res.status === 200 || res.status === 201) {
      const response = await res.json()
      return { data: response, error: null }
    } else {
      const response = await res.json()
      return { data: null, error: response.error }
    }
  } catch (error: any) {
    return { data: null, error: error.message }
  }
}
