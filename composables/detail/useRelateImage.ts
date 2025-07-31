import { CONTENT_SERVICE } from '~/services/contentService'

export const useRelateImage = (
  formatTags: globalThis.ComputedRef<string | undefined>
) => {
  const config = useRuntimeConfig()
  const { locale } = useI18n()
  const pageRelateImage = ref(1)
  const rowPerPageSeries = ref(10)
  const isFetchingRelateImage = ref(false)
  const allRelateImageList = reactive<{
    listRelatedCard: IRELATEIMAGE.dataRelateImage[]
  }>({
    listRelatedCard: [],
  })
  const {
    status: statusRelateImage,
    execute: executeRelateImage,
    data: dataRelateImage,
  } = CONTENT_SERVICE.fetchRelateImage({
    page: pageRelateImage,
    perPage: rowPerPageSeries.value,
    config,
    locale: locale,
    formatTags: formatTags,
    onSuccess(data) {
      isFetchingRelateImage.value = false
      allRelateImageList.listRelatedCard.push(
        ...allRelateImageList.listRelatedCard,
        ...data.data
      )
    },
    onError(error) {
      console.error('Failed to load series:', error)
    },
  })
  const loadMoreRelateImageList = () => {
    if (isFetchingRelateImage.value || statusRelateImage.value === 'pending')
      return
    isFetchingRelateImage.value = true
    pageRelateImage.value += 1
  }
  watch(dataRelateImage, () => {
    allRelateImageList.listRelatedCard.push(
      ...(dataRelateImage.value?.data || [])
    )
  })
  watch(locale, () => {
    executeRelateImage()
    allRelateImageList.listRelatedCard = []
  })
  return {
    dataRelateImage,
    statusRelateImage,
    executeRelateImage,
    allRelateImageList,
    pageRelateImage,
    loadMoreRelateImageList,
    isFetchingRelateImage,
  }
}
