'use server'

import { globalDataTypes } from "@/types/filtersFieldsTypes"
import { API_DEV_BACK } from "@/config";

type getProductsByPageSizeProps = {
  token: string,
  pageSize: number,
  selectedPage: number
}

export async function getProductsByPageSize({ token, pageSize, selectedPage }: getProductsByPageSizeProps): Promise<globalDataTypes | undefined> {
  const responseError: globalDataTypes = {
    error: 'No props provided',
    data: '{}',
    total: 0,
    totalPages: 0,
    currentPage: 0
  }

  if (!token) return responseError
  if (isNaN(pageSize)) return responseError
  if (isNaN(selectedPage)) return responseError

  const resProducts: any = await getProductData({ token, pageSize })

  if (resProducts.data) {
    const { data, pagination } = resProducts.data

    return {
      error: null,
      data: JSON.stringify(data),
      total: pagination.totalItems,
      totalPages: pagination.totalPages,
      currentPage: pagination.currentPage
    }
  } else {
    const response: globalDataTypes = {
      error: 'No products to return',
      data: '{}',
      total: 0,
      totalPages: 0,
      currentPage: 0
    }

    return response
  }
}

type Props = {
  token: string
  pageSize: number
}

const getProductData = async ({ token, pageSize }: Props) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  }

  try {
    const res = await fetch(`${API_DEV_BACK}/products?offset=0&limit=${pageSize}`, config)
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