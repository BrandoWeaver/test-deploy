import { CONTENT_SERVICE } from '~/services/contentService'
export function useFollowStatus(creator_id?: string) {
  const config = useRuntimeConfig()
  const followCreator_id = ref(creator_id || '')
  const unfollowCreator_id = ref(creator_id || '')
  const { locale } = useI18n()
  const { data: dataFollowStatus, execute: executeFollowStatus } =
    CONTENT_SERVICE.fetchFollowStatus({
      config,
      locale: locale.value,
      server: false,
      creator_id: creator_id || '',
    })
  const {
    execute: follow,
    data: followData,
    status: followStatus,
  } = CONTENT_SERVICE.followCreator({
    config,
    locale: locale,
    creator_id: followCreator_id,
    onError: (error) => {
      console.log(error)
    },
  })
  const {
    execute: unfollow,
    data: unfollowData,
    status: unfollowStatus,
  } = CONTENT_SERVICE.unfollowCreator({
    config,
    locale: locale,
    creator_id: unfollowCreator_id,

    onError: (error) => {
      console.log(error)
    },
  })
  const listFollow = ref<string[]>([])
  const handleFollow = (creator_id: string) => {
    if (!listFollow.value.includes(creator_id)) {
      listFollow.value.push(creator_id)
      followCreator_id.value = creator_id
      follow()
    } else {
      listFollow.value = listFollow.value.filter((val) => val !== creator_id)
      unfollowCreator_id.value = creator_id
      unfollow()
    }
  }
  const STORAGE_KEY = 'follow'
  const getFollowedUsers = (): string[] => {
    if (import.meta.client) {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    }
    return []
  }

  const saveFollowToStorage = (id: string) => {
    if (import.meta.client) {
      const current = getFollowedUsers()
      if (!current.includes(id)) {
        current.push(id)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(current))
      }
    }
  }

  const removeFollowFromStorage = (id: string) => {
    if (import.meta.client) {
      const current = getFollowedUsers()
      const filtered = current.filter((userId) => userId !== id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
    }
  }

  const isFollowed = (id: string): boolean => {
    return getFollowedUsers().includes(id)
  }
  return {
    isFollowed,
    removeFollowFromStorage,
    dataFollowStatus,
    follow,
    unfollow,
    followData,
    unfollowData,
    followStatus,
    unfollowStatus,
    saveFollowToStorage,
    executeFollowStatus,
    handleFollow,
    listFollow,
  }
}
