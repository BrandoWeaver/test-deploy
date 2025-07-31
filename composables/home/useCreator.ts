import { CONTENT_SERVICE } from '~/services/contentService'

export function useCreator() {
  const config = useRuntimeConfig()
  const { locale } = useI18n()
  const pageCreator = ref(1)
  const rowPerPageCreator = ref(10)
  const isFetchingCreator = ref(false)
  const allItemsCreator = reactive<{
    data: ICreator.CreatorOfTheWeek[]
  }>({
    data: [],
  })
  const {
    status: statusCreator,
    execute: executeCreator,
    data: dataCreator,
  } = CONTENT_SERVICE.fetchCreatorList({
    page: pageCreator,
    perPage: rowPerPageCreator.value,
    config,
    locale: locale,
    onSuccess(data) {
      isFetchingCreator.value = false
      allItemsCreator.data.push(...data.data)
    },
    onError(error) {
      // console.error('Failed to load seasonal:', error)
    },
  })
  const loadMoreCreator = () => {
    if (isFetchingCreator.value || statusCreator.value === 'pending') return
    isFetchingCreator.value = true
    pageCreator.value += 1
  }
  watch(locale, () => {
    pageCreator.value = 1
    executeCreator()
    allItemsCreator.data = []
  })
  return {
    pageCreator,
    rowPerPageCreator,
    isFetchingCreator,
    allItemsCreator,
    dataCreator,
    loadMoreCreator,
    statusCreator,
  }
}
