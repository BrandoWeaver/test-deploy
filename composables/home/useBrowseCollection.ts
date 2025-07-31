import { CONTENT_SERVICE } from '~/services/contentService'

export function useBrowseCollection() {
  const config = useRuntimeConfig()
  const { locale } = useI18n()
  const {
    data: browseCollectionData,
    status: statusBrowseCollection,
    refresh: refreshBrowseCollection,
    error: errBrowseCollection,
  } = CONTENT_SERVICE.fetchBrowseCollectionList({
    config,
    locale: locale,
    onError(error) {
      // console.error('Failed to load seasonal:', error)
    },
  })
  return {
    browseCollectionData,
    statusBrowseCollection,
    refreshBrowseCollection,
    errBrowseCollection,
  }
}
