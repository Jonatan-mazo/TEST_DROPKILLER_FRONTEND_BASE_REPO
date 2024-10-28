import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
  const cookieStore = cookies()
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.

  const cookiesLocale = cookieStore.get('dropkillerLocale')
  const locale = cookiesLocale && (cookiesLocale.value === 'es' || cookiesLocale.value === 'us' || cookiesLocale.value === 'br') ? cookiesLocale.value : 'es'

  return {
    locale,
    messages: (await import(`../../messages/${locale}.ts`)).default
  };
});
