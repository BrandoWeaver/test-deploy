import { API } from '~/constants/apiEndpoints'
import type { RuntimeConfig } from '@nuxt/schema'
import { useApi } from '~/composables/custom-fetch-api/useApi'
export const AUTH_SERVICE = {
  fetchSeasonalList: ({
    page,
    perPage,
    config,
    locale,
    onSuccess,
    onError,
  }: {
    page: globalThis.Ref<number, number>
    perPage: number
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: ISEASONAL.ILISTSEASON) => void
    onError?: (error: any) => void
  }) => {
    return useApi<ISEASONAL.ILISTSEASON>(
      () =>
        API.HOME.LIST_SEASONAL.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale.value),
      {
        query: {
          page,
          per_page: perPage,
        },
        server: false,
        immediate: true,
        watch: [locale, page],
        onSuccess,
        onError,
      }
    )
  },
}
