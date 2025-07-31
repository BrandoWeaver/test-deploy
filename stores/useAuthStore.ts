/** @format */
import { defineStore } from 'pinia'

interface UserPayloadInterface {
  username: string
  password: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
    message: '',
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      this.message = ''
      this.loading = true
      const config = useRuntimeConfig()

      try {
        const { data, pending, error }: any = await useFetch(
          `${config.public.apiUrl}/api/web/v1/en/auth/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            }),
          }
        )
        this.loading = pending

        if (data.value) {
          const token = useCookie('authToken')
          token.value = data?.value?.token
          this.authenticated = true
          this.message = 'Login successful!'
        } else if (error.value) {
          this.message = error.value.data.message
        }
      } catch (error) {
        this.message = 'An error occurred during login.'
      } finally {
        this.loading = false
      }
    },
    checkAuth() {
      const token = useCookie('authToken')
      this.authenticated = !!token.value
    },
    logUserOut() {
      const token = useCookie('authToken')
      this.authenticated = false
      token.value = null
      this.message = 'Logged out successfully.'
    },
  },
})
