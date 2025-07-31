// composables/useCollection.ts
import { useI18n } from 'vue-i18n'
import { useApi } from '~/composables/custom-fetch-api/useApi'
import { API } from '~/constants/apiEndpoints'

export const useCollection = (contentId: string) => {
  const { locale } = useI18n()

  const {
    execute: addToCollection,
    data: addCollectionData,
    status: addStatus,
  } = useApi<COLLECTION.IcollectionRes>(
    () =>
      API.POST.ADD_COLLECTION.replace(':type', 'web')
        .replace(':version', 'v1')
        .replace(':lang', locale.value)
        .replace(':contentId', contentId),
    {
      method: 'POST',
      watch: false,
      immediate: false,
    }
  )

  const {
    execute: removeFromCollection,
    data: removeCollectionData,
    status: removeStatus,
  } = useApi<COLLECTION.IcollectionRes>(
    () =>
      API.POST.REMOVE_COLLECTION.replace(':type', 'web')
        .replace(':version', 'v1')
        .replace(':lang', locale.value)
        .replace(':contentId', contentId),
    {
      method: 'DELETE',
      watch: false,
      immediate: false,
    }
  )
  const STORAGE_KEY = 'collection'

  const getCollection = (): string[] => {
    if (import.meta.client) {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    }
    return []
  }

  const saveCollectionToStorage = (id: string) => {
    if (import.meta.client) {
      const current = getCollection()
      if (!current.includes(id)) {
        current.push(id)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(current))
      }
    }
  }

  const removeCollectionFromStorage = (id: string) => {
    if (import.meta.client) {
      const current = getCollection()
      const filtered = current.filter((userId) => userId !== id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
    }
  }

  const isCollected = (id: string): boolean => {
    return getCollection().includes(id)
  }
  return {
    addToCollection,
    removeFromCollection,
    addCollectionData,
    removeCollectionData,
    addStatus,
    removeStatus,
    saveCollectionToStorage,
    removeCollectionFromStorage,
    isCollected,
  }
}
