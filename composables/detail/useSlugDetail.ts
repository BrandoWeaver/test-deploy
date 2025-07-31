import { CONTENT_SERVICE } from '~/services/contentService'

export async function useSlugDetail({ slug }: { slug: string }) {
  const config = useRuntimeConfig()
  const { locale } = useI18n()
  const getSlug = ref(slug)
  const { data: dataSlugDetail, status: statusSlugDetail } =
    await CONTENT_SERVICE.fetchSlugDetail({
      config,
      locale: locale,
      server: true,
      slug: getSlug,
      onError(error) {
        console.error('Failed to load slug:', error)
      },
    })

  const isPending = computed(() => statusSlugDetail.value === 'pending')
  return {
    dataSlugDetail,
    statusSlugDetail,
    isPending,
  }
}
