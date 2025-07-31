import { defineStore } from 'pinia'
import { API } from '~/constants/apiEndpoints'
import { useApi } from '~/composables/custom-fetch-api/useApi'

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: undefined as IUSERDETAIL.Data | undefined,
  }),
  actions: {
    setUserData(data: IUSERDETAIL.Data | undefined) {
      this.userData = data
    },
    setEnableTwoFa(value: boolean) {
      if (this.userData) {
        this.userData.enable_two_fa = value
      }
    },
    async fetchUserData(lang: string) {
      const { execute } = useApi<IUSERDETAIL.IDETAIL>(
        () =>
          API.USER.USER_DETAIL.replace(':type', 'web')
            .replace(':version', 'v1')
            .replace(':lang', lang),
        {
          method: 'GET',
          immediate: true,
          onSuccess: (res) => {
            this.setUserData(res.data)
          },
          onError: () => this.setUserData(undefined),
        }
      )
    },
  },
})
