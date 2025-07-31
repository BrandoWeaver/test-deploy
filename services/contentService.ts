import { API } from '~/constants/apiEndpoints'
import type { RuntimeConfig } from '@nuxt/schema'
import { useApi } from '~/composables/custom-fetch-api/useApi'
export const CONTENT_SERVICE = {
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
        API.HOME.LIST_SEASONAL.replace(':type', 'web')
          .replace(':version', 'v1')
          .replace(':lang', 'en'),
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
  fetchDiscoverList: ({
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
    onSuccess?: (data: Discover.Detail) => void
    onError?: (error: any) => void
  }) => {
    return useApi<Discover.Detail>(
      () =>
        API.POST.DISCOVER.replace(':type', 'web')
          .replace(':version', 'v1')
          .replace(':lang', 'en'),
      {
        query: {
          page,
          per_page: perPage,
        },
        watch: [locale, page],
        server: false,
        immediate: true,
        onSuccess,
        onError,
      }
    )
  },
  fetchBrowseCollectionList: ({
    config,
    locale,
    onSuccess,
    onError,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: BROWSERCOLLECTION.Root) => void
    onError?: (error: any) => void
    server?: boolean
  }) => {
    return useApi<BROWSERCOLLECTION.Root>(
      () =>
        API.HOME.LIST_COLLECTION.replace(':type', 'web')
          .replace(':version', 'v1')
          .replace(':lang', 'en'),
      {
        watch: [locale],
        server: false,
        immediate: true,
        onSuccess,
        onError,
      }
    )
  },
  fetchCreatorList: ({
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
    onSuccess?: (data: ICreator.IList) => void
    onError?: (error: any) => void
  }) => {
    return useApi<ICreator.IList>(
      () =>
        API.HOME.CREATOR_LIST.replace(':type', 'web')
          .replace(':version', 'v1')
          .replace(':lang', 'en'),
      {
        query: {
          page,
          per_page: perPage,
        },
        watch: [locale, page],
        server: false,
        immediate: true,
        onSuccess,
        onError,
      }
    )
  },
  fetchSlugDetail: ({
    config,
    locale,
    onSuccess,
    onError,
    server,
    slug,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: POST.PostDetail) => void
    onError?: (error: any) => void
    server?: boolean
    slug: globalThis.Ref<string, string>
  }) => {
    return useApi<POST.PostDetail>(
      () =>
        API.POST.GET_CONTENT_BY_SLUG.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale.value),
      {
        query: {
          slug: slug || '',
        },
        server,
        immediate: true,
        watch: [slug, locale],
        onSuccess,
        onError,
      }
    )
  },
  fetchLikeStatus: ({
    config,
    locale,
    onSuccess,
    onError,
    server,
    slug_detail_id,
  }: {
    config: RuntimeConfig
    locale: string
    onSuccess?: (data: ILIKE.LikeRes) => void
    onError?: (error: any) => void
    server?: boolean
    slug_detail_id: string
  }) => {
    const authStore = useAuthStore()
    return useApi<ILIKE.LikeRes>(
      () =>
        API.POST.CHECK_LIKE_STATUS.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale)
          .replace(':content_id', slug_detail_id),
      {
        server: false,
        immediate: authStore.authenticated,
        onSuccess,
        onError,
      }
    )
  },
  fetchFollowStatus: ({
    config,
    locale,
    onSuccess,
    onError,
    server,
    creator_id,
  }: {
    config: RuntimeConfig
    locale: string
    onSuccess?: (data: IFOLLOW.RootFollow) => void
    onError?: (error: any) => void
    server?: boolean
    creator_id: string
  }) => {
    const authStore = useAuthStore()

    return useApi<IFOLLOW.RootFollow>(
      () =>
        API.POST.CHECK_FOLLOW_STATUS.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale)
          .replace(':authorId', creator_id),
      {
        server,
        immediate: authStore.authenticated,
        onSuccess,
        onError,
      }
    )
  },
  followCreator: ({
    config,
    locale,
    onSuccess,
    onError,
    creator_id,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: IFOLLOW.followRes) => void
    onError?: (error: any) => void
    creator_id: Ref<string>
  }) => {
    return useApi<IFOLLOW.followRes>(
      () =>
        API.POST.FOLLOW.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale.value)
          .replace(':authorId', creator_id.value),
      {
        method: 'POST',
        server: false,
        immediate: false,
        onSuccess,
        onError,
      }
    )
  },
  unfollowCreator: ({
    config,
    locale,
    onSuccess,
    onError,
    creator_id,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: IFOLLOW.followRes) => void
    onError?: (error: any) => void
    creator_id: Ref<string>
  }) => {
    return useApi<IFOLLOW.followRes>(
      () =>
        API.POST.UN_FOLLOW.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale.value)
          .replace(':authorId', creator_id.value),
      {
        method: 'POST',
        server: false,
        immediate: false,
        onSuccess,
        onError,
      }
    )
  },
  fetchListSeriesCard: ({
    page,
    perPage,
    config,
    locale,
    onSuccess,
    onError,
    section_id,
  }: {
    page: globalThis.Ref<number, number>
    perPage: number
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: IImageSeries.ImageData) => void
    onError?: (error: any) => void
    section_id: globalThis.Ref<number | undefined, number | undefined>
  }) => {
    return useApi<IImageSeries.ImageData>(
      () =>
        API.POST.GET_SERIES_CONTENT.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale.value),
      {
        query: {
          page: page,
          per_page: perPage,
          section_id: section_id,
        },
        watch: [() => section_id, locale],
        server: false,
        immediate: section_id !== undefined,
        onSuccess,
        onError,
      }
    )
  },
  fetchRelateImage: ({
    page,
    perPage,
    config,
    locale,
    onSuccess,
    onError,
    formatTags,
  }: {
    page: globalThis.Ref<number, number>
    perPage: number
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: IRELATEIMAGE.RelateImage) => void
    onError?: (error: any) => void
    formatTags: globalThis.ComputedRef<string | undefined>
  }) => {
    return useApi<IRELATEIMAGE.RelateImage>(
      () =>
        API.POST.GET_RELATED_IMAGE.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale.value),
      {
        query: {
          page: page,
          per_page: perPage,
          tagIds: formatTags,
        },
        server: false,
        watch: [locale],
        immediate: true,
        onSuccess,
        onError,
      }
    )
  },
}
