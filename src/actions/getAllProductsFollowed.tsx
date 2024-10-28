'use server'

import { API_DEV_BACK } from "@/config"

type allProductsFollowdProps = {
  token: string
}

type getProductsResponse = {
  error: string | null
  data: any
}

export async function getAllProductsFollowed({ token }: allProductsFollowdProps): Promise<getProductsResponse | undefined> {
  const responseError = {
    error: 'No props provided',
    data: []
  }

  if (!token) return responseError

  const resProducts: any = await geetAllProductsFollowed({ token })

  if (resProducts.data) {
    return {
      error: null,
      data: JSON.stringify(resProducts.data)
    }
  } else {
    const response = {
      error: 'No products to return',
      data: null,
    }

    return response
  }

}



type Props = {
  token: string
}

const geetAllProductsFollowed = async ({ token }: Props) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  }

  try {
    const res = await fetch(`${API_DEV_BACK}/product-follow`, config)
    if (res.ok && res.status === 200) {
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
