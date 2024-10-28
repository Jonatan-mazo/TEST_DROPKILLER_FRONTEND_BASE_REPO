'use server'

import { API_DEV_BACK } from "@/config"

type getCategoriesProps = {
  token: string
}

export async function getCategories({ token }: getCategoriesProps): Promise<any> {
  const responseError = {
    error: 'token invalid',
    data: null
  }

  if (!token) return responseError

  const resProducts: any = await getCategoriesFn({ token })

  if (resProducts.data) {

    const data = JSON.parse(resProducts.data)
    const dataNames = data.map((cat: any) => cat.show ? cat.name : '')
    const filteredData = dataNames.filter((cat: any) => cat !== '')
    const tempData = Array.from(new Set<string>(filteredData)).sort()
    const options = tempData.map((cat: any) => ({ label: `${cat[0].toUpperCase()}${cat.slice(1)}`, value: cat }))

    return {
      error: null,
      data: options
    }
  } else {
    const response = {
      error: 'No categories loaded',
      data: null,
    }

    return response
  }

}

type Props = {
  token: string
}

const getCategoriesFn = async ({ token }: Props) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  }

  try {
    const res = await fetch(`${API_DEV_BACK}/categories`, config)
    if (res.ok && res.status === 200 || res.status === 201) {
      const response = await res.text()
      return { data: response, error: null }
    } else {
      const response = await res.json()
      return { data: null, error: response.error }
    }
  } catch (error: any) {
    console.log(error);
    return { data: null, error: error.message }
  }
}
