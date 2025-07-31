export const useSessionStorage = () => {
  const isClient = typeof window !== 'undefined'

  const setSessionItem = (key: string, value: any) => {
    if (!isClient) return
    const serialized = JSON.stringify(value)
    sessionStorage.setItem(key, serialized)
  }

  const getSessionItem = <T = any>(key: string): T | null => {
    if (!isClient) return null
    const item = sessionStorage.getItem(key)
    return item ? (JSON.parse(item) as T) : null
  }

  const removeSessionItem = (key: string) => {
    if (!isClient) return
    sessionStorage.removeItem(key)
  }

  const clearSession = () => {
    if (!isClient) return
    sessionStorage.clear()
  }
  return {
    setSessionItem,
    getSessionItem,
    removeSessionItem,
    clearSession,
  }
}
