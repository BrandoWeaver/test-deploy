export function useApi<T>(
  urlGetter: string | (() => string),
  options: {
    onSuccess?: (data: T) => void
    onError?: (error: any) => void
    skipAuth?: boolean
    [key: string]: any
    server?: boolean
  } = {}
) {
  const token = getAccessToken()
  const onSuccess = options.onSuccess
  const onError = options.onError
  const headers = {
    ...(options.skipAuth
      ? {}
      : token
        ? { Authorization: `Bearer ${token}` }
        : {}),
    ...options.headers,
  }

  const res = useFetch<T>(
    typeof urlGetter === 'function' ? urlGetter : () => urlGetter,
    {
      baseURL:
        typeof urlGetter === 'string' ? urlGetter : 'https://api.thortok.com',
      headers,
      key: options.key,
      ...options,
      onRequestError({ error }) {
        // Handle the request errors
        // console.error('onRequestError:', error)
        if (error.name === 'AbortError') {
        } else {
          if (onError) {
            onError(error)
          }
        }
      },
      onResponse({ response }) {
        // console.log('onResponse:', response)
        const data = response._data as T
        const status = response.status

        if (status >= 200 && status < 300) {
          if (onSuccess) {
            onSuccess(data)
          }
        } else {
          if (onError) {
            onError(data)
          }
        }
      },
      onResponseError({ response, error }) {
        // console.error('onResponseError:', response)
        const err = response?._data
        if (onError) {
          onError(err)
          console.error('Error in useApi:', err)
        }
      },
    }
  )
  return res
}
