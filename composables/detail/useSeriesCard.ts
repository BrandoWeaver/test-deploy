import { CONTENT_SERVICE } from '~/services/contentService'

export function useSeriesCard(
  section_id: globalThis.Ref<number | undefined, number | undefined>
) {
  const config = useRuntimeConfig()
  const { locale } = useI18n()
  const pageSeries = ref(1)
  const rowPerPageSeries = ref(10)
  const isFetchingSeries = ref(false)

  const allListCardSeries = reactive<{
    listSeries: IImageSeries.ImageSeries[]
  }>({
    listSeries: [],
  })

  const {
    status: statusSeriesCard,
    execute: executeSeriesCard,
    data: dataSeriesCard,
  } = CONTENT_SERVICE.fetchListSeriesCard({
    page: pageSeries,
    perPage: rowPerPageSeries.value,
    config,
    locale: locale,
    section_id,
    onError(error) {
      console.error('Failed to load series:', error)
    },
  })

  watch(dataSeriesCard, (newData) => {
    if (newData?.data) {
      isFetchingSeries.value = false
      allListCardSeries.listSeries.push(...newData.data)
    }
  })

  watch(locale, () => {
    pageSeries.value = 1
    allListCardSeries.listSeries = []
    executeSeriesCard()
  })

  const loadMoreListSeries = () => {
    if (isFetchingSeries.value || statusSeriesCard.value === 'pending') return
    isFetchingSeries.value = true
    pageSeries.value += 1
  }

  return {
    dataSeriesCard,
    statusSeriesCard,
    executeSeriesCard,
    allListCardSeries,
    pageSeries,
    loadMoreListSeries,
    isFetchingSeries,
  }
}
