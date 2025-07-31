import { CONTENT_SERVICE } from '~/services/contentService'
import { useApi } from '../custom-fetch-api/useApi'
import { API } from '~/constants/apiEndpoints'

export function useLikeStatus({ slug_detail_id }: { slug_detail_id: string }) {
  const config = useRuntimeConfig()
  const { locale } = useI18n()
  const { data: dataLiksStatus, execute: executeLiksStatus } =
    CONTENT_SERVICE.fetchLikeStatus({
      config,
      locale: locale.value,
      server: false,
      slug_detail_id: slug_detail_id,
    })
  const {
    execute: like,
    data: likeData,
    status: likeStatus,
  } = useApi<POST.PostDetail>(
    () =>
      API.POST.LIKE.replace(':type', 'web')
        .replace(':version', 'v1')
        .replace(':lang', locale.value)
        .replace(':contentId', slug_detail_id),
    {
      method: 'POST',
      watch: false,
      immediate: false,
    }
  )

  const {
    execute: unlike,
    data: unlikeData,
    status: unlikeStatus,
  } = useApi<POST.PostDetail>(
    () =>
      API.POST.UNLIKE.replace(':type', 'web')
        .replace(':version', 'v1')
        .replace(':lang', locale.value)
        .replace(':contentId', slug_detail_id),
    {
      method: 'POST',
      watch: false,
      immediate: false,
    }
  )
  const STORAGE_KEY = 'like_content'

  const getLikeContent = (): string[] => {
    if (import.meta.client) {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    }
    return []
  }

  const saveLikeToStorage = (id: string) => {
    if (import.meta.client) {
      const current = getLikeContent()
      if (!current.includes(id)) {
        current.push(id)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(current))
      }
    }
  }

  const removeLikeFromStorage = (id: string) => {
    if (import.meta.client) {
      const current = getLikeContent()
      const filtered = current.filter((userId) => userId !== id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
    }
  }

  const isLiked = (id: string): boolean => {
    return getLikeContent().includes(id)
  }
  return {
    dataLiksStatus,
    like,
    unlike,
    likeData,
    unlikeData,
    likeStatus,
    unlikeStatus,
    isLiked,
    saveLikeToStorage,
    removeLikeFromStorage,
    executeLiksStatus,
  }
}
