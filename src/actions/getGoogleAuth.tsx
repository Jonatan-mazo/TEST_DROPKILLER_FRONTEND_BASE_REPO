'use server'

import { API_DEV_BACK } from "@/config"

export async function getGoogleUrlFn() {
  const googleUrl = await getGoogleURLFetch()
  console.log(googleUrl);

  if (googleUrl.error) {
    return ({
      data: null,
      error: googleUrl.error
    })
  } else if (googleUrl.data) return {
    data: googleUrl.data,
    error: null
  }

  return {
    data: [],
    error: null
  }
}

const getGoogleURLFetch = async () => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await fetch(`${API_DEV_BACK}/auth/google`, config)

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