'use server'

export async function verifiedCaptcha(token: string) {
  try {
    const secret = process.env.NEXT_TURNSTILE_SECRET_KEY || 'secret'

    const verifiedCode: any = await fetch(`https://challenges.cloudflare.com/turnstile/v0/siteverify`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        secret,
        response: token
      })
    })
    const response = await verifiedCode.json()

    if (!response.success) {
      return {
        data: null,
        error: 'Invalid captcha'
      }
    } else {
      return {
        data: 'success',
        error: null
      }
    }
  } catch (error: any) {
    return {
      data: null,
      error: 'Invalid captcha'
    }
  }
}
