export function getAccessToken(): string | null {
  return useCookie('authToken').value || null
}

export function setAccessToken(token: string) {
  useCookie('authToken').value = token
}
