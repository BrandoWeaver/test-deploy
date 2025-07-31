import { CONTENT_SERVICE } from '~/services/contentService'

export function useDiscover() {
  const config = useRuntimeConfig()
  const { locale } = useI18n()
  const discoverStore = useDiscoverStore()

  const pageDiscover = ref(1)
  const rowPageDiscover = ref(10)
  const isFetchingDiscover = ref(false)

  const {
    data: discoverData,
    status,
    refresh: refreshDiscover,
    error: errDiscover,
    execute: executeDiscover,
  } = CONTENT_SERVICE.fetchDiscoverList({
    page: pageDiscover,
    perPage: rowPageDiscover.value,
    config,
    locale: locale,
    onSuccess(data) {
      isFetchingDiscover.value = false
      discoverStore.listItems.push(
        ...data.data.listItems.filter(
          (item) =>
            !discoverStore.listItems.some((existing) => existing.id === item.id)
        )
      )
      discoverStore.listMenu.push(
        ...data.data.listMenu.filter(
          (menu) =>
            !discoverStore.listMenu.some((existing) => existing.id === menu.id)
        )
      )
    },
    onError(error) {
      console.error('Failed to load discover:', error)
    },
  })

  const loadMoreDiscover = () => {
    if (isFetchingDiscover.value || status.value === 'pending') return
    isFetchingDiscover.value = true
    pageDiscover.value += 1
  }

  watch(locale, () => {
    pageDiscover.value = 1
    executeDiscover()
    discoverStore.resetDiscover()
  })

  return {
    discoverData,
    status,
    refreshDiscover,
    allItemsDiscover: discoverStore,
    pageDiscover,
    loadMoreDiscover,
    isFetchingDiscover,
    errDiscover,
    executeDiscover,
  }
}
