import { CONTENT_SERVICE } from '~/services/contentService'
export function useSeasonal() {
  const config = useRuntimeConfig()
  const { locale } = useI18n()
  const pageSeasonal = ref(1)
  const rowPageSeasonal = ref(10)
  const isFetchingSeasonal = ref(false)
  const seasonalList = ref<ISEASONAL.Daum[]>([])

  const {
    data: seasonalData,
    status,
    refresh: refreshSeasonal,
  } = CONTENT_SERVICE.fetchSeasonalList({
    page: pageSeasonal,
    perPage: rowPageSeasonal.value,
    config,
    locale: locale,
    onSuccess(data) {
      isFetchingSeasonal.value = false
      if (pageSeasonal.value === 1) {
        seasonalList.value = data?.data || []
      } else {
        seasonalList.value.push(...data?.data!)
      }
    },
    onError(error) {
      // console.error('Failed to load seasonal:', error)
    },
  })
  const loadMoreSeasonal = () => {
    if (isFetchingSeasonal.value || status.value === 'pending') return
    isFetchingSeasonal.value = true
    pageSeasonal.value += 1
  }

  watch(locale, () => {
    pageSeasonal.value = 1
  })

  return {
    seasonalData,
    status,
    refreshSeasonal,
    seasonalList: seasonalList,
    pageSeasonal,
    loadMoreSeasonal,
    isFetchingSeasonal,
  }
}
