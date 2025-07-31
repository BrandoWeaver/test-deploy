import { defineStore } from 'pinia'

export interface RootCollection {
  status: string
  message: string
  data: DaumCollection[]
}

export interface DaumCollection {
  id: number
  user_id: number
  content_id: number
  qty: number
  contents: ContentsCollection
}

export interface ContentsCollection {
  id: number
  name: string
  thumbnail: string
  slug: string
}

const STORAGE_KEY = 'collection'

export const useCollectionStore = defineStore('collection', {
  state: () => ({
    items: new Set<string>(),
    loadingItems: new Set<string>(),
    errorItems: new Map<string, string>(),
    loadingAll: false,
    errorAll: '' as string | null,
  }),

  actions: {
    initFromLocalStorage() {
      if (process.client) {
        try {
          const stored = localStorage.getItem(STORAGE_KEY)
          this.items = stored ? new Set(JSON.parse(stored)) : new Set()
        } catch (err) {
          console.warn('Failed to load collection from localStorage', err)
          this.items = new Set()
        }
      }
    },

    saveCollectionToStorage() {
      if (process.client) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...this.items]))
      }
    },

    async add(id: string) {
      const config = useRuntimeConfig()
      const route = useRouter()
      if (!getAccessToken()) {
        route.push('/auth/login')
        return
      }
      if (this.loadingItems.has(id)) return

      this.loadingItems.add(id)
      this.errorItems.delete(id)

      try {
        await $fetch(
          `${config.public.apiUrl}/api/web/v1/en/collections/${id}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }
        )
        this.items.add(id)
        this.saveCollectionToStorage()
      } catch (err: any) {
        const message = err?.message || 'Add failed'
        this.errorItems.set(id, message)
        console.error('Add to collection failed:', message)
      } finally {
        this.loadingItems.delete(id)
      }
    },

    async remove(id: string) {
      const config = useRuntimeConfig()
      if (this.loadingItems.has(id)) return

      this.loadingItems.add(id)
      this.errorItems.delete(id)

      try {
        await $fetch(
          `${config.public.apiUrl}/api/web/v1/en/collections/${id}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }
        )
        this.items.delete(id)
        this.saveCollectionToStorage()
      } catch (err: any) {
        const message = err?.message || 'Remove failed'
        this.errorItems.set(id, message)
        console.error('Remove from collection failed:', message)
      } finally {
        this.loadingItems.delete(id)
      }
    },

    async toggle(id: string) {
      if (this.loadingItems.has(id)) return
      if (this.items.has(id)) {
        await this.remove(id)
      } else {
        await this.add(id)
      }
    },

    isCollected(id: string) {
      return this.items.has(id)
    },

    isLoading(id: string) {
      return this.loadingItems.has(id)
    },

    getError(id: string) {
      return this.errorItems.get(id) || null
    },

    async fetchAll() {
      const config = useRuntimeConfig()

      if (this.loadingAll) return

      this.loadingAll = true
      this.errorAll = null

      try {
        const res = await $fetch<RootCollection>(
          `${config.public.apiUrl}/api/web/v1/en/collections`,
          {
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }
        )
        const ids = res.data.map((item) => String(item.content_id))
        this.items = new Set(ids)
        this.saveCollectionToStorage()
      } catch (err: any) {
        this.errorAll = err?.message || 'Failed to fetch collection'
        console.error('Fetch all collection failed:', this.errorAll)
      } finally {
        this.loadingAll = false
      }
    },

    clearLocal() {
      this.items.clear()
      this.loadingItems.clear()
      this.errorItems.clear()
      this.errorAll = null
      if (process.client) {
        localStorage.removeItem(STORAGE_KEY)
      }
    },
  },
})
